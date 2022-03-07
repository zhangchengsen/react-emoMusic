import React, { memo } from "react";
import { ThemeCoverWrapper } from "./style";
import { imageFormater, countFormater } from "@/utils/helper";
import { GetSongsDetail } from "@/store/modules/player/actionCreator";
import { useDispatch } from "react-redux";
function HotCard(props) {
  const dispatch = useDispatch();
  const playRecommend = (id) => {
    dispatch(GetSongsDetail(id));
  };
  return (
    <ThemeCoverWrapper onClick={() => playRecommend(props.id)}>
      <div className="cover-top text-nowrap">
        <img src={imageFormater(props.picUrl, 140)} alt=""></img>
        <div className="cover sprite_cover">
          <div
            className="info sprite_cover"
            style={{ backgroundColor: "#333" }}
          >
            <span>
              <i className="sprite_icon erji"></i>
              {countFormater(props.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{props.name}</div>
      <div className="cover-source"></div>
    </ThemeCoverWrapper>
  );
}

export default memo(HotCard);
