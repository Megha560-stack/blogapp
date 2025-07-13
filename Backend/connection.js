const mongoose = require("mongoose");

const uri = "mongodb+srv://megha:megha333@cluster0.tnk61kk.mongodb.net/blogapp?retryWrites=true&w=majority";

console.log("🧪 Attempting to connect to MongoDB...");

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  });