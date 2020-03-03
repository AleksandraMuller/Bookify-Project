import mongoose from "mongoose";
import crypto from "crypto";

export const User = mongoose.model("User", {
  name: {
    type: String,
    required: [true, "Please write your name"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Please provide your e-mail"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});
