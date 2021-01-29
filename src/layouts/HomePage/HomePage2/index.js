import React from "react";
import "./index.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const HomePageTwo = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  };

  const imageData = [
    {
      imgPath:
        "https://www.uzedu.uz/uploads/2021/01/photo2021-01-1319-20-29-2-760x500.jpg",
      imgAlt: "img1",
      hAbout: "Ёшларни маданият ва санъат муассасаларига кенг жалб этиш",
      pAbout: "16.01.2021",
    },
    {
      imgPath:
        "https://www.uzedu.uz/uploads/2021/01/photo2021-01-1513-29-55-2-760x500.jpg",
      imgAlt: "img2",
      hAbout: "Ёшларни маданият ва санъат муассасаларига кенг жалб этиш",
      pAbout: "16.01.2021",
    },
    {
      imgPath:
        "https://www.uzedu.uz/uploads/2021/01/9a5d5cd0fb6bcebbeb4a1145-760x500.jpg",
      imgAlt: "img3",
      hAbout: "Ёшларни маданият ва санъат муассасаларига кенг жалб этиш",
      pAbout: "16.01.2021",
    },
    {
      imgPath:
        "https://www.uzedu.uz/uploads/2021/01/photo2021-01-1211-00-53-760x500.jpg",
      imgAlt: "img4",
      hAbout: "Ёшларни маданият ва санъат муассасаларига кенг жалб этиш",
      pAbout: "16.01.2021",
    },
    {
      imgPath:
        "https://www.uzedu.uz/uploads/2021/01/9a5d5cd0fb6bcebbeb4a1145-760x500.jpg",
      imgAlt: "img5",
      hAbout: "Ёшларни маданият ва санъат муассасаларига кенг жалб этиш",
      pAbout: "16.01.2021",
    },
    {
      imgPath:
        "https://www.uzedu.uz/uploads/2021/01/photo2021-01-1418-16-18-760x500.jpg",
      imgAlt: "img6",
      hAbout: "Ёшларни маданият ва санъат муассасаларига кенг жалб этиш",
      pAbout: "16.01.2021",
    },
  ];
  return (
    <div className="homepagetwo-container">
      <div className="sliderContainer">
        <div className="sliderContainerFluid">
          <Slider {...settings} className="">
            {imageData.map((image) => (
              <Link to="list">
                <div className="marginLeft">
                  <img src={image.imgPath} alt={image.imgAlt} />
                  <div className="sectionBottom">
                    <h6 className="textOverflow">{image.hAbout}</h6>
                    <span className="span-font">{image.pAbout}</span>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
