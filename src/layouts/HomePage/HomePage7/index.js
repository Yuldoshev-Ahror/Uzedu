import React from "react";
import "./index.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const HomePageSeven = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="homepageseven-container">
      <div className="SliderContainerFluid">
        <div className="SliderContainer">
          <Slider {...settings}>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <img
                    src="https://www.uzedu.uz/uploads/2019/06/digitando-negor-teclado-760x500.jpg"
                    alt="img1"
                  />

                  <h5>АКТ Ўқув марказлари</h5>
                  <p className="btn-slider">
                    <Link to="/">Давомини ўқиш</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <img
                    src="https://www.uzedu.uz/uploads/2019/06/0003660b-760x500.jpg"
                    alt="img2"
                  />

                  <h5>Минтақалардаги АКТ</h5>
                  <p className="btn-slider">
                    <Link to="/">Давомини ўқиш</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <img
                    src="https://www.uzedu.uz/uploads/2019/06/3-760x500.jpg"
                    alt="img3"
                  />

                  <h5>Инновация маркази</h5>
                  <p className="btn-slider">
                    <Link to="/">Давомини ўқиш</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <div>
                    <img
                      src="https://www.uzedu.uz/uploads/2019/06/photo2019-04-0614-18-15-760x500.jpg"
                      alt="img4"
                    />

                    <h5>ПРЕЗИДЕНТ МАКТАБИ </h5>
                    <p className="btn-slider">
                      <Link to="/">Давомини ўқиш</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <img
                    src="https://www.uzedu.uz/uploads/2019/06/digitando-negor-teclado-760x500.jpg"
                    alt="img1"
                  />

                  <h5>АКТ Ўқув марказлари</h5>
                  <p className="btn-slider">
                    <Link to="/">Давомини ўқиш</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <img
                    src="https://www.uzedu.uz/uploads/2019/06/0003660b-760x500.jpg"
                    alt="img2"
                  />

                  <h5>Минтақалардаги АКТ</h5>
                  <p className="btn-slider">
                    <Link to="/">Давомини ўқиш</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <img
                    src="https://www.uzedu.uz/uploads/2019/06/3-760x500.jpg"
                    alt="img3"
                  />

                  <h5>Инновация маркази</h5>
                  <p className="btn-slider">
                    <Link to="/">Давомини ўқиш</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="imgItem">
              <div className="matnTeg">
                <div>
                  <img
                    src="https://www.uzedu.uz/uploads/2019/06/photo2019-04-0614-18-15-760x500.jpg"
                    alt="img4"
                  />

                  <h5>ПРЕЗИДЕНТ МАКТАБИ </h5>
                  <p className="btn-slider">
                    <Link to="/">Давомини ўқиш</Link>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageSeven;
