"use client";
import TopBar from "@/app/components/top-bar";
import Afoota from "@/app/components/afoota";
import style from "@/app/styles/main.module.css";
import p_style from "@/app/mywork/project/project.module.css";
import ImagesCheck from "@/app/components/image_check";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Project_Images from "./project_images";
import Link from "next/link";

interface learnedArrTypes  {
  [key: string]: string;
};
interface ProjectTypes {
  Brief?: string;
  Learned?: {
    [key: string]: string | string[];
  }[];
  Other_Tools_Used?: string[];
  repository: string;
}
type AvailableImagesTypes = string[] | [];
interface QueryResponseTypes {
  available: Boolean;
  everyotherimage?: string[];
}
/* n this component pictures and discription should be displayed dinamically
depending from the nested component
TODO
move into separate components
*/
export default function Project() {
  console.log("project_render");
  const [project, setProject] = useState<ProjectTypes>({ });

  const searchParams = useSearchParams();
  const trimStringUpToFristDot = (phrase: string | any) => {
    if (Object.keys(project).length > 0) {
      return phrase.slice(0, phrase.indexOf(".") + 1);
    }
  };
  useEffect(() => {
    fetch("../api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((x: ProjectTypes) => {
          return `${Object.keys(x)[0]}` == `${searchParams.get("name")}`;
        });
        const parameter = searchParams.get("name");
        if (parameter !== null) {
          console.log("use effect",filteredData[0][parameter])
          setProject(filteredData[0][parameter]);
        }
      });
  }, []);

  const ShowImage = (_source: string) => {
    return (
      <ImagesCheck
        source={_source}
        //image style for current component
        className={p_style["photo-style"]}
        defaultImage={"/images/main/default_images/project.png"}
      />
    );
  };
  const topImageDisplay = (
    <div key={"image1"} className={p_style["top-image-wrapper"]}>
      {ShowImage(`/images/main/default_images/project_background.png`)}
      <div className={p_style["absoulute-image"]}>
        {ShowImage(`/images/my_work/${searchParams.get("name")}/main.png`)}
      </div>
    </div>
  );

  const formatLearnedBox = () => {
    let newJsxArray = [];
    let cacheArray = [];
    let counter = 0;
    if (project.Learned !== undefined && project.Learned.length > 0) {
      let projectLearnedMirror = project.Learned;
      while (projectLearnedMirror.length > 0) {
        const x = projectLearnedMirror.shift();
        if (x) {
          counter++;
          if (Array.isArray(Object.values(x)[0])) {
            let nestedCachedArray: string[] = Object.values(x)[0] as string[];
            let nestedCounter = 0;
            while (nestedCachedArray.length > 0) {
              const y = nestedCachedArray.shift();
              if (nestedCounter === 0) {
                cacheArray.push(
                  <div
                    key={nestedCounter + "nest"}
                    className={p_style["description-box"]}
                  >
                    <h1>{Object.keys(x)[0]}</h1>
                    <p> {y}</p>
                  </div>
                );
              } else {
                cacheArray.push(
                  <div
                    key={nestedCounter + "nest"}
                    className={p_style["description-box"]}
                  >
                    <p> {y}</p>
                  </div>
                );
              }
              nestedCounter++;
            }
            newJsxArray.push(
              <div key={Object.keys(x)[0]} className={p_style["box-line"]}>
                {cacheArray}
              </div>
            );
            cacheArray = [];
            counter = 0;
          } else {
            cacheArray.push(
              <div
                key={Object.keys(x)[0]}
                className={p_style["description-box"]}
              >
                <h1>{Object.keys(x)[0]}</h1>
                <p> {Object.values(x)[0]}</p>
              </div>
            );
          }
          if (counter == 2) {
            newJsxArray.push(
              <div
                key={Object.keys(x)[0] + "box"}
                className={p_style["box-line"]}
              >
                {cacheArray.map((x) => x)}
              </div>
            );
            cacheArray = [];
            counter = 0;
          }
        }
      }
    }

    return newJsxArray.map((x) => x);
  };
  const repositoryLink =(<div className={p_style["repository"]}><Link href={`${project.repository}`}>{project.repository}</Link></div>)
  const pageBody = () => {
    const brief = Object.values(project)[0];
    if (project !== undefined && project !== null) {
      return (
        <div className={p_style["box-wrapper"]}>
          <div className={p_style["page-title"]}>
            <p>
              Project: &nbsp;
              {searchParams.get("name")}
            </p>
            <p>✴{brief}✴</p>
          </div>
          {topImageDisplay}
          {formatLearnedBox()}
          <Project_Images />
          {repositoryLink}
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
