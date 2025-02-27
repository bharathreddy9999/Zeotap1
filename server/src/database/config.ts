import mongoose from "mongoose";

const connect = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI environment variable is not defined");
    }
    
    console.log("Attempting to connect to MongoDB with URI:", 
      mongoURI.replace(/\/\/([^:]+):([^@]+)@/, "//***:***@")); // Log URI with hidden credentials
    
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connect;
