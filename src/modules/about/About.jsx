import React, { useState, useEffect } from "react";
import "./About.scss";
import { IconButton, TextField, Button } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import picOne from "../../assets/images/pic-one.png";
import picTwo from "../../assets/images/pic-two.png";
import picDefault from "../../assets/images/default-pic.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="About__main-container">
      <p>

      </p>
      <div className="About__section-header">
        <h2 className="About__section-title section-title">
          <span>About us</span>
        </h2>
      </div>
      <div className="About__company-info-section">
        <div className="About__company-info-holder">
          <div className="About__company-info-holder-left-sec">
            <div className="About__company-cards">
              <ul>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Our Vision</p>
                  <p className="About__company-card-description">
                    To establish a comprehensive,
                    single-source tinting solution for
                    the paint industry that integrates
                    software, colorants, paint
                    correction, and tinting machines
                    into one seamless ecosystem.
                  </p>
                </li>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Mission</p>
                  <p className="About__company-card-description">
                    We strive to simplify operations
                    for paint manufacturers and
                    retailers, ensuring accurate color
                    reproduction, reduced waste,
                    faster service, and improved
                    profitability.
                  </p>
                </li>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Values</p>
                  <p className="About__company-card-description">
                    We work smartly, take care of our team, and have fun in
                    order to ensure the sustainability and success of our
                    organization.
                  </p>
                </li>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Experience</p>
                  <p className="About__company-card-description">
                    With over 60 years of combined
                    expertise in paint and tinting, our
                    team delivers practical, reliable,
                    and fully integrated tinting
                    solutions tailored
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="About__company-info-holder-right-sec">
            <p className="About__company-info-hdr">
              Dweep LAB (Sigle Source Solution) Platform
            </p>
            <p className="About__company-info-description">
              Dweep Lab is a pioneering provider of single-source tinting solutions for the paint
              industry. We develops advanced software, supply high-quality tinting colorants,
              precise base correction, and reliable colorants dispensers into one seamless
              ecosystem. Our approach simplifies operations for manufacturers and retailers,
              ensures accurate color matching, reduces waste, and enhances customer
              satisfaction
            </p>
            <p className="About__company-info-description">
              Backed by decades of combined expertise, Dweep Lab delivers a complete, end-toend tinting platform that’s practical, sustainable, and tailored to real-world industry
              needs.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
