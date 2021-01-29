import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Box = ({
  imgUrl,
  title,
  link,
  dicription,
  dateNumber,
  dateTitle,
  fullData,
}) => {
  return (
    <div className="mynewbox-container">
      <div className="mynewbox-content">
        <div className="mynewbox-img">
          <img src={imgUrl} alt="rasim" />
          <div>
            <h4>{dateNumber}</h4>
            <p>{dateTitle}</p>
          </div>
        </div>
        <div className="mynewbox-title">
          <Link
            to={{
              pathname: `/uz/${link}`,
              state: fullData,
            }}
          >
            {title}
          </Link>
        </div>
        <div className="mynewbox-text">{dicription}</div>
        <div className="mynewbox-link">
          <Link
            to={{
              pathname: `/uz/${link}`,
              state: fullData,
            }}
          >
            Davomini o`qish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Box;
