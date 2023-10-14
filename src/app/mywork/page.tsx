"use client";

import Link from "next/link";
import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import style from "@/app/styles/main.module.css";
import m_style from "@/app/mywork/mywork.module.css";
import { useEffect, useState } from "react";
import ImagesCheck from "../components/image_check";

export default function Mywork() {
  const [mywork, setMywork] = useState([]);
  /*here I will create function that will read mywork array of objects
  and depending on amount of objects will divide 1/3 obejct to left-side-mywork
  and 2/3 object to right-side-mywork. zero index must be at the begining of left-side-mywork.
  index one and two must be at the begining of right-side-mywork
*/
  useEffect(() => {
    fetch("api/portfolio")
      .then((res) => res.json())
      .then((data) => setMywork(data));
  }, []);

  const trimStringUpToFristDot = (phrase: string) => {
    return phrase.slice(0, phrase.indexOf(".") + 1);
  };
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
  const ShowImage = () => {
    return (
      <ImagesCheck
        source={"/images/main/default_images/project.png"}
        //image style for current component
        className={m_style["photo-style"]}
        defaultImage={"/images/main/default_images/project.png"}
      />
    );
  };
  const displayMywork = () => {
    const { left, right } = divideMyworkOnTwoSides();
    return (
      <div className={m_style["box-wrapper"]}>
        <div className={m_style["left-side-mywork"]}>
          {left.map((x: any) => {
            return (
              <Link
                href={{ pathname: "/mywork/project", query: { name: Object.keys(x)[0] } }}
                style={{
                  textDecoration: "none",
                }}
                key={Object.keys(x)[0] + "link"}
              >
                <div key={Object.keys(x)[0]} className={m_style["project-box"]}>
                  {ShowImage()}
                  <div className={m_style["description"]}>
                    <p>{Object.keys(x)[0]}</p>
                    <p>
                      {trimStringUpToFristDot(x[Object.keys(x)[0]]["Brief"])}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={m_style["right-side-mywork"]}>
          <div className={m_style["page-title"]}>✴ALL PROJECTS✴</div>
          {right.map((x: any) => {
            return (
              <Link
                href={{ pathname: "/mywork/project", query: { name: Object.keys(x)[0] } }}
                style={{
                  textDecoration: "none",
                }}
                key={Object.keys(x)[0] + "link"}
              >
              <div key={Object.keys(x)[0]} className={m_style["project-box"]}>
                {ShowImage()}
                <div className={m_style["description"]}>
                  <p>{Object.keys(x)[0]}</p>
                  <p>{trimStringUpToFristDot(x[Object.keys(x)[0]]["Brief"])}</p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={style["main-page"]}>
      <TopBar />
      {displayMywork()}
      <Afoota />
    </div>
  );
}
