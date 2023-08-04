import style from "../styles/main.module.css";
import { portfolio } from "../../../public/portfolio";
import photo from "../../../images/photo.png";
import cvImage from "../../../images/download_image/128x128.png";
import Image, { StaticImageData } from "next/image";
import dbImage from "../../../images/database/128x128.png"
import codingImage from "../../../images/coding/128x128.png"
import uiImage from "../../../images/ui/128x128.png"
import cloudImage from "../../../images/servers/cloud-data.png"
import path from "path";

const ShowImage = (imageSrc: StaticImageData) => {
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
  const descriptionAndLink = (p1: string, p2: string) => {
    return (
      <div className={style["description-and-link"]}>
        <div className={style["description"]}>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
        {routeLink}
      </div>
    );
  };
  return (
    <div className={style["main-page"]}>
      <div className={style["Top"]}>
        <div className={style["left-placement"]}>{portfolio.CompanyName}</div>
        <div className={style["navigation-buttons"]}>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
        </div>
        <div className={style["right-placement"]}>placement</div>
      </div>
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
            <div className={style["image-wraper"]}>{ShowImage(cvImage)}</div>
            {descriptionAndLink("MY CV", "Download")}
          </div>
          <div className={style["offered-services-box"]}>
            <div className={style["image-wraper"]}>
              {ShowImage(dbImage)}
              {ShowImage(codingImage)}
              {ShowImage(uiImage)}
              {ShowImage(cloudImage)}
            </div>
            {descriptionAndLink("SPECIALIZATION", "Services Offering")}
          </div>
          <div className={style["profiles-box"]}>profile</div>
        </div>
        <div className={style["box-line-s"]}>
          <div className={style["statistic-and-notes"]}>statistic</div>
          <div className={style["statistic-and-notes"]}>note</div>
        </div>
      </div>
      <div className={style["Bottom"]}>
        <div className={style["placement"]}>{portfolio.CompanyName}</div>
        <div className={style["navigation-buttons"]}>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
          <div className={style["nav-button"]}>navbutton</div>
        </div>
      </div>
    </div>
  );
}
