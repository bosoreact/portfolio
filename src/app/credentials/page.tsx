import Afoota from "../components/afoota";
import TopBar from "../components/top-bar";
import style from "@/app/styles/main.module.css";
import { portfolio } from "../../../public/portfolio";

export default function Page() {
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={style["left-side-credentials"]}>
        <div className={style["photo-and-profile"]}>
          <div className={style["image-wrapper"]}>
            <div className={style["photo-style"]}>photo</div>
          </div>
          <div className={style["profile-note"]}>
            <p>name</p>
            <p>website @surname as a link</p>
          </div>
          <div className={style["profiles-box"]}> twitter linkenin</div>
          <div className={style["contact-button"]}>contact me</div>
        </div>
        {/* recomendation box will optional and will depend from available file on server */}
        <div className={style["recomendation-box"]}>
          <div className={style["image-wrapper"]}>
            <div className={style["photo-style"]}>recomendation</div>
          </div>
        </div>
      </div>
      <div className={style["right-side-credentials"]}>
      <div className={style["education-box"]}>education</div>
      <div className={style["skills-box"]}>skills</div>
      <div className={style["badges-and-awards"]}>badges and awards</div>
      </div>
      <Afoota />
    </div>
  );
}
