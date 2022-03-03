import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { DiscoverList } from "./styles";
import { discoverMenu } from "@/vender/local-data";
import { NavLink } from "react-router-dom";
function YmtxDiscover(props) {
  const { route } = props;

  return (
    <div>
      <DiscoverList>
        <div className="wrap-v1">
          {discoverMenu.map((v, idx) => {
            return (
              <NavLink key={idx} to={v.link} activeClassName="active">
                <span>{v.title}</span>
              </NavLink>
            );
          })}
        </div>
      </DiscoverList>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
}

export default memo(YmtxDiscover);
