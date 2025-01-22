import mongoose from "mongoose";
import { Product } from "../models/Product.js";
import products from "../sample_data/products.json" assert { type: "json" };
import { connectDb } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const mongoUrl = process.env.MONGO_URI;

connectDb(mongoUrl);

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Product data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedProducts();
