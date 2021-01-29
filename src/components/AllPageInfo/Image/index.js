import React from "react";
import "./index.scss";

const Image = ({ imgUrl, ImageName, dateNumber, dateTitle }) => {
  return (
    <div className="allpageinfo-image-container">
      <div className="allpageinfo-image-content">
        <img src={imgUrl} alt={ImageName} />
        <div>
          <p>{dateNumber}</p>
          <p>{dateTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
