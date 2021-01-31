import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const PlansForOpenMeetings = () => {
  return (
    <div className="plansforopenmeetings-container">
      <div className="plansforopenmeetings-content">
        <div className="plansforopenmeetings-menu">
          <MenuTitle title="OCHIQ MAJLISLAR O‘TKAZISH REJALARI" />
        </div>
        <div className="plansforopenmeetings-main"></div>
      </div>
    </div>
  );
};

export default PlansForOpenMeetings;
