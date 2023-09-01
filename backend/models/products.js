import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  key_features: {
    Brand: { type: String, required: true },
    Model: { type: String, required: true },
    Capacity: { type: String, required: true },
    Interface: { type: String, required: true },
    "Read Speed": { type: String, required: true },
    "Write Speed": { type: String, required: true },
    "Form Factor": { type: String, required: true },
  },
  individual_rating: { type: Number, required: true },
  average_rating: { type: Number, required: true },
  reviews: [
    {
      author: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
});

// Create the SSD model
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
