import React, { useRef, useState, useEffect } from "react";
import "./SupportAreas.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "react-id-swiper";
import BaseCorrection from "../../assets/images/BaseCorrection1.png";
import colorSolutionImg from "../../assets/images/colorSolution.png";
import dispensingSoftwareImg from "../../assets/images/dispensingSoftware.png";
import colorDatabaseImg from "../../assets/images/colorDatabase.png";
import dispenserSupportImg from "../../assets/images/dispenserSupport.png";
import singleSourceImg from "../../assets/images/singleSourceSolution.png";
import subInfoImageOne from "../../assets/images/sub-info-image-one.png";
import homeSubImageOne from "../../assets/images/sub-info-image-one.png";
import homeSubImageTwo from "../../assets/images/sub-info-image-one.png";
import homeSubImageThree from "../../assets/images/sub-info-image-one.png";
import assetSubImageOne from "../../assets/images/sub-info-image-one.png";
import assetSubImageTwo from "../../assets/images/sub-info-image-one.png";
import assetSubImageThree from "../../assets/images/sub-info-image-one.png";
import aggriSubImageOne from "../../assets/images/sub-info-image-one.png";
import aggriSubImageTwo from "../../assets/images/sub-info-image-one.png";
import aggriSubImageThree from "../../assets/images/sub-info-image-one.png";
import mallsSubImageOne from "../../assets/images/sub-info-image-one.png";
import mallsSubImageTwo from "../../assets/images/sub-info-image-one.png";
import mallsSubImageThree from "../../assets/images/sub-info-image-one.png";
import logisticsSubImageOne from "../../assets/images/sub-info-image-one.png";
import logisticsSubImageTwo from "../../assets/images/sub-info-image-one.png";
import logisticsSubImageThree from "../../assets/images/sub-info-image-one.png";
import storesSubImageOne from "../../assets/images/sub-info-image-one.png";
import storesSubImageTwo from "../../assets/images/sub-info-image-one.png";
import storesSubImageThree from "../../assets/images/sub-info-image-one.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SupportAreas = (props) => {
  const swiperRef = useRef(null);
  const [selectedImageData, setSelectedImageData] = useState({
    id: 2,
    data: [
      {
        heading: "Color Matching & Formulation",
        paragraph:
          "We Help in developing precise color recipes to meet customer or paint industry specifications.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: "Color Matching & Formulation",
          desc: `We Help in developing precise color recipes to meet customer or paint industry specifications.`,
        },
      },
      {
        heading: "Base & Tint Optimization",
        paragraph:
          "We offer service to ensuring paint bases and colorants blend seamlessly for accurate, repeatable shades.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: "Base & Tint Optimization",
          desc: `We offer service to ensuring paint bases and colorants blend seamlessly for accurate, repeatable shades.`,
        },
      },
      {
        heading: "Quality Control & Standardization",
        paragraph:
          "We train your team on industry instruments (like spectrophotometers) to verify consistency, durability, and performance of the final color.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: " Quality Control & Standardization",
          desc: `We train your team on industry instruments (like spectrophotometers) to verify consistency, durability, and performance of the final color.`,
        },
      },
    ],
  });
  const [selectedDataIndex, setIndex] = useState(0);
  const params = {
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      560: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
        slideToClickedSlide: true,
      },
    },
    observer: true,
  };
  let sliderImages = [
    {
      id: 1,
      imgUrl: BaseCorrection,
      imgText: "Paint Base Correction",
      isOffer: false,
    },
    {
      id: 2,
      imgUrl: colorSolutionImg,
      imgText: "Color Solution",
      isOffer: true,
    },
    {
      id: 3,
      imgUrl: dispensingSoftwareImg,
      imgText: "Dispensing Software",
      isOffer: false,
    },
    {
      id: 4,
      imgUrl: colorDatabaseImg,
      imgText: "Color Database",
      isOffer: false,
    },
    {
      id: 5,
      imgUrl: dispenserSupportImg,
      imgText: "Dispenser Support",
      isOffer: false,
    },

    {
      id: 6,
      imgUrl: singleSourceImg,
      imgText: "Single Source Solution",
      isOffer: false,
    },
  ];
  const imagesData = [
    {
      id: 1,
      data: [
        {
          heading: "Process of Base Correction",
          paragraph:
            "We provide paint companies with base correction services, adjusting a paint’s color, opacity, and consistency to ensure accurate final shades after tinting.",
          subData: {
            subImageUrl: homeSubImageOne,
            title: "Process of Base Correction",
            desc: "We provide paint companies with base correction services, adjusting a paint’s color, opacity, and consistency to ensure accurate final shades after tinting.",
          },
        },
        {
          heading: "Tools & Equipment Utlizations",
          paragraph:
            "Our service uses precision instruments—mixers, dispersers, spectrophotometers, and viscosity testers—to accurately adjust and standardize paint base color, opacity, and consistency before tinting.",
          subData: {
            subImageUrl: homeSubImageTwo,
            title: "Tools & Equipment Utlizations ",
            desc: "Our service uses precision instruments—mixers, dispersers, spectrophotometers, and viscosity testers—to accurately adjust and standardize paint base color, opacity, and consistency before tinting.",
          },
        },
        {
          heading: "Key Considerations",
          paragraph:
            "We treat paint base correction as a vital quality-control step, ensuring not just pigment adjustment but precise color accuracy, consistency, and production efficiency for our customers.",
          subData: {
            subImageUrl: homeSubImageThree,
            title: "Key Considerations",
            desc: "We treat paint base correction as a vital quality-control step, ensuring not just pigment adjustment but precise color accuracy, consistency, and production efficiency for our customers.",
          },
        },
      ],
    },
    {
      id: 2,
      data: [
        {
        heading: "Color Matching & Formulation",
        paragraph:
          "We Help in developing precise color recipes to meet customer or paint industry specifications.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: "Color Matching & Formulation",
          desc: `We Help in developing precise color recipes to meet customer or paint industry specifications.`,
        },
      },
      {
        heading: "Base & Tint Optimization",
        paragraph:
          "We offer service to ensuring paint bases and colorants blend seamlessly for accurate, repeatable shades.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: "Base & Tint Optimization",
          desc: `We offer service to ensuring paint bases and colorants blend seamlessly for accurate, repeatable shades.`,
        },
      },
      {
        heading: "Quality Control & Standardization",
        paragraph:
          "We train your team on industry instruments (like spectrophotometers) to verify consistency, durability, and performance of the final color.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: " Quality Control & Standardization",
          desc: `We train your team on industry instruments (like spectrophotometers) to verify consistency, durability, and performance of the final color.`,
        },
      },
      ],
    },
    {
      id: 3,
      data: [
        {
          heading: "Accurate Formula Management",
          paragraph:
            "Stores and manages color formulas to ensure precise dispensing of tints and bases.",
          subData: {
            subImageUrl: aggriSubImageOne,
            title: "Accurate Formula Management",
            desc: "Stores and manages color formulas to ensure precise dispensing of tints and bases.",
          },
        },
        {
          heading: "Automated Mixing & Dispensing",
          paragraph:
            "Controls machines to deliver exact quantities, reducing errors and waste.",
          subData: {
            subImageUrl: aggriSubImageTwo,
            title: "Automated Mixing & Dispensing",
            desc: "Controls machines to deliver exact quantities, reducing errors and waste.",
          },
        },
        {
          heading: "Reporting & Inventory Control",
          paragraph:
            "Tracks usage, inventory, and performance for better planning and cost efficiency.",
          subData: {
            subImageUrl: aggriSubImageThree,
            title: "Reporting & Inventory Control",
            desc: "Tracks usage, inventory, and performance for better planning and cost efficiency.",
          },
        },
      ],
    },
    {
      id: 4,
      data: [
        {
          heading: "Cloud Storage of Color Formulas",
          paragraph:
            "Keeps all standard and custom color recipes in one secure place.",
          subData: {
            subImageUrl: mallsSubImageOne,
            title: "Cloud Storage of Color Formulas",
            desc: "Keeps all standard and custom color recipes in one secure place.",
          },
        },
        {
          heading: "Fast & Accurate Color Matching",
          paragraph:
            "Quickly retrieves and matches colors for consistent results.",
          subData: {
            subImageUrl: mallsSubImageTwo,
            title: "Fast & Accurate Color Matching",
            desc: "Quickly retrieves and matches colors for consistent results.",
          },
        },
         {
          heading: "Regular Updates & Standardization",
          paragraph:
            "Ensures color data is current and uniform across all locations.",
          subData: {
            subImageUrl: mallsSubImageTwo,
            title: "Regular Updates & Standardization",
            desc: "Ensures color data is current and uniform across all locations.",
          },
        },
      ],
    },
    {
      id: 5,
      data: [
        {
          heading: "Online & In-person Support",
          paragraph:
            "Our dispenser technicians specialize in leading brands such as Fast & Fluid, Corob, and more, with dedicated services available across all major cities in Saudi Arabia. ",
          subData: {
            subImageUrl: logisticsSubImageOne,
            title: "Online & In-person Support",
            desc: "Our dispenser technicians specialize in leading brands such as Fast & Fluid, Corob, and more, with dedicated services available across all major cities in Saudi Arabia. ",
          },
        },
         {
          heading: "Spare Parts Availability",
          paragraph:
            "We provide a variety of spare parts for most dispenser brands used in the paint industry across Saudi Arabia.",
          subData: {
            subImageUrl: logisticsSubImageOne,
            title: "Spare Parts Availability",
            desc: "We provide a variety of spare parts for most dispenser brands used in the paint industry across Saudi Arabia.",
          },
        },
         {
          heading: "Support App",
          paragraph:
            "Our support app ensures all retail store requests are handled promptly and serviced without delays.",
          subData: {
            subImageUrl: logisticsSubImageOne,
            title: "Support App",
            desc: "Our support app ensures all retail store requests are handled promptly and serviced without delays.",
          },
        },
      ],
    },
    {
      id: 6,
      data: [
        {
          heading: "Integrated Systems",
          paragraph:
            "Combines software, machines, and colorants for seamless tinting operations.",
          subData: {
            subImageUrl: storesSubImageOne,
            title: "Integrated Systems",
            desc: "Combines software, machines, and colorants for seamless tinting operations.",
          },
        },
        {
          heading: "Consistent Color Accuracy",
          paragraph:
            "Ensures precise and repeatable shades across all locations.",
          subData: {
            subImageUrl: storesSubImageOne,
            title: "Consistent Color Accuracy",
            desc: "Ensures precise and repeatable shades across all locations.",
          },
        },{
          heading: "Efficient Service & Support",
          paragraph:
            "Provides end-to-end support, from setup to maintenance, reducing downtime.",
          subData: {
            subImageUrl: storesSubImageOne,
            title: "Efficient Service & Support",
            desc: "Provides end-to-end support, from setup to maintenance, reducing downtime.",
          },
        },
      ],
    },
  ];
  const handleImageClick = (event, id, index) => {
    let selectedObj = imagesData.find((obj) => obj.id === id);
    setSelectedImageData(selectedObj);
    console.log("index num", index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index, 0);
    }
  };
  const handleDataClick = (index) => {
    setIndex(index);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="SupportAreas__main-container">
      <div className="SupportAreas__section-header">
        <h2 className="SupportAreas__section-title section-title">
          <span> Support Areas</span>
        </h2>
      </div>
      <div className="SupportAreas__swiper-section">
        <div className="SupportAreas__swiper-list">
          <Swiper
            ref={swiperRef}
            {...params}
            // shouldSwiperUpdate
            // rebuildOnUpdate={true}
            // activeSlideKey={3}
          >
            {sliderImages.map((obj, index) => {
              return (
                <div
                  key={index}
                  className={
                    obj.id === selectedImageData.id
                      ? "slider-item active"
                      : "slider-item"
                  }
                  onClick={() => handleImageClick("", obj.id, index)}
                >
                  <span className="masking-image"></span>
                  
                  <img className="swiper-image" src={obj.imgUrl} alt="S" />
                  <p className="slider-item-heading">{obj.imgText}</p>
                </div>
              );
            })}
          </Swiper>
        </div>
        <div className="SupportAreas__swiper-information-sec">
          <div className="SupportAreas__swiper-information-row">
            {selectedImageData?.data.length > 0 &&
              selectedImageData?.data.map((obj, index) => {
                return (
                  <div
                    key={index}
                    // className="SupportAreas__swiper-information-col"
                    onClick={() => handleDataClick(index)}
                    className={
                      index === selectedDataIndex
                        ? "SupportAreas__swiper-information-col sub-active"
                        : "SupportAreas__swiper-information-col"
                    }
                  >
                    <span className="SupportAreas__company-card-circle"></span>
                    <p className="SupportAreas__company-card-heading">
                      {obj.heading}
                    </p>
                    <p className="SupportAreas__company-card-description">
                      {obj.paragraph}
                    </p>
                  </div>
                );
              })}
          </div>
          {/* <div className="SupportAreas__sub-information-holder">
            {selectedImageData?.data.length > 0 &&
              selectedImageData?.data.map((obj, index) => {
                if (index === selectedDataIndex)
                  return (
                    <div
                      className="SupportAreas__sub-information-sec"
                      data-aos={"fade-in"}
                    >
                      <span>
                        <img src={obj.subData.subImageUrl} alt="S" />
                      </span>
                      <div className="SupportedAreas__sub-info-right-sec">
                        <p className="SupportAreas__sub-info-title">
                          {obj.subData.title}
                        </p>
                        <p className="SupportAreas__sub-info-description">
                          {obj.subData.desc}
                        </p>
                      </div>
                    </div>
                  );
              })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SupportAreas;
