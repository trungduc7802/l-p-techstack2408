import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true, index: true } // Tạo chỉ mục
});

export const Category = model("Category", CategorySchema);
