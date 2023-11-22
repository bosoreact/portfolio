"use client";
import style from "../styles/main.module.css";
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

export default function Main() {
  const routeLink = (
    <div className={style["route-link"]}>
      <div className={style["arrow"]}></div>
      <div className={style["arrow"]}></div>
      <div className={style["arrow"]}></div>
    </div>
  );
  const descriptionAndLink = (p1: string, p2: string, route: string) => {
    return (
      <div className={style["description-and-link"]}>
        <div className={style["description"]}>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
        <Link href={`${route}`}> {routeLink} </Link>
      </div>
    );
  };
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={style["box-wrapper"]}>
        <div className={style["box-line"]}>
          <div className={style["greetings-box"]}>
            <div className={style["image-wraper"]}>
              {" "}
              {ShowImage("/images/profile/photo.png")}
            </div>
            <div className={style["greeting-note"]}>
              <p>{portfolio.description.p1}</p>
              <p>{portfolio.description.p2}</p>
              <p>{portfolio.description.p3}</p>
            </div>
          </div>
          <div className={style["right-nested-box"]}>
            <div className={style["moving-phrase"]}>
              <p>{portfolio.scrolingText}</p>
              <p>{portfolio.scrolingText}</p>
              <p>{portfolio.scrolingText}</p>
            </div>
            <div className={style["credentials-and-portfolio"]}>
              <div className={style["c-and-p-box"]}>
                <div className={style["top-sign"]}>{portfolio.sign}</div>
                {descriptionAndLink(
                  "MORE ABOUT ME",
                  "Credentials",
                  "credentials"
                )}
              </div>
              <div className={style["c-and-p-box"]}>
                <div className={style["bg-info"]}>MY WORK</div>
                {descriptionAndLink("SHOWCASE", "Portfolio", "mywork")}
              </div>
            </div>
          </div>
        </div>
        <div className={style["box-line-s"]}>
          <div className={style["cv-box"]}>
            <div className={style["image-wraper"]}>
              {ShowImage("/images/main/download_image/128x128.png")}
            </div>
            {descriptionAndLink("MY CV", "Download", "/api/cv_download")}
          </div>
          <div className={style["offered-services-box"]}>
            <div className={style["image-wraper"]}>
              {ShowImage("/images/main/database/128x128.png")}
              {ShowImage("/images/main/coding/128x128.png")}
              {ShowImage("/images/main/ui/128x128.png")}
              {ShowImage("/images/main/cloud-data.png")}
            </div>
            {descriptionAndLink(
              "SPECIALIZATION",
              "Services Offering",
              "services"
            )}
          </div>
          <div className={style["profiles-box"]}>
            <div className={style["image-wraper"]}>
            <Link href={`https://twitter.com/BogdanTodorow`}>
             {ShowImage("/images/main/socials/twitter.png")}
             </Link>
             <Link href={`https://www.linkedin.com/in/bogdan-todorow/`}>
              {ShowImage("/images/main/socials/linkedin.png")}
              </Link>
            </div>
            {descriptionAndLink("STAY WITH ME", "Profiles", "contact")}
          </div>
        </div>
        <div className={style["box-line-s"]}>
          <div className={style["statistic"]}>
            <div className={style["stat-box"]}>
              <p>{portfolio.stats.experience}</p>
              <p>YEARS EXPERIENCE</p>
            </div>
            <div className={style["stat-box"]}>
              <p>{portfolio.stats.colaborators}</p>
              <p>COLLABORATORS WORLDWIDE</p>
            </div>
            <div className={style["stat-box"]}>
              <p>{portfolio.stats.projects}</p>
              <p>TOTAL PROJECTS</p>
            </div>
          </div>

          <div className={style["notes"]}>
            <div className={style["first-line"]}>
              <p>Let &#769;s</p>
            </div>
            <div className={style["second-line"]}>
              <p>work</p>
              <p>together</p>
            </div>
          </div>
        </div>
      </div>
      <Afoota />
    </div>
  );
}
