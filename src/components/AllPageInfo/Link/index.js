import React from "react";
import "./index.scss";

const MyLink = ({ textUrl, textArea }) => {
  return (
    <div className="allpageinfo-link-container">
      <div className="allpageinfo-link-content">
        <hr />
        <a href={textUrl}>{textArea}</a>
      </div>
    </div>
  );
};

export default MyLink;
