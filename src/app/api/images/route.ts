import { NextRequest, NextResponse } from "next/server";
//import { useRouter } from 'next/router'
import path from "path";
import fs from "fs";
interface QueryResponseTypes {
  available: Boolean;
  everyotherimage?: string[];
}
export async function GET(req: NextRequest) {
  const queryParam = req.nextUrl.searchParams.get("project");
  const directoryPath = path.join(process.cwd() + "/public/images/my_work");
  const filesInDirectoryAsArray = fs.readdirSync(directoryPath);
  let imageQueryResponse: QueryResponseTypes = {
    available: false,
  };
  if (queryParam) {
    imageQueryResponse.available = filesInDirectoryAsArray.includes(queryParam);
    if (imageQueryResponse.available) {
      const nestedDirectoryPath = path.join(
        process.cwd() + "/public/images/my_work/" + queryParam + "/everyotherimage"
      );
      imageQueryResponse.everyotherimage =fs.readdirSync(nestedDirectoryPath)
    }
  }
  //console.log(directoryPath,"quer",queryParam)
  //console.log(files)
  return NextResponse.json(imageQueryResponse);
}
