import { portfolio } from "../../../public/portfolio";
import style from "../styles/main.module.css";

export default function TopBar(){

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
            <div className={style["right-placement"]}>placement</div>
        </div>
    )
}