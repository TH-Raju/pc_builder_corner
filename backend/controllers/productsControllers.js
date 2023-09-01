import ErrorHandler from "../../utils/errorHandler";
import Product from "../models/products";

export const getProducts = async (req, res, next) => {
  try {
    const product = await Product.find({});

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getProduct = async (req, res, next) => {
  try {
    console.log(req.query.id);
    const product = await Product.findById(req.query.id);

    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }

    res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
