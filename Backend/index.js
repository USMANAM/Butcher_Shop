import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config({
  path: "./.env",
});

const mongoUrl = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDb(mongoUrl);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
