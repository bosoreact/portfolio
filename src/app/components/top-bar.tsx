import { portfolio } from "@/app/portfolio";
import style from "../styles/main.module.css";
import modeImg from "../../../images/dark_mode.svg";
import { ShowImage } from "../pages/main";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className={style["Top"]}>
      <div className={style["left-placement"]}>{portfolio.CompanyName}</div>

      <div className={style["navigation-buttons"]}>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/credentials">
            <>Credentials</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/portfolio">
            <>Portfolio</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/download">
            <>Download</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/services">
            <>Services</>
          </Link>
        </div>
        <div className={style["nav-button"]}>
          <Link className={style["nav-button-link"]} href="/profiles">
            <>Profiles</>
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
