import React, { memo, useEffect } from "react";
import Header from "@/components/recommend-bar";
import { getRank } from "@/store/modules/discover/actionCreator";
// import { getRank } from "@/api/discover/recommend";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper,
} from "./style";
import TopRank from "./topRank";
const index = memo(() => {
  const dispatch = useDispatch();
  const { topRankInfo, rankInfo, newRankInfo } = useSelector(
    (state) => ({
      topRankInfo: state.recommend.topRankInfo,
      rankInfo: state.recommend.rankInfo,
      newRankInfo: state.recommend.newRankInfo,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getRank(0));
    dispatch(getRank(2));
    dispatch(getRank(3));
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <Content className="wrap-v2">
        <RecommendLeft>
          <Header title="榜单"></Header>
          <div className="tops">
            <TopRank
              topInfo={topRankInfo}
              rankInfo={rankInfo}
              newRankInfo={newRankInfo}
            ></TopRank>
          </div>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
export default index;
