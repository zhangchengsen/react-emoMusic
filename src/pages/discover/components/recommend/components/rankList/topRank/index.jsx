import React, { memo } from "react";
import { TopRankingWrapper } from "./style";
import { imageFormater } from "@/utils/helper";
const topRank = memo((props) => {
  const { topInfo } = props;
  console.log(topInfo);
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img
            src={topInfo?.coverImgUrl && imageFormater(topInfo.coverImgUrl, 80)}
            alt=""
          />
          {/* <a href="/#" className="image_cover">
          </a> */}
        </div>
        <div className="info">
          <a href="/#">{topInfo?.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list"></div>
    </TopRankingWrapper>
  );
});

export default topRank;
