import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const Statistika = () => {
  return (
    <div className="statistika-container">
      <div className="statistika-content">
        <div className="statistika-menu">
          <MenuTitle title="Statistika" />
        </div>
        <div className="statistika-main">
          <h3>Statistika</h3>
        </div>
      </div>
    </div>
  );
};

export default Statistika;
