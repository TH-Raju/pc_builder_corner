import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect("mongodb+srv://pcbuilder:T3c3LOMXut8IdWr9@cluster0.dgoei.mongodb.net/pc-builder?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default dbConnect;
