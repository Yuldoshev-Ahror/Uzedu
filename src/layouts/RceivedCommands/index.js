import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const RceivedCommands = () => {
  return (
    <div className="rceivedcommands-container">
      <div className="rceivedcommands-content">
        <div className="rceivedcommands-menu">
          <MenuTitle title="XALQ TA'LIMI VAZIRLIGI TOMONIDAN TIZIMDA KORRUPSIYAGA QARSHI KURASHISH BO‘YICHA QABUL QILINGAN BUYRUQLAR" />
        </div>
        <div className="rceivedcommands-main"></div>
      </div>
    </div>
  );
};

export default RceivedCommands;
