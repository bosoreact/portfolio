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
  and 2/3 object to right-side-mywork. 
    */
   const extractMyWork = () => {
    
     
   }
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
  return (
    <div className={style["main-page"]}>
      <TopBar />
      <div className={m_style["box-wrapper"]}>
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
      </div>
      {projectBox()}
      <Afoota />
    </div>
  );
}
