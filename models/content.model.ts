import { model, models, Schema } from "mongoose";

const contentSchema = new Schema(
  {
    name: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["reels", "social", "web"],
      default: "social",
    },
  },
  { timestamps: true }
);

const Content = models.Content || model("Content", contentSchema);

export default Content;
