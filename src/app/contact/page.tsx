"use client";

import Link from "next/link";
import style from "@/app/styles/main.module.css";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import ImagesCheck from "../components/image_check";
import contact_style from "@/app/contact/page.module.css";
import { PortfolioTypes } from "@pubpersonal_data/portfolio_default";

let portfolio: PortfolioTypes;

try{
  portfolio = require("@pub/personal_data/portfolio").portfolio
}catch  (error) {
  portfolio = require("@pub/personal_data/portfolio_default").portfolio
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
                <p>{portfolio.contact.email}</p>
                {/* <p>3</p> */}
              </div>
            </div>
            <div className={contact_style["contact-box"]}>
              <div className={contact_style["image-wrapper"]}>
                {showImage("/images/main/telephone.png")}
              </div>
              <div className={contact_style["contact-paragraphs"]}>
                <p>CONTACT ME</p>
                <p>{portfolio.contact.number}</p>
                {/* <p>3</p> */}
              </div>
            </div>
            <div className={contact_style["contact-box"]}>
              <div className={contact_style["image-wrapper"]}>
                {showImage("/images/main/location.png")}
              </div>
              <div className={contact_style["contact-paragraphs"]}>
                <p>LOCATION</p>
                {portfolio.contact.adress.map((x , key)=>{return (<p key={key}>{x}</p>)})}
              </div>
            </div>
          </div>
          <div className={contact_style["social-title"]}>SOCIAL INFO</div>
          <div className={contact_style["socials"]}>
          <Link href={`https://www.linkedin.com/in/bogdan-todorow/`}>
              {showImage("/images/main/socials/linkedin.png")}
              </Link>
            <Link href={`https://twitter.com/BogdanTodorow`}>
             {showImage("/images/main/socials/twitter.png")}
             </Link>
          </div>
        </div>
        <div className={contact_style["right-side-contact"]}>
          <div className={contact_style["notes"]}>
            <div className={contact_style["first-line"]}>
              <p>Let &#769;s work</p>
              <p>together.</p>
            </div>
          </div>
          <div className={contact_style["form-wrapper"]}>
            <form onSubmit={(event) => {console.log("value",event); event.preventDefault();}}>
              <label>
                <input name="name" placeholder="Your Name *" maxLength={30}/>
              </label>
              <label>
                <input name="email" placeholder="Your Email *" maxLength={30}/>
              </label>
              <label>
                <input name="subject" placeholder="Your Subject *" maxLength={30}/>
              </label>
              <label>
                <textarea name="message" placeholder="Your Message" maxLength={200}/>
              </label>
              <input type="submit" value="Send Message" />
            </form>
          </div>

        </div>
      </div>
      <Afoota />
    </div>
  );
}
