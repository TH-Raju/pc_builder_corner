import ErrorHandler from "../../utils/errorHandler";
import Category from "../models/category";
export const getCategories = async (req, res, next) => {
  try {
    const category = await Category.find({});

    if (!category) {
      return next(new ErrorHandler("category not found.", 404));
    }

    res.status(200).json({
      category,
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getCategory = async (req, res, next) => {
  try {
    const id = req.query.id;

    const category = await Category.findOne({ _id: id });

    if (!category) {
      return next(new ErrorHandler("Category not found.", 404));
    }

    res.status(200).json({
      category,
    });
  } catch (error) {
    console.error("Error fetching Category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCategoryProductDetails = async (req, res, next) => {
  try {
    const productId = req.query.id;
    console.log(productId, "Product ID");

    const category = await Category.findOne({ "products.id": productId });
    console.log(category, "Category");

    if (!category) {
      return next(new ErrorHandler("Category not found.", 404));
    }

    if (!category.products || category.products.length === 0) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    const product = category.products.find(
      (product) => product.id.toString() === productId
    );

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Error fetching Product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
