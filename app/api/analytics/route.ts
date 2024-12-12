import { connectToDatabase } from "@/lib/dbConnection";
import newVisitor from "@/models/visitor.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  connectToDatabase();
  try {
    const totalVisitors = await newVisitor.aggregate([
      {
        $group: {
          _id: null,
          totalVisitCount: { $sum: "$visitCount" },
        },
      },
    ]);

    const mostVisitedPage = await newVisitor.aggregate([
      { $group: { _id: "$page", visitCount: { $sum: "$visitCount" } } },
      { $sort: { visitCount: -1 } },
      { $limit: 1 },
    ]);

    const totalVisitsPerPage = await newVisitor.aggregate([
      {
        $group: {
          _id: "$page",
          totalVisitCount: { $sum: "$visitCount" },
        },
      },
    ]);

    const lastVisitor = await newVisitor.findOne().sort({ timestamp: -1 });

    return NextResponse.json({
      totalVisitors:
        totalVisitors.length > 0 ? totalVisitors[0].totalVisitCount : 0,
      mostVisitedPage: mostVisitedPage[0] || null,
      totalVisitsPerPage,
      lastVisitor: lastVisitor || null,
    });
  } catch (error) {
    console.error("Error fetching visitors:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
