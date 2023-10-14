import { useEffect, useState, useRef } from "react";
import ImagesCheck from "@/app/components/image_check";
import { useSearchParams } from "next/navigation";
import p_style from "@/app/mywork/project/project.module.css";

interface QueryResponseTypes {
  available: Boolean;
  everyotherimage?: string[];
}
export default function Project_Images() {
  const [apiresponse, setAPiresponse] = useState<QueryResponseTypes | {}>({});

  const searchParams = useSearchParams();
  useEffect(() => {
    const parameter = searchParams.get("name");
    fetch(`../api/images?project=${parameter}`)
      .then((res) => res.json())
      .then((data) => setAPiresponse(data));
  }, []);
  console.log(apiresponse);
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
  const imagesforProject = () => {
    if ("everyotherimage" in apiresponse) {
      console.log(apiresponse["everyotherimage"]);
      const AvailableImagesArray = apiresponse.everyotherimage;
      if (AvailableImagesArray) {
        return AvailableImagesArray.map((x) => {
          return (
            <div key={x} className={p_style["image-wrapper"]}>
              {ShowImage(
                `/images/my_work/${searchParams.get(
                  "name"
                )}/everyotherimage/${x}`
              )}
            </div>
          );
        });
      }
    }
    // return
  };
  return <div className={p_style["image-line"]}>{imagesforProject()}</div>;
}
