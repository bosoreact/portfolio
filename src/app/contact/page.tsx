"use client";

import style from "@/app/styles/main.module.css";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import ImagesCheck from "../components/image_check";
import contact_style from "@/app/contact/page.module.css";

let myWork: any;

try {
  // Attempt to import the main profile component
  myWork = require("@pub/personal_data/my-work").MyWork;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  myWork = require("@pub/personal_data/my_work_default").MyWork;
}

export default function Contact() {
  const showImage = (imageSrc: string) => {
    return (
      <ImagesCheck source={imageSrc} className={contact_style["photo-style"]} />
    );
  };
  const displayContact = () => {
    return <>contact</>;
  };

  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={contact_style["box-wrapper"]}>
        <div className={contact_style["left-side-contact"]}>
          <div className={contact_style["contact-title"]}>CONTACT INFO</div>
          <div className={contact_style["contact-types"]}>
            <div className={contact_style["contact-box"]}>
              <div className={contact_style["image-wrapper"]}>
                {showImage("/images/main/mail.png")}
              </div>
              <div className={contact_style["contact-paragraphs"]}>
                <p>MAIL ME</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
            <div className={contact_style["contact-box"]}>
              <div className={contact_style["image-wrapper"]}>
                {showImage("/images/main/telephone.png")}
              </div>
              <div className={contact_style["contact-paragraphs"]}>
                <p>CONTACT ME</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
            <div className={contact_style["contact-box"]}>
              <div className={contact_style["image-wrapper"]}>
                {showImage("/images/main/location.png")}
              </div>
              <div className={contact_style["contact-paragraphs"]}>
                <p>LOCATION</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
          </div>
          <div className={contact_style["social-title"]}>SOCIAL INFO</div>
          <div className={contact_style["socials"]}>
            {showImage("/images/main/socials/linkedin.png")}
            {showImage("/images/main/socials/twitter.png")}
          </div>
        </div>
        <div className={contact_style["right-side-contact"]}>
          <div className={contact_style["notes"]}>
            <div className={contact_style["first-line"]}>
              <p>Let &#769;s work </p>
              <p> together</p>
            </div>
          </div>
          right
        </div>
      </div>
      <Afoota />
    </div>
  );
}
