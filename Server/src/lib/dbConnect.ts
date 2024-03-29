import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "Compiler",
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
