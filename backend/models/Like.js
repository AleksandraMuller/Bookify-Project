import mongoose from "mongoose";

export const likeSchema = mongoose.Schema({
  title: { type: String },
  authors: { type: Array },
  image: { type: String },
  buy: { type: String },
  username: { type: String },
  like: { type: Number },
  favourite: { type: Boolean },
  id: { type: String }
});

export const Like = mongoose.model("Like", likeSchema);
