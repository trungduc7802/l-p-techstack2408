import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authorRoutes from "./routes/author.routes";
import categoryRoutes from "./routes/category.routes";
import bookRoutes from "./routes/book.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/library")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Định tuyến API
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/books", bookRoutes);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
