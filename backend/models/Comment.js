import mongoose from "mongoose";

export const commentsSchema = mongoose.Schema({
  id: { type: String },
  title: { type: String },
  authors: { type: Array },
  description: { type: String },
  comment: { type: String },
  authorId: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    name: { type: String }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Comment = mongoose.model("Comment", commentsSchema);
