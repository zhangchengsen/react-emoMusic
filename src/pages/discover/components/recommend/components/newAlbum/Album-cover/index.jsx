import React, { memo } from "react";
import { AlbumWrapper } from "./style";
import { imageFormater } from "@/utils/helper";
import PropTypes from "prop-types";
const index = memo((props) => {
  const { info, size, width, bgp } = props;
  // console.log(size);
  return (
    <AlbumWrapper size={size} bgp={bgp} width={width}>
      <div className="album-image">
        <img src={imageFormater(info.picUrl, size)} alt=""></img>
        <a href="#/" className="cover sprite_cover">
          网易云音乐
        </a>
      </div>
      <div className="album-info">
        <div className="name ">{info.name}</div>
        <div className="artist">{info.artist?.name}</div>
      </div>
    </AlbumWrapper>
  );
});
index.propTypes = {
  info: PropTypes.object.isRequired,
  size: PropTypes.number,
  width: PropTypes.number,
  bgp: PropTypes.string,
};
index.defaultProps = {
  info: {},
  size: 130,
  width: 153,
  bgp: "-845px",
};
export default index;
