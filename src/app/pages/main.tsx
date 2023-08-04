import style from "../styles/main.module.css";
import { portfolio } from "../../../public/portfolio";
import photo from "../../../images/photo.png";
import Image from "next/image";

const myPhoto = (
  <Image
    src={photo}
    className={style["photo-style"]}
    alt="Picture of the author"
  />
);
export default function Main() {
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
            <div className={style["image-wraper"]}>{myPhoto}</div>
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
                <div className={style["c-description-and-link"]}>
                  <div className={style["credentials-description"]}>
                    <p>MORE ABOUT ME</p>
                    <p>Credentials</p>
                  </div>
                  <div className={style["route-link"]}>
                    <div className={style["arrow"]}></div>
                    <div className={style["arrow"]}></div>
                    <div className={style["arrow"]}></div>
                  </div>
                </div>
              </div>
              <div className={style["c-and-p-box"]}>portfolio</div>
            </div>
          </div>
        </div>
        <div className={style["box-line-s"]}>
          <div className={style["cv-box"]}>cv box</div>
          <div className={style["offered-services-box"]}>services</div>
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
