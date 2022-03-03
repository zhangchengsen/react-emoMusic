import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import PropTypes from "prop-types";
const index = memo((props) => {
  const { title, keyword } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keyword.map((v) => (
            <div key={v} className="item">
              <a href="todo">{v}</a>
              <span className="divider"></span>
            </div>
          ))}
        </div>
      </div>
    </HeaderWrapper>
  );
});
index.propTypes = {
  title: PropTypes.string.isRequired,
  keyword: PropTypes.array,
};
index.defaultProps = {
  keyword: [],
};
export default index;
