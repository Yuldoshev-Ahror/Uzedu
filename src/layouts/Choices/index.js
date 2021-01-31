import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const Choices = () => {
  return (
    <div className="choices-container">
      <div className="choices-content">
        <div className="choices-menu">
          <MenuTitle title="TANLOVLAR" />
        </div>
        <div className="choices-main"></div>
      </div>
    </div>
  );
};

export default Choices;
