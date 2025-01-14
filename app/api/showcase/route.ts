import { IShowcaseFields } from "@/lib/@types/generated/contentful";
import { fetchContent } from "@/lib/contentful";
import { NextResponse } from "next/server";

export async function GET() {
  const showcase = await fetchContent<IShowcaseFields>("showcase");
  return NextResponse.json(showcase);
}
