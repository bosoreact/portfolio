import { NextResponse } from 'next/server'
import path from 'path';
import fs from 'fs';

export async function GET() {
  const directoryPath = path.join(process.cwd()+ "/public/images/my_work");
  const files = fs.readdirSync(directoryPath)
  console.log(directoryPath)
 console.log(files)
  return NextResponse.json({"test":files })
}