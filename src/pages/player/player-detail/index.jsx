import React, { memo } from "react";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
const PlayDetail = memo(() => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>playerInfo</h2>
          <h2>songContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>hysimplaylist</h2>
          <h2>HySIMIsong</h2>
          <h2>download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});

export default PlayDetail;
