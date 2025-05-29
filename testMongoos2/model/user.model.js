import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  contact: {
    type: Number,
    trim: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});

export const User = mongoose.model("user", userSchema);
