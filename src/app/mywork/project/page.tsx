"use client";
import TopBar from "@/app/components/top-bar";
import Afoota from "@/app/components/afoota";
import style from "@/app/styles/main.module.css";
import p_style from "@/app/mywork/project/project.module.css";
import ImagesCheck from "@/app/components/image_check";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
//import { MyWorkItem } from "@pub/personal_data/my_work_default";


  
export interface ProjectData {
    Brief: string;
    Learned: { learned: string }[];
    Other_Tools_Used: string[];
  }
interface Projecttpes{
    key: ProjectData | {}
}
export default function Project() {
  const [project, setProject] = useState({});
  const searchParams = useSearchParams();
  const trimStringUpToFristDot = (phrase: string| any) => {
    if(Object.keys(project).length > 0){
        return phrase.slice(0, phrase.indexOf(".") + 1);
    }
  };
  useEffect(() => {
    const url = "@/api/portfolio";
    fetch("../api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const filteredData = data.filter((x: ProjectData) => {

          return `${Object.keys(x)[0]}` == `${searchParams.get("name")}`;
        });
        const parameter = searchParams.get("name");
        //console.log(filteredData[0][parameter])
        //if (parameter !== null) console.log(Object.keys(filteredData[0][parameter])[0]);
        if (parameter !== null) {
        setProject(
            filteredData[0][parameter]
        );
    }
        // }
      });
  }, []);
  console.log(project)
  const pageBody = () => {
    const brief = Object.values(project)[0]
    if (project !== undefined && project !== null) {
      return (
        <div className={p_style["box-wrapper"]}>
          <div className={p_style["page-title"]}>
            <p>
              Project: &nbsp;
              {searchParams.get("name")}
            </p>
            <p>✴{trimStringUpToFristDot(brief)}✴</p>
          </div>
          <div className={p_style["image"]}>image</div>
          <div className={p_style["box-line"]}>description</div>
          <div className={p_style["all-images"]}>allimages-1</div>
          <div className={p_style["box-line"]}>description</div>
          <div className={p_style["image"]}>last image</div>
          <div className={p_style["next-project"]}>next project button</div>
        </div>
      );
    }
  };
  return (
    <div className={style["main-page"]}>
      <TopBar />
      {pageBody()}
      <Afoota />
    </div>
  );
}
