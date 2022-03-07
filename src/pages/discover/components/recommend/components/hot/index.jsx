import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { tryRequest } from "@/utils/request";
import Header from "@/components/recommend-bar";
import { getHot } from "@/store/modules/discover/actionCreator";
import HotCard from "./hot-card";

const index = memo(() => {
  const dispatch = useDispatch();
  const { hotList } = useSelector(
    (state) => ({
      hotList: state.recommend.hotList,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getHot(8));
    console.log(hotList);
  }, [dispatch]);

  return (
    <>
      <Header
        title="热门推荐"
        keyword={["热门推荐华语", "流行", "摇滚", "民谣", "电子"]}
      ></Header>

      <div className="recommend-list">
        {hotList?.map((v) => {
          return <HotCard key={v.id} {...v}></HotCard>;
        })}
      </div>
    </>
  );
});
export default index;
