import { Router } from "express";
import { Book } from "../models/book.model";

const router = Router();

// Lấy danh sách sách (bao gồm tác giả và thể loại)
router.get("/", async (req, res) => {
  const books = await Book.find().populate("author").populate("category");
  res.json(books);
});

// Thêm sách mới
router.post("/", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
});

export default router;
