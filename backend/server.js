import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

import { User } from "./models/User";
import { Comment } from "./models/Comment";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/bookify";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

//FUNCTION authenticateUser
const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header("Authorization")
    });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ loggedIn: false });
    }
  } catch (err) {
    res
      .status(403)
      .json({ message: "Access token missing or invalid", errors: err.errors });
  }
};

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Bookify Project");
});

//REGISTRATION OF USERS
app.post("/users", async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const user = new User({ name, email, password: bcrypt.hashSync(password) });
    await user.save();
    res
      .status(201)
      .json({ id: user._id, accessToken: user.accessToken, name: user.name });
    console.log({ user });
  } catch (err) {
    res.status(400).json({
      message: "Could not create user. Please try again!",
      errors: err.errors
    });
  }
});

//LOGIN USER
app.post("/sessions", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.status(201).json({
      userId: user._id,
      accessToken: user.accessToken,
      name: user.name,
      loggedIn: true
    });
  } else {
    res.status(403).json({ message: "User not found, access forbidden" });
  }
});

//SECRETS

//Autorization for the super secret  message, only available for authenticated users

app.get("/secrets", authenticateUser);
app.get("/secrets", (req, res) => {
  res.json({ secret: "this is the secret" });
});

// SHOW COMMENTS
app.get("/comment", async (req, res) => {
  Comment.find((err, comments) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "Not found" });
    } else {
      res.json(comments);
    }
  });
});

// ADD BOOK + the COMMENT
app.post("/comment", async (req, res) => {
  // const { name } = req.body;
  // const user = User.findOne({ name });
  try {
    const comment = new Comment({
      comment: req.body.comment,
      id: req.body.id,
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description
    });
    await comment.save();
    res.json(comment);
  } catch (err) {
    res
      .status(400)
      .json({ errors: err.errors, comment: "Cannot add new comment" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
