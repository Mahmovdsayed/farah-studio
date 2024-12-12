"use server";
import { connectToDatabase } from "@/lib/dbConnection";
import newVisitor from "@/models/visitor.model";

const Visitor = async (url: string, page: string) => {
  await connectToDatabase();
  try {
    const existingVisitor = await newVisitor.findOne({ page });

    if (existingVisitor) {
      existingVisitor.visitCount += 1;
      await existingVisitor.save();
      console.log(`Visitor visit count updated for: ${page}`);
    } else {
      await newVisitor.create({ url, page, visitCount: 1 });
      console.log(`Visitor added successfully: ${page}`);
    }
  } catch (error) {
    console.error("Error adding visitor:", error);
  }
};

interface VisitorData {
  totalVisitors: number;
  mostVisitedPage: { page: string; visitCount: number } | null;
  lastVisitedPage: { page: string; timestamp: Date } | null;
}

export const getVisitors = async (): Promise<VisitorData | null> => {
  await connectToDatabase();
  try {
    const totalVisitors = await newVisitor.countDocuments();

    const mostVisitedPage = await newVisitor.aggregate([
      { $group: { _id: "$page", visitCount: { $sum: "$visitCount" } } },
      { $sort: { visitCount: -1 } },
      { $limit: 1 },
    ]);

    const lastVisitedPage = await newVisitor.findOne().sort({ timestamp: -1 });

    return {
      totalVisitors,
      mostVisitedPage: mostVisitedPage[0] || null,
      lastVisitedPage: lastVisitedPage || null,
    };
  } catch (error) {
    console.log("Error fetching visitors:", error);
    return null;
  }
};

export default Visitor;
