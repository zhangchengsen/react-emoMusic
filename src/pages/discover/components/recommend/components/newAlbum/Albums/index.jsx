import React, { memo, useState, useRef } from "react";
import { Carousel } from "antd";
import AlbumCover from "../Album-cover";
import { AlbumWrapper } from "./style";
const index = memo((props) => {
  const { album } = props;
  const [curIdx, setCurIdx] = useState(0);
  const carouselRef = useRef();
  // const prev = useCallback((from, to) => {
  //   console.log(from, to);
  // }, []);
  const prev = () => {
    if (curIdx) {
      carouselRef.current.prev();
      setCurIdx(0);
    }
  };
  const next = () => {
    if (!curIdx) {
      carouselRef.current.next();
      setCurIdx(1);
    }
  };
  return (
    <AlbumWrapper>
      <div className="content">
        <button
          onClick={() => prev()}
          className="arrow arrow-left sprite_02"
          style={{ marginRight: "5px" }}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={carouselRef} s>
            {[0, 1].map((v) => {
              return (
                <div key={v} className="page">
                  {album?.slice(v * 5, (v + 1) * 5).map((item) => {
                    return (
                      <AlbumCover
                        key={item.id}
                        info={item}
                        size={100}
                        width={118}
                        bgp={"-570px"}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>

        <button
          onClick={() => next()}
          className="arrow arrow-right sprite_02"
        ></button>
      </div>
    </AlbumWrapper>
  );
});

export default index;
