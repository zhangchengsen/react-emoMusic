import React, { memo } from "react";
import { Play } from "./style";
import { imageFormater } from "@/utils/helper";
import { GetSongsDetail } from "@/store/modules/player/actionCreator";
import { useDispatch } from "react-redux";
const topRank = memo((props) => {
  const { topInfo, newRankInfo, rankInfo } = props;
  const dispatch = useDispatch();
  return (
    <div className="w-100">
      <div className="flex">
        <div className="" style={{ width: "33%", padding: "21px 0 0 20px" }}>
          <img
            style={{ marginBottom: "20px" }}
            src={imageFormater(topInfo.coverImgUrl, 80)}
            alt=""
          />
          {topInfo.tracks?.slice(0, 11).map((v) => {
            return (
              <div key={v.id}>
                <Play className="">
                  <div className="container flex align-center justify-between">
                    <div style={{ width: "80%" }} className="text-nowrap">
                      {v.name}
                    </div>
                    <div
                      onClick={() => dispatch(GetSongsDetail(v.id))}
                      className="play sprite_table"
                    ></div>
                  </div>
                </Play>
              </div>
            );
          })}
        </div>
        <div className="" style={{ width: "34%", padding: "21px 0 0 22px" }}>
          <img
            style={{ marginBottom: "20px" }}
            src={imageFormater(rankInfo.coverImgUrl, 80)}
            alt=""
          />
          {rankInfo.tracks?.slice(0, 11).map((v) => {
            return (
              <div key={v.id}>
                <Play className="">
                  <div className="container flex align-center justify-between">
                    <div style={{ width: "80%" }} className="text-nowrap">
                      {v.name}
                    </div>
                    <div
                      onClick={() => dispatch(GetSongsDetail(v.id))}
                      className="play sprite_table"
                    ></div>
                  </div>
                </Play>
              </div>
            );
          })}
        </div>
        <div className="" style={{ width: "33%", padding: "21px 0 0 18px" }}>
          <img
            style={{ marginBottom: "20px" }}
            src={imageFormater(newRankInfo.coverImgUrl, 80)}
            alt=""
          />
          {newRankInfo.tracks?.slice(0, 11).map((v) => {
            return (
              <div key={v.id}>
                <Play>
                  <div className="container flex align-center justify-between">
                    <div style={{ width: "80%" }} className="text-nowrap">
                      {v.name}
                    </div>
                    <div
                      onClick={() => dispatch(GetSongsDetail(v.id))}
                      className="play sprite_table"
                    ></div>
                  </div>
                </Play>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default topRank;
