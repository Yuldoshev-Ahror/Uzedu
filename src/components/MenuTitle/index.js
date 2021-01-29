import React from "react";
import "./index.scss";

const MenuTitle = ({ title }) => {
  return (
    <div className="menutitle-container">
      <div className="menutitle-content">
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MenuTitle;
