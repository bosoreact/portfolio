import style from "../styles/main.module.css";
import modeImg from "@pub/images/main/dark_mode.svg";
import Link from "next/link";
import { PortfolioTypes } from "@pub/personal_data/portfolio_default";
import ImagesCheck from "../components/image_check";

let portfolio: PortfolioTypes;

try {
  // Attempt to import the main profile component
  portfolio = require("@pub/personal_data/portfolio").portfolio;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  portfolio = require("@pub/personal_data/portfolio_default").portfolio;
}

const ShowImage = (imageSrc: string) => {
  return <ImagesCheck source={imageSrc} className={style["photo-style"]} />;
}

export default function TopBar() {
  return (
    <div className={style["Top"]}>
      <div className={style["left-placement"]}>{portfolio.CompanyName}</div>

      <div className={style["navigation-buttons"]}>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/">
            <>Home</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/about">
            <>About</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/mywork">
            <>Works</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/contact">
            <>Contact</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/services">
            <>Services</>
          </Link>
        </div>
      </div>

      <div className={style["right-placement"]}>
        <div className={style["theme-button"]}>
          <div className={style["text"]}> Dark mode </div>
          <div className={style["image-wraper"]}>
            {ShowImage("/images/main/brightness.png")}
          </div>
        </div>
      </div>
    </div>
  );
}
