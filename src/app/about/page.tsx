"use client";

import style from "@/app/styles/main.module.css";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import about_style from "./about.module.css"
export default function About() {


    return(<div className={style["main-page"]}>
            <TopBar />
        <div className={about_style["box-wrapper"]}>
        <div className={about_style["summary-and-photo"]}>summary and photo </div>
        <div className={about_style["exp-and-education"]}>exp and education</div>
        <div className={about_style["bottom-boxes"]}>bottom boxes</div>
        </div>
        <Afoota />
    </div>
        )
}