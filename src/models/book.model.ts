import { Schema, model, Types } from "mongoose";

const BookSchema = new Schema({
  title: { type: String, required: true, index: true }, // Tạo chỉ mục
  author: { type: Types.ObjectId, ref: "Author", required: true },
  category: { type: Types.ObjectId, ref: "Category", required: true },
  publishedDate: { type: Date, required: true }
});

export const Book = model("Book", BookSchema);
