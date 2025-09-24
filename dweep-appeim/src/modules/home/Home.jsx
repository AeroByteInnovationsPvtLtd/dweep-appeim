import React, { useState, useEffect } from "react";
import "./Home.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "react-id-swiper";

import colormatchingImg from "../../assets/images/colormatching.png";
import basecorrectionImg from "../../assets/images/basecorrection.png";


import AOS from "aos";
import "aos/dist/aos.css";

const Home = (props) => {
  let sliderImages = [
   
    {
      id: 2,
      imgUrl: basecorrectionImg,
      imgText: "Base Correction"
    },
     {
      id: 1,
      imgUrl: colormatchingImg,
      imgText: "Color Matching"
    },

  ];
  const params = {
    slidesPerView: 2,
    spaceBetween: 25,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true,
    // },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      560: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      320: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    },
    observer: true,
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="Home__main-container" ref={props.homeRef}>
      <div className="Home__inner-container-row">
        <div className="Home__inner-container-col left-sec">
          <div className="Home__banner-left-info-sec">
            <p className="Home__banner-heading-one">INTIGRATING Color Tinting,</p>
            <p className="Home__banner-heading-two">DELIVERING RESULTS.</p>
            <p className="Home__banner-sub-heading">
              We provide next generation
            </p>
            <p className="Home__banner-sub-heading">
               Tinitng Color Solutions
            </p>
            
          </div>
          

        </div>
        <div className="Home__inner-container-col right-sec">
          <div className="Home__swiper-container">
            <Swiper {...params} shouldSwiperUpdate rebuildOnUpdate={true}>
              {sliderImages.map((obj, index) => {
                return (
                  <div key={index} className="slider-item">
                    <img src={obj.imgUrl} alt="S" />
                    <p className="slider-item-heading">{obj.imgText}</p>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
