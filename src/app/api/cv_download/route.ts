
import path from 'path';
import fs from 'fs';

// export an async GET function. This is a convention in NextJS
export async function GET() {

  const directoryPath = path.join(process.cwd()+ "/public/personal_data");
  const files = fs.readdirSync(directoryPath);
  console.log(files.includes("test_cv.pdf"));
  let cvUrl;
if(files.includes("my_cv.pdf")){
  cvUrl = fs.readFileSync(path.join(process.cwd(), `./public/personal_data/my_cv.pdf`));
}else if(files.includes("test_cv.pdf")){
  cvUrl = fs.readFileSync(path.join(process.cwd(), `./public/personal_data/test_cv.pdf`));
}
  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(cvUrl);
}
