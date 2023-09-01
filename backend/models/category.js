import mongoose from "mongoose";

// Define the schema for individual reviews
const reviewSchema = new mongoose.Schema({
  author: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

// Define the schema for individual products
const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  key_features: {
    Brand: { type: String, required: true },
    Model: { type: String, required: true },
    Specification: { type: String, required: true },
    Socket: { type: String, required: true },
    "Clock Speed": { type: String, required: true },
    TDP: { type: String, required: true },
  },
  individual_rating: { type: Number, required: true },
  average_rating: { type: Number, required: true },
  reviews: [reviewSchema], // An array of reviews based on reviewSchema
});

// Define the schema for the category
const categorySchema = new mongoose.Schema({
  categories_name: { type: String, required: true },
  image: { type: String, required: true },
  products: [productSchema], // An array of products based on productSchema
});

// Create the Mongoose model for the "CPU / Processor" category
export default mongoose.models.Categorie ||
  mongoose.model("Categorie", categorySchema);
