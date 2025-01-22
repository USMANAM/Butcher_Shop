import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    category: {
      type: String,
    },
    subcategories: [{ name: String }],
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.models.Product || model("Product", productSchema);
