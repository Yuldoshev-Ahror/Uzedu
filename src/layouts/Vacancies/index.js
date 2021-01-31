import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const Vacancies = () => {
  return (
    <div className="vacancies-container">
      <div className="vacancies-content">
        <div className="vacancies-menu">
          <MenuTitle title="BO‘SH ISH O‘RINLARI" />
        </div>
        <div className="vacancies-main"></div>
      </div>
    </div>
  );
};

export default Vacancies;
