import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

const HomePageOne = () => {
  return (
    <div className="homepageone-container">
      <div className="homepage-content">
        <div>
          <img
            src="https://uzedu.uz/uploads/2021/01/photo2021-01-1418-16-18-760x500.jpg"
            alt=""
          />
        </div>
        <div>
          <h4>
            Xalq taʼlimi vazirligi USAID bilan hamkorlikda yangi taʼlim
            standartlarini ishlab chiqadi
          </h4>
          <p>
            Xalq taʼlimi vazirligi AQSH Xalqaro taraqqiyot agentligi (USAID)
            bilan hamkorlikda maktab oʻquvchilari uchun sinflar va fanlar
            boʻyicha oʻzlashtirishning yangi standartlarini joriy etmoqda.
            Mazkur standartlar vazirlikka xar bir sinf kesimida oʻquvchilar
            bilimini aniqlash, sohada oʻquv dasturlari, darsliklar va
            oʻqituvchilar uchun qoʻllanmalarni ishlab
          </p>
          <h5>
            <Link to="/home">Davomini o'qish</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HomePageOne;
