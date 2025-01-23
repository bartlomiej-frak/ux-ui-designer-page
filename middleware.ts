import { NextRequest, NextResponse } from "next/server";

//TODO: provide middleware with config
export default function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
