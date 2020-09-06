import React from "react";
import "./menu-item.component.scss";

const MenuItem = ({ title, imageUrl }) => {
  const background = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div style={background} className="menu-item">
      <div className="content">
        <h1 className="title"> {title} </h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
