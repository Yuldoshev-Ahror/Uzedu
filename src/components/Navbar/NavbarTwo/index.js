import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

const NavbarTwo = () => {
  return (
    <div className="navbartwo-container">
      <div className="navbartwo-content">
        <div className="navbartwo-mainicon">
          <div>
            <Link to="/uz">
              <img src="https://uzedu.uz/images/logo-wide.png" alt="" />
            </Link>
          </div>
          <div className="navbartwo-text">
            <Link to="/uz">
              O'ZBEKISTON RESPUBLIKASI <br />
              XALQ TA`LIMI VAZIRLIGI
            </Link>
          </div>
        </div>

        <div className="navbartwo-searchinput">
          <div>
            <input type="text" placeholder="Qidiruv" />
            <i className="far fa-search"></i>
          </div>
        </div>
        <div className="navbartwo-contact">
          <p>ISHONCH TELEFONI</p>
          <p>(71) 202 09 09</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
