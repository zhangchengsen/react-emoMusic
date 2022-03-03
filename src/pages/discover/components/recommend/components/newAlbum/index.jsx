import React, { memo, useEffect } from "react";
import Header from "@/components/recommend-bar";
import { getAlbum } from "@/store/modules/discover/actionCreator";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import Albums from "./Albums";

const index = memo(() => {
  const dispatch = useDispatch();
  const { album } = useSelector(
    (state) => ({
      album: state.recommend.album,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getAlbum(10));
  }, [dispatch]);
  return (
    <>
      <Header title="新碟上架"></Header>
      <Albums album={album}></Albums>
    </>
  );
});
export default index;
