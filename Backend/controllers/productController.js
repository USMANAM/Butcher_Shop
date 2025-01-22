import { Product } from "../models/Product.js";

const getSubcategories = async (req, res) => {
  try {
    const { category } = req.params;

    console.log("category ==>>", category);

    const result = await Product.aggregate([
      { $match: { category } },
      { $project: { _id: 0, subcategories: 1 } },
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(result[0].subcategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getSubcategories };
