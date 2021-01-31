import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="frequentlyaskedquestions-container">
      <div className="frequentlyaskedquestions-content">
        <div className="frequentlyaskedquestions-menu">
          <MenuTitle title="KO‘P BERILADIGAN SAVOLLAR" />
        </div>
        <div className="frequentlyaskedquestions-main"></div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
