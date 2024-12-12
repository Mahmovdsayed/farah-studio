import { connectToDatabase } from "@/lib/dbConnection";
import Content from "@/models/content.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();

    const projects = await Content.find({});

    return NextResponse.json({
      success: true,
      TotalProjects: projects.length,
      web: projects.filter((project) => project.type === "web"),
      reels: projects.filter((project) => project.type === "reels"),
      social: projects.filter((project) => project.type === "social"),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
