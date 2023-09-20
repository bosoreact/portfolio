"use client";

import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import style from "@/app/styles/main.module.css";
import m_style from "@/app/mywork/mywork.module.css";
import { MyWork } from "@/app/my-work";
import exampleImage from "@/../images/my-work/figma_shoes_shop.png";
import Image, { StaticImageData } from "next/image";
import { resolve } from "path";
import { useEffect, useState } from "react";

export default function Page() {
  const [mywork, setMywork] = useState(MyWork);
  /*here I will create function that will read mywork array of objects
  and depending on amount of objects will divide 1/3 obejct to left-side-mywork
  and 2/3 object to right-side-mywork. zero index must be at the begining of left-side-mywork.
  index one and two must be at the begining of right-side-mywork
*/
  const divideMyworkOnTwoSides = () => {
    let tempwork = mywork;
    let left = [];
    let right = [];
    for (let i = 0; i < mywork.length ; i++) {
      if (tempwork.length > 0) left[left.length] = tempwork.shift();
      if (tempwork.length > 0) right[right.length] = tempwork.shift();
      if (tempwork.length > 0) right[right.length] = tempwork.shift();
    }
    console.log("left", Object.keys(left[0])[0],left.length);
    console.log("right", right.length);
    return { left, right };
  };
  const ShowImage = (imageSrc: StaticImageData) => {
    return (
      <Image
        src={imageSrc}
        className={m_style["photo-style"]}
        alt="Picture of the author"
      />
    );
  };
  const exampleProject = (
    <div className={m_style["project-box"]}>{ShowImage(exampleImage)}</div>
  );
console.log(Object.keys(mywork[0])[0]);
  const displayMywork = () => {
    // console.log("twoSides",  divideMyworkOnTwoSides())
    const { left, right } = divideMyworkOnTwoSides();
    return (
      <div className={m_style["box-wrapper"]}>
        <div className={m_style["left-side-mywork"]}>
          {left.map((x:any) => {
            return (
              <div key={Object.keys(x)[0]} className={m_style["project-box"]}>
                {exampleProject}
              </div>
            );
          })}
        </div>
        <div className={m_style["right-side-mywork"]}>
          {right.map((x:any) => {
            return (
              <div key={Object.keys(x)[0]} className={m_style["project-box"]}>
                {exampleProject}
              </div>
            );
          })}
          {<div className={m_style["project-box"]}>{exampleProject}</div>}
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
      {/* <div className={m_style["box-wrapper"]}>
        <div className={m_style["left-side-mywork"]}>
          <div className={m_style["project-box"]}>{exampleProject}</div>
          <div className={m_style["project-box"]}>{exampleProject}</div>
          <div className={m_style["project-box"]}>{exampleProject}</div>
        </div>
        <div className={m_style["right-side-mywork"]}>
          <div className={m_style["page-title"]}>✴ALL PROJECTS✴</div>
          <div className={m_style["project-box"]}>{exampleProject}</div>
          <div className={m_style["project-box"]}>{exampleProject}</div>
          <div className={m_style["project-box"]}>{exampleProject}</div>
          <div className={m_style["project-box"]}>{exampleProject}</div>
          <div className={m_style["project-box"]}>{exampleProject}</div>
        </div>
      </div> */}
      {projectBox()}
      <Afoota />
    </div>
  );
}
