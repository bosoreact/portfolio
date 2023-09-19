import TopBar from "../components/top-bar";
import Afoota from "../components/afoota";
import style from "@/app/styles/main.module.css";
import m_style from "@/app/mywork/mywork.module.css";
import { MyWork } from "@/app/my-work";
import exampleImage from "@/../images/my-work/figma_shoes_shop.png";
import Image, { StaticImageData } from "next/image";

export default function Page() {
  /*here I will create function that will read mywork array of objects
  and depending on amount of objects will divide 1/3 obejct to left-side-mywork
  and 2/3 object to right-side-mywork. zero index must be at the begining of left-side-mywork.
  index one and two must be at the begining of right-side-mywork

    */
  const divideMyworkOnTwoSides = () => {
    console.log(MyWork)
    let mywork = MyWork;
    let left: object[] | any[] = [];
    let right: object[] | any[] = [];
    mywork.forEach((x) => {
      left[left.length] = mywork.shift();
      right[right.length] = mywork.shift();
      right[right.length] = mywork.shift();
    });
    return { left, right };
  };
  const extractMyWork = () => {
    const { left, right } = divideMyworkOnTwoSides();
    return (
      <div className={m_style["box-wrapper"]}>
        <div className={m_style["left-side-mywork"]}>
          {left.map((index, x) => {
            return (
              <div key={index} className={m_style["project-box"]}>
                {exampleProject}
              </div>
            );
          })}
        </div>
        <div className={m_style["right-side-mywork"]}>
          {right.map((index, x) => {
            return (
              <div key={index+10} className={m_style["project-box"]}>
                {exampleProject}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const projectBox = () => {
    return MyWork.length;
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
  console.log(123, divideMyworkOnTwoSides());
  return (
    <div className={style["main-page"]}>
      <TopBar />
      {extractMyWork()}
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
