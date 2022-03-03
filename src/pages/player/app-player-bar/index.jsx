import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";
import { useDispatch } from "react-redux";
import { GetSongsDetail } from "@/store/modules/player/actionCreator";
import { useSelector, shallowEqual } from "react-redux";
import { formatMinuteSecond, imageFormater, getMusic } from "@/utils/helper";
import { NavLink } from "react-router-dom";
const Player = memo(() => {
  const audioRef = useRef();
  const [time, setTime] = useState("00.00");
  const [isFirst, setIsFirst] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [sliderBar, setSliderBar] = useState(0);
  const [slidering, setSlidering] = useState(false);
  const { songsDetail } = useSelector(
    (store) => ({
      songsDetail: store.player.songsDetail,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const keyUp = (e) => {
    e.preventDefault();
    if (e.keyCode === 32) play();
  };
  useEffect(() => {
    window.addEventListener("keyup", keyUp);
    return () => {
      window.removeEventListener("keyup", keyUp);
    };
  });

  useEffect(() => {
    dispatch(GetSongsDetail(1906719248));
    if (!isFirst) {
      play();
    } else {
      setIsFirst(false);
    }
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getMusic(1906719248);
  }, [songsDetail]);
  const play = () => {
    if (!playing) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const timeUpdate = (e) => {
    setTime(formatMinuteSecond(e.target.currentTime * 1000));
    if (!slidering)
      setSliderBar(((e.target.currentTime * 1000) / songsDetail.dt) * 100);
  };
  const changeSlider = useCallback(
    (value) => {
      setSlidering(true);
      setSliderBar(value);
      let newTime =
        (Math.floor((((songsDetail.dt / 100) * value) / 1000) * 1000000) /
          1000000) *
        1000;
      setTime(formatMinuteSecond(newTime));
    },
    [songsDetail.dt]
  );
  const afterChangeSlider = useCallback(
    (value) => {
      setSliderBar(value);
      setSlidering(false);
      let newTime =
        Math.floor((((songsDetail.dt / 100) * value) / 1000) * 1000000) /
        1000000;
      audioRef.current.currentTime = newTime;
    },
    [songsDetail.dt]
  );
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={playing}>
          <button className="sprite_playbar prev"></button>
          <button
            className="sprite_playbar play"
            onClick={() => play()}
          ></button>
          <button className="sprite_playbar next "></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/detail">
              {songsDetail?.al && (
                <img
                  className="img"
                  src={imageFormater(songsDetail.al.picUrl, 35)}
                  alt=""
                />
              )}
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songsDetail?.name}</span>
              <span href="#/" className="singer-name">
                {songsDetail?.al?.name}
              </span>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={sliderBar}
                onChange={changeSlider}
                onAfterChange={afterChangeSlider}
              />
              <div className="time">
                <span className="now-time">{time}</span>
                <span className="divider">/</span>
                <span className="duration0">
                  {formatMinuteSecond(songsDetail?.dt)}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_playbar btn volume"></button>
            {/* <Popover content={"随机播放"}> */}
            <button className="sprite_playbar btn loop"></button>
            {/* </Popover> */}
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)}></audio>
    </PlaybarWrapper>
  );
});

export default Player;
