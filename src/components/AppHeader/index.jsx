import React, { memo } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { HeaderList } from "@/vender/local-data";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
function YmtxAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        {/* <NavLink to="/">发现</NavLink>
        <NavLink to="/mine">我的</NavLink>
        <NavLink to="/friends">好友</NavLink> */}
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            {" "}
          </a>
          {HeaderList.map((v, idx) => {
            if (idx < 3) {
              return (
                <NavLink
                  key={idx}
                  to={v.to}
                  activeClassName={"active"}
                  className="selectItem "
                >
                  {v.name}
                  <i className="sprite_01 icon"></i>
                </NavLink>
              );
            } else {
              return (
                <a
                  href={v.to}
                  target="_blank"
                  rel="noreferrer"
                  className="selectItem"
                  key={idx}
                >
                  {v.name}
                </a>
              );
            }
          })}
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            type="text"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="creator">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
}
export default memo(YmtxAppHeader);
