import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const AnalyticalData = () => {
  return (
    <div className="analyticaldata-container">
      <div className="analyticaldata-content">
        <div className="analyticaldata-menu">
          <MenuTitle title="TAHLILIY MA'LUMOTLAR" />
        </div>
        <div className="analyticaldata-main"></div>
      </div>
    </div>
  );
};

export default AnalyticalData;
