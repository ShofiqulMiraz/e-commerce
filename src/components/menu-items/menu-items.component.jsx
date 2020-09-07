import React from "react";
import "./menu-item.component.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  const background = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div
      style={background}
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="content">
        <h1 className="title"> {title} </h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
