"use client";

import style from "@/app/styles/main.module.css";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import about_style from "./about.module.css"
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

export default function About() {

    const showImage = (imageSrc: string) => {
        return <ImagesCheck source={imageSrc} className={about_style["photo-style"]} />;
      };
    const descriptionAndLink = (p1: string, p2: string, route: string) => {
        return (
            <div className={about_style["description-and-link"]}>
                <div className={about_style["description"]}>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
                <Link href={`${route}`}> {routeLink} </Link>
            </div>
        );
    };

    const routeLink = (
        <div className={about_style["route-link"]}>
            <div className={about_style["arrow"]}></div>
            <div className={about_style["arrow"]}></div>
            <div className={about_style["arrow"]}></div>
        </div>
    );

    return (<div className={style["main-page"]}>
        <TopBar />
        <div className={about_style["box-wrapper"]}>
            <div className={about_style["summary-and-photo"]}>summary and photo </div>
            <div className={about_style["exp-and-education"]}>exp and education</div>
            <div className={about_style["box-line-bottom"]}>
                <div className={about_style["profiles-box"]}>
                    <div className={about_style["image-wraper"]}>
                        {showImage("/images/main/socials/twitter.png")}
                        {showImage("/images/main/socials/linkedin.png")}
                    </div>
                    {descriptionAndLink("STAY WITH ME", "Profiles", "contact")}
                </div>
                <div className={about_style["notes"]}>
                    <div className={about_style["first-line"]}>
                        <p>Let &#769;s</p>
                    </div>
                    <div className={about_style["second-line"]}>
                        <p>work</p>
                        <p>together</p>
                    </div>
                </div>
                <div className={about_style["c-and-p-box"]}>
                    <div className={about_style["top-sign"]}>{portfolio.sign}</div>
                    {descriptionAndLink("MORE ABOUT ME", "Credentials", "credentials")}
                </div>
            </div>
        </div>
        <Afoota />
    </div>
    )
}