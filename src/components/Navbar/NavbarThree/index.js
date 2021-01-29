import React, { useState } from "react";
import "./index.scss";

import { Link } from "react-router-dom";

const NavbarThree = () => {
  const [block, setBlock] = useState(false);
  const [blockMenu, setBlockMenu] = useState(false);
  const hundleClick = (number) => {
    console.log(number);
    if (number === block) setBlock(0);
    else setBlock(number);
  };

  const hundleClickMenu = () => {
    setBlockMenu(!blockMenu);
  };
  return (
    <div className="navbarthree-container">
      <div className="navbarthree-content">
        <div className="navbarthree-menu">
          <ul>
            <li>
              Vazirlik <i className="fal fa-angle-down"></i>
              <div>
                <ul>
                  <li>
                    <p>
                      <Link to="/uz/vazirlik-haqida">Vazirlik haqida</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/staff">Rahbariyat</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/vazirlik-markaziy-apparati">
                        Vazirlik markaziy aparati
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/hududiy-boshqarmalar">
                        Hududiy boshqarmalar
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/respublika-tashkilotlari">
                        Respublika tashkilotlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/muvofiqlashtiruvchi-maslahat-organlari">
                        Muvofiqlashtiruvchi va maslahat organlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/vazirlik-markaziy-apparati-tuzilmasi">
                        Vazirlik markaziy aparat tuzulmasi
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/contact">Bog'lanish</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Hujjatlar <i className="fal fa-angle-down"></i>
              <div>
                <ul>
                  <li>
                    <p>
                      <Link to="/uz/talimga-oid-qonunlar">
                        Ta`limga oid qonunlar
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/prezident-farmonlari-farmoiyilari-va-qarorlari">
                        Prezident farmonlari, farmoiyishlari va qarorlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/vazirlar-mahkamasi-qarorlari">
                        Vazirlar Mahkamasi qarorlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/xalq-talimi-vazirligi-hayat-qarorlari">
                        Xalq ta`limi vazirligi me`yoriy hujjatlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/oz-kuchini-yoqotgan-meyoriy-huquqiy-hujjatlar">
                        O‘z kuchini yo‘qotgan me`yoriy-huquqiy <br />
                        hujjatlar
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/meyoriy-hujjatlar-loyihalari">
                        Me`yoriy hujjatlar loyihalari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">
                        Taʼlimga oid normativ-huquqiy hujjatlar
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/vazirlik-ishtirokidagi-xalqaro-shartnomalar">
                        Vazirlik ishtirokidagi Xalqaro shartnomalar
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Ta'lim <i className="fal fa-angle-down"></i>
              <div>
                <ul>
                  <li>
                    <p>
                      <Link to="/uz/statistika">Statistika</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/tahliliy-malumotlar">
                        Tahliliy ma'lumotlar
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/zarur-hujjatlar">Zarur hujjatlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/pedagoglarga">Pedagoglarga</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/ota-onalarga">Ota-onalarga</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/oquvchilarga">O'quvchilarga</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Elektron kutubxona</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/namunaviy-tavsiyalar">
                        Umumtaʼlim maktablarining hovli...
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/barkamol-avlod-bolalar-markazlari">
                        "Barkamol avlod" bolalar markazlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/ogranicennymi-vozmoznostami">
                        Imkoniyati cheklanganlarga
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Faolyat <i className="fal fa-angle-down"></i>
              <div>
                <ul>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik haqida</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Rahbariyat</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparati</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Hududiy boshqarmalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Respublika tashkilotlari</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">
                        Muvofiqlashtiruvchi va maslahat organlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparat tuzulmasi</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Bog'lanish</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Xizmatlar <i className="fal fa-angle-down"></i>
              <div>
                <ul>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik haqida</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Rahbariyat</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparati</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Hududiy boshqarmalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Respublika tashkilotlari</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">
                        Muvofiqlashtiruvchi va maslahat organlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparat tuzulmasi</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Bog'lanish</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Axborat Xizmatlar <i className="fal fa-angle-down"></i>
              <div>
                <ul>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik haqida</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Rahbariyat</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparati</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Hududiy boshqarmalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Respublika tashkilotlari</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">
                        Muvofiqlashtiruvchi va maslahat organlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparat tuzulmasi</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Bog'lanish</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbarthree-mobile">
          <div className="navbarthree-bar">
            <div>
              <i className="far fa-bars" onClick={hundleClickMenu}></i>
            </div>
          </div>
          <ul className={blockMenu ? "display-block" : ""}>
            <li onClick={() => hundleClick(1)}>
              <div>
                <div>Vazirlik</div>
                <div>
                  <i className="fal fa-angle-down"></i>
                </div>
              </div>
              <div>
                <ul className={block === 1 ? "display-block" : ""}>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik haqida</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Rahbariyat</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparati</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Hududiy boshqarmalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Respublika tashkilotlari</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">
                        Muvofiqlashtiruvchi va maslahat organlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Vazirlik markaziy aparat tuzulmasi</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz">Bog'lanish</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarThree;
