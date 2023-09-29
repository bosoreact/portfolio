import Image from "next/image";
import { useState } from "react";

interface ImageComponentProps {
  source: string;
  className: string | undefined;
  defaultImage?: string;
}
export default function ImagesCheck({
  source,
  className,
  defaultImage = "/images/main/default_images/profile.png",
}: ImageComponentProps) {
  const [imgSrc, setImgSrc] = useState(source);

  return (
    <Image
      src={imgSrc}
      alt="Picture of the author"
      className={className}
      width={100}
      height={100}
      onError={() => setImgSrc(defaultImage)}
    />
  );
}
