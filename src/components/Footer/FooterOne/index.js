import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <div className="footerone-container">
      <div className="footerone-content">
        <div>
          <div className="footer-box1">
            <img src="https://uzedu.uz/images/logo-footer.png" alt="Icon" />
            <div>Xalq ta`lim vazirligi O`zbekiston Respublikasi</div>
          </div>
          <div className="footer-box2">
            100187, O`zbekiston, Toshkent, Shayxontohur tumani, Navoi ko'chasi,
            2a
          </div>
          <div className="footer-box3">
            <div>
              <i className="fas fa-phone-alt"></i>
              <a href="tel: 712410186"> (71) 241-01-86</a>
            </div>
            <div>
              <i className="far fa-envelope"></i>
              <a href="mail: info@xtv.uz"> info@xtv.uz</a>
            </div>
            <div>
              <i className="far fa-globe-americas"></i>
              <a href="https://www.uzedu.uz"> www.uzedu.uz</a>
            </div>
          </div>
          <div className="footer-box4">
            <div>
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
          </div>
        </div>
        <div className="footerone-colmn2">
          <div>Havolalar</div>
          <div></div>
          <div className="footerone-colmngrid">
            <div>
              <div>
                <i className="fas fa-caret-right"></i> Ustoz ovozi
              </div>
              <div>
                <i className="fas fa-caret-right"></i> Maktablar haqida ma'lumot
              </div>
              <div>
                <i className="fas fa-caret-right"></i> OAV biz haqimizda
              </div>
            </div>
            <div>
              <div>
                <i className="fas fa-caret-right"></i> Forum
              </div>
              <div>
                <i className="fas fa-caret-right"></i> BOʻSh ISH OʻRINLARI
              </div>
              <div>
                <i className="fas fa-caret-right"></i> Onlayn muloqot
              </div>
              <div>
                <i className="fas fa-caret-right"></i> Taraqqiyot strategiyasi
                markazi
              </div>
            </div>
          </div>
        </div>
        <div className="footerone-colmn-block"></div>
        <div className="footerone-colmn3">
          <div>Yangiliklar</div>
          <div></div>
          <div className="footerone-colmn-news">
            <div>
              <Link href="#">
                <img
                  src="https://uzedu.uz/uploads/2021/01/photo2021-01-1513-29-55-2-760x500.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="footerone-colmn-news-1">
              <div>
                <Link href="#">
                  Xalqaro sertifikatga ega Navoiy shahar 4-maktab informatika
                  oʻqituvchisi “Java dasturlash tili»ni maktab oʻquvchilariga
                  oʻqitmoqda
                </Link>
              </div>
              <div>January 15, 2021</div>
            </div>
          </div>

          <div className="footerone-colmn-news">
            <div>
              <Link href="#">
                <img
                  src="https://uzedu.uz/uploads/2021/01/photo2021-01-1513-29-55-2-760x500.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="footerone-colmn-news-1">
              <div>
                <Link href="#">
                  Xalqaro sertifikatga ega Navoiy shahar 4-maktab informatika
                  oʻqituvchisi “Java dasturlash tili»ni maktab oʻquvchilariga
                  oʻqitmoqda
                </Link>
              </div>
              <div>January 15, 2021</div>
            </div>
          </div>
          <div className="footerone-colmn-news">
            <div>
              <Link href="#">
                <img
                  src="https://uzedu.uz/uploads/2021/01/photo2021-01-1513-29-55-2-760x500.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="footerone-colmn-news-1">
              <div>
                <Link href="#">
                  Xalqaro sertifikatga ega Navoiy shahar 4-maktab informatika
                  oʻqituvchisi “Java dasturlash tili»ni maktab oʻquvchilariga
                  oʻqitmoqda
                </Link>
              </div>
              <div>January 15, 2021</div>
            </div>
          </div>
        </div>
        <div className="footerone-colmn4">
          <div>Ish vaqti</div>
          <div></div>
          <div className="footerone-colmn3-gg">
            <div>
              <div>Du - Ju :</div>
              <div>9.00 - 18:00</div>
            </div>
            <div>
              <div>Tushlik :</div>
              <div>13:00 - 14:00</div>
            </div>
            <div>
              <div>Sh - Ya :</div>
              <div className="footerone-colmn3-close">
                <p>Yopiq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
