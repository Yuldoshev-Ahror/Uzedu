import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const OpenData = () => {
  return (
    <div className="opendata-container">
      <div className="opendata-content">
        <div className="opendata-menu">
          <MenuTitle title="OCHIQ MA'LUMOTLAR" />
        </div>
        <div className="opendata-main"></div>
      </div>
    </div>
  );
};

export default OpenData;
