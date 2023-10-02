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

export default function Page() {
  const showImage = (imageSrc: string) => {
    return <ImagesCheck source={imageSrc} className={style_s["photo-style"]} />;
  };
  //an array that will support creating jsx and displaying the right image next to service
  const imageShortUrlList = [
    "database/128x128.png",
    "coding/128x128.png",
    "ui/128x128.png",
    "cloud-data.png",
  ];

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

  const extractServicesfromPortfolio = () => {
    return portfolio.services.map((x, key) => {
      return (
        <div key={`${Object.keys(x)}`} className={style_s["service"]}>
          {showImage(`/images/main/${imageShortUrlList[key]}`)}
          <p>{Object.keys(x)}</p>
        </div>
      );
    });
  };
  const extractServicesDescribtionfromPortfolio = () => {
    return portfolio.services.map((x) => {
      return (
        <div key={`${Object.keys(x)}`} className={style_s["service-description-box"]}>
          <p>{Object.keys(x)}</p>
          <p>{Object.values(x)}</p>
        </div>
      );
    });
  }
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={style_s["box-wrapper"]}>
        <div className={style_s["box-line-top"]}>
          <div className={style_s["left-side-services"]}>
            <div className={style_s["services-box"]}>
              {extractServicesfromPortfolio()}
            </div>
          </div>
          <div className={style_s["right-side-services"]}>
            <div className={style_s["page-title"]}>✴MY OFFERINGS✴</div>
            <div className={style_s["services-description"]}>{extractServicesDescribtionfromPortfolio()}</div>
          </div>
        </div>
        <div className={style_s["box-line-bottom"]}>
          <div className={style_s["profiles-box"]}>
            <div className={style_s["image-wraper"]}>
              {showImage("/images/main/socials/twitter.png")}
              {showImage("/images/main/socials/linkedin.png")}
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
