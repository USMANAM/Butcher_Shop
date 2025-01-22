import express from "express";
import { getSubcategories } from "../controllers/productController.js";

const app = express.Router();

app.get("/getSubCats/:category", getSubcategories);

export default app;
