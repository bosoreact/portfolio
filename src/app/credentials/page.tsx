"use client";

import Afoota from "../components/afoota";
import TopBar from "../components/top-bar";
import style from "@/app/styles/main.module.css";
import c_style from "@/app/credentials/credentials.module.css";
import React, { useState } from "react";
import Link from "next/link";
import ImagesCheck from "../components/image_check";
import { PortfolioTypes } from "@pub/personal_data/portfolio_default";

let portfolio: PortfolioTypes;

try {
  // Attempt to import the main profile component
  portfolio = require("@pub/personal_data/portfolio").portfolio;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  portfolio = require("@pub/personal_data/portfolio_default").portfolio;
}

export default function Page() {
  const ShowImage = (imageSrc: string) => {
    return <ImagesCheck source={imageSrc} className={c_style["photo-style"]} />;
  };

  const aboutMe = (
    <div className={c_style["about-me"]}>
      <h3>ABOUT ME</h3>
      {portfolio.aboutMe.long.map((x, y) => {
        return <p key={y}>{x}</p>;
      })}
    </div>
  );
  const experience = (
    <div className={c_style["experience"]}>
      <h3>EXPERIENCE</h3>
      {portfolio.experience.map((x, y) => {
        return (
          <div key={`block ${y}`} className={c_style["extracted-block"]}>
            <p key={y}>{x.year}</p>
            <p key={y}>{x.jobTitle}</p>
            <p key={y}>{x.companyName}</p>
            <p key={y}>{x.jobDescription}</p>
          </div>
        );
      })}
    </div>
  );
  const education = (
    <div className={c_style["education"]}>
      <h3>EDUCATION</h3>
      {portfolio.education.map((x, y) => {
        return (
          <div key={`block ${y}`} className={c_style["extracted-block"]}>
            <p key={y}>{x.year}</p>
            <p key={y}>{x.school}</p>
            <p key={y}>{x.degree}</p>
            <p key={y}>{x.courseDescription}</p>
          </div>
        );
      })}
    </div>
  );
  const skills = (
    <div className={c_style["skills"]}>
      <h3>SKILLS</h3>
      <div className={c_style["wrap-box"]}>
        {portfolio.skills.map((x, y) => {
          return (
            <div key={`block ${y}`} className={c_style["extracted-block"]}>
              <p key={y}>{x.lvl}</p>
              <p key={y}>{x.skill}</p>
              <p key={y}>{x.shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
  const badges = (
    <div className={c_style["badges"]}>
      <h3>BADGES AND AWARDS</h3>
      <div className={c_style["wrap-box"]}>
        {portfolio.awardsAndBadges.map((x, y) => {
          return (
            <div key={`block ${y}`} className={c_style["extracted-block"]}>
              <p key={y}>{x.year}</p>
              <p key={y}>{x.name}</p>
              <p key={y}>{x.shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={c_style["box-wrapper"]}>
        <div className={c_style["left-side-credentials"]}>
          <div className={c_style["photo-and-profile"]}>
            <div className={c_style["image-wrapper"]}>
              {ShowImage("/images/profile/photo.png")}
            </div>
            <div className={c_style["profile-note"]}>
              <p>{portfolio.description.p2}</p>
              <p>{portfolio.domain}</p>
            </div>
            <div className={c_style["profiles-box"]}>
              <div className={c_style["image-wraper"]}>
              <Link href={portfolio.socials.twitter}>
             {ShowImage("/images/main/socials/twitter.png")}
             </Link>
             <Link href={portfolio.socials.linkedin}>
              {ShowImage("/images/main/socials/linkedin.png")}
              </Link>
              </div>
            </div>
            <div className={c_style["contact-button"]}>Contact me</div>
          </div>
          {/* recomendation box will optional and will depend from available file on server */}
          {/* <div className={c_style["recomendation-box"]}>
            <div className={c_style["image-wrapper"]}>
              <div className={c_style["photo-c_style"]}>recomendation</div>
            </div>
          </div> */}
        </div>
        <div className={c_style["right-side-credentials"]}>
          {aboutMe}
          {experience}
          {education}
          {skills}
          {badges}
        </div>
      </div>
      <Afoota />
    </div>
  );
}
