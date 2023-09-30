"use client";
import style from "@/app/styles/main.module.css";
import style_s from "@/app/services/services.module.css";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import Link from "next/link";
import ImagesCheck from "../components/image_check";
import { PortfolioTypes } from "@pub/personal_data/portfolio_default";

let portfolio: PortfolioTypes;

try {
  // Attempt to import the main profile component
  portfolio = require("@pub/personal_data/portfolio").portfolio;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  portfolio = require("@pub/personal_data/portfolio_default").portfolio;
}

export const ShowImage = (imageSrc: string) => {
  return <ImagesCheck source={imageSrc} className={style["photo-style"]} />;
};

export default function Page() {
  const routeLink = (
    <div className={style_s["route-link"]}>
      <div className={style_s["arrow"]}></div>
      <div className={style_s["arrow"]}></div>
      <div className={style_s["arrow"]}></div>
    </div>
  );

  const descriptionAndLink = (p1: string, p2: string, route: string) => {
    return (
      <div className={style_s["description-and-link"]}>
        <div className={style_s["description"]}>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
        <Link href={`${route}`}> {routeLink} </Link>
      </div>
    );
  };

  const ShowImage = (imageSrc: string) => {
    return <ImagesCheck source={imageSrc} className={style_s["photo-style"]} />;
  };
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={style_s["box-wrapper"]}>
        <div className={style_s["box-line-top"]}>
          <div className={style_s["left-side-services"]}>
            <div className={style_s["services-box"]}>left</div>
          </div>
          <div className={style_s["right-side-services"]}>
            <div className={style_s["page-title"]}>✴MY OFFERINGS✴</div>
            <div className={style_s["services-description"]}>right</div>
          </div>
        </div>
        <div className={style_s["box-line-bottom"]}>
          <div className={style_s["profiles-box"]}>
            <div className={style_s["image-wraper"]}>
              {ShowImage("/images/main/socials/twitter.png")}
              {ShowImage("/images/main/socials/linkedin.png")}
            </div>
            {descriptionAndLink("STAY WITH ME", "Profiles", "contact")}
          </div>
          <div className={style_s["notes"]}>
            <div className={style_s["first-line"]}>
              <p>Let &#769;s</p>
            </div>
            <div className={style_s["second-line"]}>
              <p>work</p>
              <p>together</p>
            </div>
          </div>
          <div className={style_s["c-and-p-box"]}>
            <div className={style_s["top-sign"]}>{portfolio.sign}</div>
            {descriptionAndLink("MORE ABOUT ME", "Credentials", "credentials")}
          </div>
        </div>
      </div>
      <Afoota />
    </div>
  );
}
