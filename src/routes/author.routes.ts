import { Router } from "express";
import { Author } from "../models/author.model";

const router = Router();

// Lấy danh sách tác giả
router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});

// Thêm tác giả mới
router.post("/", async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.status(201).json(author);
});

export default router;
