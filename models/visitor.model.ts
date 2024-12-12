import mongoose, { model, models } from "mongoose";

const VisitorSchema = new mongoose.Schema(
  {
    url: { type: String, required: true }, 
    page: { type: String, required: true },
    visitCount: { type: Number, default: 1 }, 
    timestamp: { type: Date, default: Date.now }, 
  },
  { timestamps: true }
);

const newVisitor = models.Visitor || model("Visitor", VisitorSchema);

export default newVisitor;
