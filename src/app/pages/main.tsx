import style from "../styles/main.module.css";
import { portfolio } from "@pub/personal_data/portfolio";
import photo from "@pub/images/profile/photo.png";
import cvImage from "@pub/images/main/download_image/128x128.png";
import Image, { StaticImageData } from "next/image";
import dbImage from "@pub/images/main/database/128x128.png";
import codingImage from "@pub//images/main/coding/128x128.png";
import uiImage from "@pub//images/main/ui/128x128.png";
import cloudImage from "@pub/images/main/cloud-data.png";
import twitterImage from "@pub/images/main/socials/twitter.png";
import linkedinImage from "@pub/images/main/socials/linkedin.png";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import Link from "next/link";

export const ShowImage = (imageSrc: StaticImageData) => {
  return (
    <Image
      src={imageSrc}
      className={style["photo-style"]}
      alt="Picture of the author"
    />
  );
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
            <div className={style["image-wraper"]}> {ShowImage(photo)}</div>
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
            <div className={style["image-wraper"]}>{ShowImage(cvImage)}</div>
            {descriptionAndLink("MY CV", "Download", "cv")}
          </div>
          <div className={style["offered-services-box"]}>
            <div className={style["image-wraper"]}>
              {ShowImage(dbImage)}
              {ShowImage(codingImage)}
              {ShowImage(uiImage)}
              {ShowImage(cloudImage)}
            </div>
            {descriptionAndLink(
              "SPECIALIZATION",
              "Services Offering",
              "services"
            )}
          </div>
          <div className={style["profiles-box"]}>
            <div className={style["image-wraper"]}>
              {ShowImage(twitterImage)}
              {ShowImage(linkedinImage)}
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
