import React from "react";
import "./index.scss";

const HomePageTen = () => {
  return (
    <div className="homepageten-container">
      <div className="homepageten-content">
        <div className="homepageten-title">
          <h3>АХБОРОТ БЮЛЛЕТЕНИГА ОБУНА БЎЛИНГ</h3>
          <div></div>
        </div>
        <div className="homepageten-grid">
          <div>
            <input type="text" placeholder="email" />
            <button>Обуна бўлиш</button>
          </div>
          <p>Фақат сўнгги янгиликлар</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageTen;
