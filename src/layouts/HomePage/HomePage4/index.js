import React from "react";
import "./index.scss";

import CountUp from "react-countup";

const HomePageFour = () => {
  return (
    <div className="homepagefour-container">
      <div className="homepagefour-content">
        <div className="homepagefour-title">
          <h3>ASOSIY KO'RSATKICHLAR</h3>
          <div></div>
        </div>
        <div className="homepagefour-grid">
          <div>
            <i className="fal fa-user-friends"></i>
            <h3>
              <CountUp
                start={0}
                end={9942}
                duration={2.75}
                separator=","
                decimal=","
                delay={0.4}
              />
            </h3>
            <p>MAKTAB</p>
          </div>
          <div>
            <i className="fal fa-smile"></i>
            <h3>
              <CountUp
                start={0}
                end={6119440}
                duration={2.75}
                separator=","
                decimal=","
                delay={0.4}
              />
            </h3>
            <p>O`QUVCHI</p>
          </div>
          <div>
            <i className="fas fa-graduation-cap"></i>
            <h3>
              <CountUp
                start={0}
                end={481604}
                duration={2.75}
                separator=","
                decimal=","
                delay={0.4}
              />
            </h3>
            <p>O`QITUVCHI</p>
          </div>
          <div>
            <i className="fal fa-book"></i>
            <h3>
              <CountUp
                start={0}
                end={7}
                duration={0}
                separator=","
                decimal=","
                delay={0.4}
              />
            </h3>
            <p>TILDA TA'LIM OLIB BORILADI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFour;
