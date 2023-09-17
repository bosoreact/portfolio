import { portfolio } from "@/app/portfolio";
import style from "../styles/main.module.css";
import modeImg from "../../../images/dark_mode.svg";
import { ShowImage } from "../pages/main";

export default function TopBar() {
  return (
    <div className={style["Top"]}>
      <div className={style["left-placement"]}>{portfolio.CompanyName}</div>
      <div className={style["navigation-buttons"]}>
        <div className={style["nav-button"]}>navbutton</div>
        <div className={style["nav-button"]}>navbutton</div>
        <div className={style["nav-button"]}>navbutton</div>
        <div className={style["nav-button"]}>navbutton</div>
        <div className={style["nav-button"]}>navbutton</div>
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
