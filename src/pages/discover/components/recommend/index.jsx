import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { getBanner } from "@/store/modules/discover/actionCreator";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Hot from "./components/hot";
// import RankList from "./components/rankList/index";
import {
  CarouselWrapper,
  LeftWrapper,
  RightWrapper,
  ButtonControl,
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content,
} from "./style";
import { Carousel } from "antd";
import NewAlbum from "./components/newAlbum/index";
function Recommend(props) {
  const [curIdx, setCurIdx] = useState(0);
  const carouselRef = useRef();
  const dispatch = useDispatch();
  const carouselChange = useCallback((from, to) => {
    setCurIdx(to);
  }, []);
  const { banner } = useSelector(
    (state) => ({
      banner: state.recommend.banner,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getBanner);
  }, [dispatch]);
  const bgImage = banner[curIdx]?.imageUrl + "?imageView&blur=40x20";
  return (
    <>
      <CarouselWrapper imgUrl={bgImage}>
        <div className="wrap-v2 wrapper">
          <LeftWrapper>
            <Carousel
              effect="fade"
              className={"banner-item"}
              autoplay
              beforeChange={carouselChange}
              ref={carouselRef}
            >
              {banner.map((v, idx) => {
                return (
                  <img
                    src={v.imageUrl}
                    alt=""
                    key={idx}
                    className={"image"}
                  ></img>
                );
              })}
            </Carousel>
          </LeftWrapper>
          <RightWrapper></RightWrapper>
          <ButtonControl>
            <button
              className="btn left"
              onClick={() => carouselRef.current.prev()}
            ></button>
            <button
              className="btn right"
              onClick={() => carouselRef.current.next()}
            ></button>
          </ButtonControl>
        </div>
      </CarouselWrapper>
      <RecommendWrapper>
        <Content className="wrap-v2">
          <RecommendLeft>
            <Hot></Hot>
            <NewAlbum></NewAlbum>
            {/* <RankList></RankList> */}
          </RecommendLeft>
          <RecommendRight></RecommendRight>
        </Content>
      </RecommendWrapper>
    </>
  );
}

export default memo(Recommend);
