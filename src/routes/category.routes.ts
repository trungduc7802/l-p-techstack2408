import { Router } from "express";
import { Category } from "../models/category.model";

const router = Router();

// Lấy danh sách thể loại
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Thêm thể loại mới
router.post("/", async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
});

export default router;
