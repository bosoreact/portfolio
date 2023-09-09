import style from "../styles/main.module.css";
import { portfolio } from "../../../public/portfolio";
import photo from "../../../images/photo.png";
import cvImage from "../../../images/download_image/download.svg";
import Image, { StaticImageData } from "next/image";
import dbImage from "../../../images/database/database.svg";
import codingImage from "../../../images/coding/coding.svg";
import uiImage from "../../../images/ui/user-interface.svg";
import cloudImage from "../../../images/servers/servers.svg";
import githubImage from "../../../images/socials/github.svg";
import linkedinImage from "../../../images/socials/linkedin-round.svg";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import Link from "next/link";

const showImage = (imageSrc: StaticImageData) => {
  return (
    <Image
      src={imageSrc}
      className={style["photo-style"]}
      alt="Picture of the author"
    />
  );
};

const routeLink = (
  <div className={style["route-link"]}>
    <div className={style["arrow"]}></div>
    <div className={style["arrow"]}></div>
    <div className={style["arrow"]}></div>
  </div>
);

const descriptionAndLink = (p1: string, p2: string) => {
  return (
    <div className={style["description-and-link"]}>
      <div className={style["description"]}>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
      <Link href="/credentials"> {routeLink} </Link>
    </div>
  );
};

export default function Main() {
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={style["box-wrapper"]}>
        <div className={style["box-line"]}>
          <div className={style["greetings-box"]}>
            <div className={style["image-wraper"]}> {showImage(photo)}</div>
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
                {descriptionAndLink("MORE ABOUT ME", "Credentials")}
              </div>
              <div className={style["c-and-p-box"]}>
                <div className={style["bg-info"]}>MY WORK</div>
                {descriptionAndLink("SHOWCASE", "Portfolio")}
              </div>
            </div>
          </div>
        </div>
        <div className={style["box-line-s"]}>
          <div className={style["cv-box"]}>
            <div className={style["image-wraper"]}>{showImage(cvImage)}</div>
            {descriptionAndLink("MY CV", "Download")}
          </div>
          <div className={style["offered-services-box"]}>
            <div className={style["image-wraper"]}>
              {showImage(dbImage)}
              {showImage(codingImage)}
              {showImage(uiImage)}
              {showImage(cloudImage)}
            </div>
            {descriptionAndLink("SPECIALIZATION", "Services Offering")}
          </div>
          <div className={style["profiles-box"]}>
            <div className={style["image-wraper"]}>
              {showImage(githubImage)}
              {showImage(linkedinImage)}
            </div>
            {descriptionAndLink("STAY WITH ME", "Profiles")}
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
