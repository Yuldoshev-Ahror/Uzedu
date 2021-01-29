import React from "react";
import "./index.scss";

const ShareLink = () => {
  return (
    <div className="abouttheministry-bottom">
      <div>Поделиться в:</div>
      <div>
        <div className="abouttheministry-facebook">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="abouttheministry-vk">
          <a href="#">
            <i className="fab fa-vk"></i>
          </a>
        </div>
        <div className="abouttheministry-odnoklassniki">
          <a href="#">
            <i className="fab fa-odnoklassniki-square"></i>
          </a>
        </div>
        <div className="abouttheministry-telegram">
          <a href="#">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
        <div className="abouttheministry-print">
          <a href="#">
            <i className="fal fa-print"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareLink;
