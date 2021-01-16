import React, { useState } from "react";
import "./index.scss";

import { Link } from "react-router-dom";

const NavbarThree = () => {
  const [block, setBlock] = useState(false);
  const [blockMenu, setBlockMenu] = useState(false);
  const hundleClick = (number) => {
    console.log(number);
    if (number == block) setBlock(0);
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
              Vazirlik <i class="fal fa-angle-down"></i>
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
              Hujjatlar <i class="fal fa-angle-down"></i>
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
              Ta'lim <i class="fal fa-angle-down"></i>
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
              Faolyat <i class="fal fa-angle-down"></i>
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
              Xizmatlar <i class="fal fa-angle-down"></i>
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
              Axborat Xizmatlar <i class="fal fa-angle-down"></i>
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
              <i class="far fa-bars" onClick={hundleClickMenu}></i>
            </div>
          </div>
          <ul className={blockMenu ? "display-block" : ""}>
            <li onClick={() => hundleClick(1)}>
              <div>
                <div>Vazirlik</div>
                <div>
                  <i class="fal fa-angle-down"></i>
                </div>
              </div>
              <div>
                <ul className={block == 1 ? "display-block" : ""}>
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
