import Afoota from "../components/afoota";
import TopBar from "../components/top-bar";
import style from "@/app/styles/main.module.css";
import { portfolio } from "../../../public/portfolio";
// importing credentials styles
import c_style from "@/app/credentials/credentials.module.css";

export default function Page() {

const aboutMe = (
<div className={c_style["about-me"]}><h1>ABOUT ME</h1>
{portfolio.aboutMe.long.map((x,y) => {
  return (<p key={y}>{x}</p>)}
)}
</div>
)

  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={c_style["box-wrapper"]}>
        <div className={c_style["left-side-credentials"]}>
          <div className={c_style["photo-and-profile"]}>
            <div className={c_style["image-wrapper"]}>
              <div className={c_style["photo-c_style"]}>photo</div>
            </div>
            <div className={c_style["profile-note"]}>
              <p>name</p>
              <p>{portfolio.domain && portfolio.domain}</p>
            </div>
            <div className={c_style["profiles-box"]}> twitter linkenin</div>
            <div className={c_style["contact-button"]}>contact me</div>
          </div>
          {/* recomendation box will optional and will depend from available file on server */}
          <div className={c_style["recomendation-box"]}>
            <div className={c_style["image-wrapper"]}>
              <div className={c_style["photo-c_style"]}>recomendation</div>
            </div>
          </div>
        </div>
        <div className={c_style["right-side-credentials"]}>
          {aboutMe}
          <div className={c_style["education-box"]}>education</div>
          <div className={c_style["skills-box"]}>skills</div>
          <div className={c_style["badges-and-awards"]}>badges and awards</div>
        </div>
      </div>
      <Afoota />
    </div>
  );
}
