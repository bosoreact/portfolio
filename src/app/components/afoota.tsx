import { portfolio } from "@/app/portfolio";
import style from "../styles/main.module.css";

export default function Afoota(){

    return (
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
    )
}