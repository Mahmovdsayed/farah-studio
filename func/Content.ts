"use server";

import { connectToDatabase } from "@/lib/dbConnection";
import Content from "@/models/content.model";

const AddContent = async (url: string, type: string) => {
  await connectToDatabase();
  try {
    await Content.create({
      url,
      type,
    });
    return `${type} content added successfully`;
  } catch (error: any) {
    console.log(error);
    return `failed to add ${type} content`;
  }
};

export const deleteContent = async (id: string) => {
  await connectToDatabase();
  try {
    await Content.findByIdAndDelete(id);
    return "content deleted successfully";
  } catch (error: any) {
    console.log(error);
    return "failed to delete content";
  }
};

export default AddContent;
