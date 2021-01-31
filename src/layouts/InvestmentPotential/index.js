import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const InvestmentPotential = () => {
  return (
    <div className="investmentpotential-container">
      <div className="investmentpotential-content">
        <div className="investmentpotential-menu">
          <MenuTitle title="Investitsiya salohiyati" />
        </div>
        <div className="investmentpotential-main"></div>
      </div>
    </div>
  );
};

export default InvestmentPotential;
