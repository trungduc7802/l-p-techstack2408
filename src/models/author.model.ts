import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
  name: { type: String, required: true, index: true }, // Tạo chỉ mục
  birthdate: { type: Date, required: true }
});

export const Author = model("Author", AuthorSchema);
