import { NextResponse } from 'next/server'
let myWork: any;
try {
  // Attempt to import the main profile component
  myWork = require("@pub/personal_data/my-work").MyWork;
} catch (error) {
  // If the main profile component is missing, import the default_profile component
  myWork = require("@pub/personal_data/my_work_default").MyWork;
}
export async function GET() {
    return NextResponse.json(myWork)
}