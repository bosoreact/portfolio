import Afoota from "../components/afoota";
import TopBar from "../components/top-bar";
import style from "@/app/styles/main.module.css";
import { portfolio } from "@pub/personal_data/portfolio";
import Image, { StaticImageData } from "next/image";
import c_style from "@/app/credentials/credentials.module.css";
import photo from "@pub/images/profile/photo.png";
import twitterImage from "@pub/images/main/socials/twitter.png";
import linkedinImage from "@pub/images/main/socials/linkedin.png";

export default function Page() {
  const ShowImage = (imageSrc: StaticImageData) => {
    return (
      <Image
        src={imageSrc}
        className={c_style["photo-style"]}
        alt="Picture of the author"
      />
    );
  };

  const aboutMe = (
    <div className={c_style["about-me"]}>
      <h3>ABOUT ME</h3>
      {portfolio.aboutMe.long.map((x, y) => {
        return <p key={y}>{x}</p>;
      })}
    </div>
  );
  const experience = (
    <div className={c_style["experience"]}>
      <h3>EXPERIENCE</h3>
      {portfolio.experience.map((x, y) => {
        return (
          <div key={`block ${y}`} className={c_style["extracted-block"]}>
            <p key={y}>{x.year}</p>
            <p key={y}>{x.jobTitle}</p>
            <p key={y}>{x.companyName}</p>
            <p key={y}>{x.jobDescription}</p>
          </div>
        );
      })}
    </div>
  );
  const education = (
    <div className={c_style["education"]}>
      <h3>EDUCATION</h3>
      {portfolio.education.map((x, y) => {
        return (
          <div key={`block ${y}`} className={c_style["extracted-block"]}>
            <p key={y}>{x.year}</p>
            <p key={y}>{x.school}</p>
            <p key={y}>{x.degree}</p>
            <p key={y}>{x.courseDescription}</p>
          </div>
        );
      })}
    </div>
  );
  const skills = (
    <div className={c_style["skills"]}>
      <h3>SKILLS</h3>
      <div className={c_style["wrap-box"]}>
        {portfolio.skills.map((x, y) => {
          return (
            <div key={`block ${y}`} className={c_style["extracted-block"]}>
              <p key={y}>{x.lvl}</p>
              <p key={y}>{x.skill}</p>
              <p key={y}>{x.shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
  const badges = (
    <div className={c_style["badges"]}>
      <h3>BADGES AND AWARDS</h3>
      <div className={c_style["wrap-box"]}>
        {portfolio.awardsAndBadges.map((x, y) => {
          return (
            <div key={`block ${y}`} className={c_style["extracted-block"]}>
              <p key={y}>{x.year}</p>
              <p key={y}>{x.name}</p>
              <p key={y}>{x.shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={c_style["box-wrapper"]}>
        <div className={c_style["left-side-credentials"]}>
          <div className={c_style["photo-and-profile"]}>
            <div className={c_style["image-wrapper"]}>{ShowImage(photo)}</div>
            <div className={c_style["profile-note"]}>
              <p>{portfolio.description.p2}</p>
              <p>{portfolio.domain}</p>
            </div>
            <div className={c_style["profiles-box"]}>
              <div className={c_style["image-wraper"]}>
                {ShowImage(twitterImage)}
                {ShowImage(linkedinImage)}
              </div>
            </div>
            <div className={c_style["contact-button"]}>Contact me</div>
          </div>
          {/* recomendation box will optional and will depend from available file on server */}
          {/* <div className={c_style["recomendation-box"]}>
            <div className={c_style["image-wrapper"]}>
              <div className={c_style["photo-c_style"]}>recomendation</div>
            </div>
          </div> */}
        </div>
        <div className={c_style["right-side-credentials"]}>
          {aboutMe}
          {experience}
          {education}
          {skills}
          {badges}
        </div>
      </div>
      <Afoota />
    </div>
  );
}
