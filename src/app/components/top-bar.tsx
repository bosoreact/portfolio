import style from "../styles/main.module.css";
import modeImg from "@pub/images/main/dark_mode.svg";
import { ShowImage } from "../pages/main";
import Link from "next/link";
import { PortfolioTypes } from "@pub/personal_data/portfolio_default";

let portfolio: PortfolioTypes;

try {
  // Attempt to import the main profile component
  portfolio = require("@pub/personal_data/portfolio").portfolio;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  portfolio = require("@pub/personal_data/portfolio_default").portfolio;
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
        <button className={style["theme-button"]}>
          <span className={style["text"]}> Dark mode </span>
          <div className="icon-wrapper">
            <div className="icon"> {ShowImage(modeImg)} </div>
          </div>
        </button>
      </div>
    </div>
  );
}
