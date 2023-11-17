"use client";

import style from "@/app/styles/main.module.css";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import about_style from "./about.module.css";
import Link from "next/link";
import { PortfolioTypes } from "@pub/personal_data/portfolio_default";
import ImagesCheck from "../components/image_check";

let portfolio: PortfolioTypes;

try {
  // Attempt to import the main profile component
  portfolio = require("@pub/personal_data/portfolio").portfolio;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  portfolio = require("@pub/personal_data/portfolio_default").portfolio;
}

export default function About() {

  const aboutMe = (
    <div className={about_style["about-me"]}>
      <h3>BOGDAN ANDREW TODOROW</h3>
      {portfolio.aboutMe.long.map((x, y) => {
        return <p key={y}>{x}</p>;
      })}
    </div>
  );

  const showImage = (imageSrc: string) => {
    return (
      <ImagesCheck source={imageSrc} className={about_style["photo-style"]} />
    );
  };
  const descriptionAndLink = (p1: string, p2: string, route: string) => {
    return (
      <div className={about_style["description-and-link"]}>
        <div className={about_style["description"]}>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
        <Link href={`${route}`}> {routeLink} </Link>
      </div>
    );
  };

  const routeLink = (
    <div className={about_style["route-link"]}>
      <div className={about_style["arrow"]}></div>
      <div className={about_style["arrow"]}></div>
      <div className={about_style["arrow"]}></div>
    </div>
  );

  const ShowImage = (imageSrc: string) => {
    return (
      <ImagesCheck source={imageSrc} className={about_style["photo-style"]} />
    );
  };

  return (
    <div className={style["main-page"]}>
      <TopBar />

      <div className={about_style["box-wrapper"]}>
        <div className={about_style["summary-and-photo"]}>
          <div className={about_style["image-wrapper"]}>
            {ShowImage("/images/profile/photo.png")}
          </div>
          <div className={about_style["title-and-description"]}>
            <div className={about_style["page-title"]}>✴SELF SUMMARY✴</div>
            {aboutMe}
          </div>
        </div>
        <div className={about_style["exp-and-education"]}>
          <div className={about_style["experience"]}>
            <h3>EXPERIENCE</h3>
            {portfolio.experience.map((x, y) => {
              if (y <= 1) {
                return (
                  <div
                    key={`block ${y}`}
                    className={about_style["extracted-block"]}
                  >
                    <p key={y}>{x.year}</p>
                    <p key={y}>{x.jobTitle}</p>
                    <p key={y}>{x.companyName}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className={about_style["education"]}>
            <h3>EDUCATION</h3>
            {portfolio.education.map((x, y) => {
              if (y <= 1) {
                return (
                  <div
                    key={`block ${y}`}
                    className={about_style["extracted-block"]}
                  >
                    <p key={y}>{x.year}</p>
                    <p key={y}>{x.school}</p>
                    <p key={y}>{x.degree}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={about_style["box-line-bottom"]}>
          <div className={about_style["profiles-box"]}>
            <div className={about_style["image-wraper"]}>
              {showImage("/images/main/socials/twitter.png")}
              {showImage("/images/main/socials/linkedin.png")}
            </div>
            {descriptionAndLink("STAY WITH ME", "Profiles", "contact")}
          </div>
          <div className={about_style["notes"]}>
            <div className={about_style["first-line"]}>
              <p>Let &#769;s</p>
            </div>
            <div className={about_style["second-line"]}>
              <p>work</p>
              <p>together</p>
            </div>
          </div>
          <div className={about_style["c-and-p-box"]}>
            <div className={about_style["top-sign"]}>{portfolio.sign}</div>
            {descriptionAndLink("MORE ABOUT ME", "Credentials", "credentials")}
          </div>
        </div>
      </div>
      <Afoota />
    </div>
  );
}
