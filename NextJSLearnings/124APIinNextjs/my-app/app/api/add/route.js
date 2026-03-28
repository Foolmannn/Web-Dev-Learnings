// export async function GET(request) {}

import { NextResponse } from "next/server";

// export async function HEAD(request) {}

// export async function PUT(request) {}

// export async function DELETE(request) {}

// export async function PATCH(request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function POST(request) {
    //this is how to get the data from the page.js
    
  let data = await request.json();
  console.log(data);
//   return NextResponse.json({ success: true, data: "Yes " });

// this is how we can send the data 
  return NextResponse.json({ success: true, data: data });
}

// export async function OPTIONS(request) {}
