import mongoose from "mongoose";

export const reviewsSchema = mongoose.Schema({
  id: { type: String },
  title: { type: String },
  authors: { type: Array },
  description: { type: String }, //not necessary
  review: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  authorName: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Review = mongoose.model("Review", reviewsSchema);
