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
                      <Link to="/uz/elektron-hukumat-tizimida">
                        “Elektron Hukumat” Tizimida Ishtirok Etish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/korrupsiyaga-qarshi-kurash">
                        Korrupsiyaga qarshi kurash
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/davlat-dasturlari">
                        Harakatlar strategiyasi va Davlat dasturlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/gender-tenglik">Gender tenglik</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/bosh-ish-orinlari">
                        Bo‘sh ish o‘rinlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/tenders">Tenderlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/elonlar">E`lonlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/tanlovlar">Tanlovlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/ochiq-majlislar-otkazish-rejalari">
                        Ochiq majlislar o‘tkazish rejalari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/qaror-va-ijro">Qaror va ijro</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/hisobotlar">Hisobotlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/investitsiya-salohiyati">
                        Investitsiya salohiyati
                      </Link>
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
                      <Link to="/uz/bolalarini-maktabga-joylashtirish">
                        Xorijiy fuqarolar uchun: bolalarini maktabga
                        joylashtirish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/yoqolgan-shahodatnomani-tiklash-uchun-ariza-berish">
                        Yo‘qolgan shahodatnomani tiklash uchun ariza berish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/eksternat-imtihon-uchun-ariza-berish">
                        Eksternat imtihon uchun ariza berish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/oquvchilarni-bitta-talim-muassasasidan-boshqasiga-otkazish">
                        O‘quvchilarni bitta ta'lim muassasasidan boshqasiga
                        o‘tkazish (o‘quvchilar harakati)
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/">Davlat xizmatlari</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/open-data">Ochiq ma'lumotlar</Link>
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
                      <Link to="/uz/news">Yangiliklar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/press-relizlar">Press relizlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/mass">OAV biz haqimizda</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/maruzalar">Ma'ruzalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/fotojamlanma">Fotojamlanma</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/videos">Videogalereya</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/matbuot-anjumanlari">
                        Matbuot anjumanlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/publikacii">Konferensiyalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/kop-beriladigan-savollar">
                        Ko‘p beriladigan savollar
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/tanlovlar-sahifasi">Tanlovlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/accreditation">Akkreditatsiya</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/openness">
                        Vazirlik faoliyatining ochiqligi
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/bayonotlar">Bayonotlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/pr-staff">Axborot xizmati</Link>
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
            <li
              onClick={() => hundleClick(1)}
              className={block ? "my-active-style" : ""}
            >
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
            <li
              onClick={() => hundleClick(1)}
              className={block ? "my-active-style" : ""}
            >
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
                      <Link to="/uz/elektron-hukumat-tizimida">
                        “Elektron Hukumat” Tizimida Ishtirok Etish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/korrupsiyaga-qarshi-kurash">
                        Korrupsiyaga qarshi kurash
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/davlat-dasturlari">
                        Harakatlar strategiyasi va Davlat dasturlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/gender-tenglik">Gender tenglik</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/bosh-ish-orinlari">
                        Bo‘sh ish o‘rinlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/tenders">Tenderlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/elonlar">E`lonlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/tanlovlar">Tanlovlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/ochiq-majlislar-otkazish-rejalari">
                        Ochiq majlislar o‘tkazish rejalari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/qaror-va-ijro">Qaror va ijro</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/hisobotlar">Hisobotlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/investitsiya-salohiyati">
                        Investitsiya salohiyati
                      </Link>
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
                      <Link to="/uz/bolalarini-maktabga-joylashtirish">
                        Xorijiy fuqarolar uchun: bolalarini maktabga
                        joylashtirish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/yoqolgan-shahodatnomani-tiklash-uchun-ariza-berish">
                        Yo‘qolgan shahodatnomani tiklash uchun ariza berish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/eksternat-imtihon-uchun-ariza-berish">
                        Eksternat imtihon uchun ariza berish
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/oquvchilarni-bitta-talim-muassasasidan-boshqasiga-otkazish">
                        O‘quvchilarni bitta ta'lim muassasasidan boshqasiga
                        o‘tkazish (o‘quvchilar harakati)
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/">Davlat xizmatlari</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/open-data">Ochiq ma'lumotlar</Link>
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
                      <Link to="/uz/news">Yangiliklar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/press-relizlar">Press relizlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/mass">OAV biz haqimizda</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/maruzalar">Ma'ruzalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/fotojamlanma">Fotojamlanma</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/videos">Videogalereya</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/matbuot-anjumanlari">
                        Matbuot anjumanlari
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/publikacii">Konferensiyalar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/kop-beriladigan-savollar">
                        Ko‘p beriladigan savollar
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/tanlovlar-sahifasi">Tanlovlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/accreditation">Akkreditatsiya</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/openness">
                        Vazirlik faoliyatining ochiqligi
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/bayonotlar">Bayonotlar</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/uz/pr-staff">Axborot xizmati</Link>
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
