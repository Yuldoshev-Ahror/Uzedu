import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const EmployeeInfo = ({
  imgUrl,
  name,
  title,
  date,
  link,
  mobileNumber = false,
  DomNumber = false,
  mail = false,
  alt = "image",
}) => {
  return (
    <div className="employeeinfo-box">
      <div>
        <img src={imgUrl} alt={alt} />
      </div>
      <div>
        <h3>
          <Link to={`/uz/${link}`}>{name}</Link>
        </h3>
        <h5>{title}</h5>
        <p>
          <i className="far fa-clock"></i> {date}
        </p>
        {mobileNumber && (
          <p>
            <a href="tel: +998712410186">
              <i className="fas fa-phone-alt"></i>
              {mobileNumber}
            </a>
          </p>
        )}
        {DomNumber && (
          <p>
            <a href="tel: +998712410186">
              <i className="far fa-phone-office"></i>
              {DomNumber}
            </a>
          </p>
        )}
        {mail && (
          <p>
            <a href="#">
              <i className="fal fa-envelope"></i> {mail}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeInfo;
