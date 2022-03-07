import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider, Popover, message, List } from "antd";
import { useDispatch } from "react-redux";
import { getRandom } from "@/utils/math";
import {
  GetSongsDetail,
  UpdatePlayMode,
  UpdateCurrentSongIndex,
  UpdateSongsDetail,
  GetLyric,
  UpdateLyricIdx,
} from "@/store/modules/player/actionCreator";
import { useSelector, shallowEqual } from "react-redux";
import { formatMinuteSecond, imageFormater, getMusic } from "@/utils/helper";
import { NavLink } from "react-router-dom";
const Player = memo(() => {
  const audioRef = useRef();
  const playRef = useRef();
  // const [mode, setMode] = useState(0); // 顺序 随机 单曲
  const [time, setTime] = useState("00.00");

  const [isFirst, setIsFirst] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [sliderBar, setSliderBar] = useState(0);
  const [slidering, setSlidering] = useState(false);
  const handleEnded = () => {
    if (playMode === 0) {
      return playNext();
    } else if (playMode === 1) {
      if (playList.length === 1) {
        playNext();
      } else {
        let random = getRandom(playList.length);
        while (random === curSongIdx) {
          random = getRandom(playList.length);
        }
        dispatch(UpdateCurrentSongIndex(random));
        dispatch(UpdateSongsDetail(playList[random]));
      }
    } else {
      if (!slidering) {
        setTime(0);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
  };
  const { songsDetail, playMode, playList, curSongIdx, lyric, lyricIdx } =
    useSelector((store) => {
      let player = store.player;
      return {
        songsDetail: player.songsDetail,
        playMode: player.playMode,
        playList: player.playList,
        curSongIdx: player.curSongIdx,
        lyric: player.lyric,
        lyricIdx: player.lyricIdx,
      };
    }, shallowEqual);
  const text = ["顺序播放", "随机播放", "单曲循环"];
  const playPrev = () => {
    let idx = curSongIdx === 0 ? playList.length - 1 : curSongIdx - 1;
    dispatch(UpdateCurrentSongIndex(idx));
    dispatch(UpdateSongsDetail(playList[idx]));
  };
  const playNext = () => {
    let idx = curSongIdx === playList.length - 1 ? 0 : curSongIdx + 1;
    dispatch(UpdateCurrentSongIndex(idx));
    dispatch(UpdateSongsDetail(playList[idx]));
  };
  const dispatch = useDispatch();
  const changeMode = () => {
    dispatch(UpdatePlayMode(playMode !== 2 ? playMode + 1 : 0));
  };
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
    const id = songsDetail.id ? songsDetail.id : 1867079368;
    audioRef.current.src = getMusic(id);
    dispatch(GetLyric());
    if (songsDetail.id) {
      if (!isFirst) {
        setTimeout(() => {
          setPlaying(false);
          playRef.current.click();
        }, 0);
      }
      setIsFirst(false);
    }
  }, [songsDetail.id]);
  useEffect(() => {
    const id = songsDetail.id ? songsDetail.id : 1867079368;
    dispatch(GetSongsDetail(id));
  }, [dispatch, songsDetail.id]);
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
    let i = 0;
    let ctime = e.target.currentTime * 1000;
    if (!lyric.length) return;
    for (; i < lyric.length; i++) {
      if (ctime < lyric[i].time) break;
    }
    if (lyricIdx !== i - 1) {
      dispatch(UpdateLyricIdx(i - 1));
      message.info({
        content: lyric[i - 1].content,
        icon: <span></span>,
        key: "lyric",
        className: "lyric-style",
        duration: 0,
      });
    }
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
          <button
            onClick={() => playPrev()}
            className="sprite_playbar prev"
          ></button>
          <button
            className="sprite_playbar play"
            ref={playRef}
            onClick={() => play()}
          ></button>
          <button
            onClick={() => playNext()}
            className="sprite_playbar next "
          ></button>
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
        <Operator mode={playMode}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_playbar btn volume"></button>
            <Popover content={text[playMode]}>
              <button
                onClick={() => changeMode()}
                className="sprite_playbar btn loop"
              ></button>
            </Popover>
            <Popover
              title={<h3>我的播放列表 ({playList?.length})</h3>}
              content={
                <List
                  style={{ width: "500px" }}
                  dataSource={playList}
                  renderItem={(item, idx) => (
                    <List.Item>
                      <div
                        className={"text-nowrap hover-class w-100"}
                        onClick={() => {
                          dispatch(UpdateCurrentSongIndex(idx));
                          dispatch(UpdateSongsDetail(playList[idx]));
                        }}
                      >
                        <span
                          className="text-nowrap underline"
                          style={{ fontSize: "14px", marginRight: "10px" }}
                        >
                          {item.name}
                        </span>
                        <span
                          className="text-nowrap"
                          style={{ fontSize: "14px", color: "#7d7d7d" }}
                        >
                          {item.al.name}
                        </span>
                      </div>
                    </List.Item>
                  )}
                ></List>
              }
            >
              <button className="sprite_playbar btn playlist"></button>
            </Popover>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={() => handleEnded()}
      ></audio>
    </PlaybarWrapper>
  );
});

export default Player;
