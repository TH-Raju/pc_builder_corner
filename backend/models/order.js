import mongoose from "mongoose";

const orderProductsSchema = new mongoose.Schema({
  orderProducts: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

export default mongoose.models.Order ||
  mongoose.model("Order", orderProductsSchema);
