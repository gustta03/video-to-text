import mongoose from "mongoose";

const baseSchema = new mongoose.Schema({
  email: String,
  status: String,
  password: String,
});

export const User = mongoose.model("User", baseSchema);
