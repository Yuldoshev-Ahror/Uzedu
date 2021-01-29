import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const NavbarOne = () => {
  return (
    <div className="navbarone-container">
      <div className="navbarone-content">
        <div className="navbarone-topmenu">
          <div className="navbarone-link">
            <div>
              <a href="https://facebook.com" target="_black">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div>
              <a href="https://instagram.com" target="_black">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div>
              <a href="https://youtube.com" target="_black">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div>
              <a href="https://telegram.org" target="_black">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="navbarone-text">
            <a href="mailto: info@xtv.uz">E-mail: info@xtv.uz</a>
            Сайт работает в тестовом режиме!
          </div>
          <div className="navbarone-lang">
            <ul>
              <li>
                <Link to="/oz">O'Z</Link>
              </li>
              /
              <li>
                <Link to="/uz">ЎЗ</Link>
              </li>
              /
              <li>
                <Link to="/ru">РУ</Link>
              </li>
              /
              <li>
                <Link to="/en">EN</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOne;
