"use client";

import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import style from "@/app/styles/main.module.css";
import m_style from "@/app/mywork/mywork.module.css";
import exampleImage from "@/../images/main/default_images/default_project.png";
import Image, { StaticImageData } from "next/image";
// import { resolve } from "path";
import { useEffect, useState } from "react";


let myWork: any

try {
  // Attempt to import the main profile component
  myWork = require("@pub/personal_data/my-work").MyWork;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  myWork = require("@pub/personal_data/my_work_default").MyWork;
}

export default function Page() {
  const [mywork, setMywork] = useState(myWork);
  console.log(myWork)
  /*here I will create function that will read mywork array of objects
  and depending on amount of objects will divide 1/3 obejct to left-side-mywork
  and 2/3 object to right-side-mywork. zero index must be at the begining of left-side-mywork.
  index one and two must be at the begining of right-side-mywork
*/
// const exampleImage = "/images/main/default_images/default_project.png"
  const divideMyworkOnTwoSides = () => {
    let tempwork = mywork;
    let left = [];
    let right = [];
    for (let i = 0; tempwork.length > 0; i++) {
      if (tempwork.length > 0) left[left.length] = tempwork.shift();
      if (tempwork.length > 0) right[right.length] = tempwork.shift();
      if (tempwork.length > 0) right[right.length] = tempwork.shift();
    }
    return { left, right };
  };
  const ShowImage = (imageSrc: StaticImageData) => {
    return (
      <Image
        src={imageSrc}
        className={m_style["photo-style"]}
        alt="Picture of the author"

        //width={100}
      />
    );
  };
  const exampleProject = (
    <>
    {ShowImage(exampleImage)}
    </>
  );
  const displayMywork = () => {
    const { left, right } = divideMyworkOnTwoSides();
    return (
      <div className={m_style["box-wrapper"]}>
        <div className={m_style["left-side-mywork"]}>
          {left.map((x: any) => {
            return (
              <div key={Object.keys(x)[0]} className={m_style["project-box"]}>
                {exampleProject}
                <p>{Object.keys(x)[0]}</p>
              </div>
            );
          })}
        </div>
        <div className={m_style["right-side-mywork"]}>
          <div className={m_style["page-title"]}>✴ALL PROJECTS✴</div>
          {right.map((x: any) => {
            return (
              <div key={Object.keys(x)[0]} className={m_style["project-box"]}>
                {exampleProject}
                <p>{Object.keys(x)[0]}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const projectBox = () => {
    return mywork.length;
  };

  return (
    <div className={style["main-page"]}>
      <TopBar />
      {displayMywork()}
      <Afoota />
    </div>
  );
}
