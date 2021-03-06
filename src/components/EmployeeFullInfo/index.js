import React, { useState } from "react";
import "./index.scss";

const EmployeeFullInfo = () => {
  const [block, setBlock] = useState(false);

  const hundleBlock = (item) => {
    if (item === block) setBlock(false);
    else setBlock(item);
    console.log("block", block);
  };

  return (
    <div className="employeefullinfo-container">
      <div className="employeefullinfo-content">
        <div className="employeefullinfo-one">
          <h3>ШЕРМАТОВ ШЕРЗОД ХОТАМОВИЧ</h3>
          <img
            src="https://uzedu.uz/uploads/2019/10/shermatov-sh-760x500.jpg"
            alt="rasim"
          />
          <p className="employeefullinfo-text">
            Ўзбекистон Республикаси Халқ таълими вазири
          </p>
          <p>
            <i className="far fa-clock"></i> Чоршанба соат 16:00 дан 18:00 гача
          </p>
          <p>
            <a href="tel: +998712410186">
              <i className="fas fa-phone-alt"></i> + 998 71 241 01 86
            </a>
          </p>
          <p>
            <a href="tel: +998712410186">
              <i className="fas fa-phone-office"></i> + 998 71 241 01 86
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fal fa-envelope"></i> info@xtv.uz
            </a>
          </p>
        </div>
        <div className="employeefullinfo-accordion">
          <div className="employeefullinfo-box">
            <h4 onClick={() => hundleBlock(1)}>
              <i
                className={
                  block === 1
                    ? "fas fa-chevron-down trans-deg"
                    : "fas fa-chevron-down"
                }
              ></i>
              Ўзбекистон Республикаси Халқ таълими вазири
            </h4>
            <div
              className={
                block === 1
                  ? "employeefullinfo-box-text employeefullinfo-block"
                  : "employeefullinfo-box-text"
              }
            >
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
            </div>
          </div>
          <div className="employeefullinfo-box">
            <h4 onClick={() => hundleBlock(2)}>
              <i
                className={
                  block === 2
                    ? "fas fa-chevron-down trans-deg"
                    : "fas fa-chevron-down"
                }
              ></i>
              Ўзбекистон Республикаси Халқ таълими вазири
            </h4>
            <div
              className={
                block === 2
                  ? "employeefullinfo-box-text employeefullinfo-block"
                  : "employeefullinfo-box-text"
              }
            >
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
            </div>
          </div>
          <div className="employeefullinfo-box">
            <h4 onClick={() => hundleBlock(3)}>
              <i
                className={
                  block === 3
                    ? "fas fa-chevron-down trans-deg"
                    : "fas fa-chevron-down"
                }
              ></i>
              Ўзбекистон Республикаси Халқ таълими вазири
            </h4>
            <div
              className={
                block === 3
                  ? "employeefullinfo-box-text employeefullinfo-block"
                  : "employeefullinfo-box-text"
              }
            >
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
              <p>
                Шерматов Шерзод Хотамович 1977 йил 7 апрель куни Тошкент шаҳрида
                туғилган.
              </p>
              <p>
                1998 йилда Тошкент давлат техника университети ва 2000 йилда
                Америка Қўшма Штатлари Йель университетини якунлаган.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFullInfo;
