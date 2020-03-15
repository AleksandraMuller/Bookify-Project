import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

import { User } from "./models/User";
import { Review } from "./models/Review";
import { Like } from "./models/Like";

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
// const authenticateUser = async (req, res, next) => {
//   try {
//     const user = await User.findOne({
//       accessToken: req.header("Authorization")
//     });
//     if (user) {
//       req.user = user;
//       next();
//     } else {
//       res.status(401).json({ loggedIn: false });
//     }
//   } catch (err) {
//     res
//       .status(403)
//       .json({ message: "Access token missing or invalid", errors: err.errors });
//   }
// };

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

// app.get("/secrets", authenticateUser);
// app.get("/secrets", (req, res) => {
//   res.json({ secret: "this is the secret" });
// });

// SHOW COMMENTS
app.get("/profile", async (req, res) => {
  const username = req.query.username;
  console.log(username);
  Review.find({ authorName: username }, (err, reviews) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "Not found" });
    } else {
      res.json(reviews);
    }
  }).sort({ createdAt: "desc" });
});

app.get("/review", async (req, res) => {
  const bookId = req.query.bookId;
  // console.log(bookId);
  Review.find({ id: bookId }, (err, reviews) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "Not found" });
    } else {
      res.json(reviews);
      // console.log(reviews);
    }
  }).sort({ createdAt: "desc" });
});

app.get("/like", async (req, res) => {
  const username = req.query.username;
  Like.find({ username: username }, (err, reviews) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "Not found" });
    } else {
      res.json(reviews);
    }
  }).sort({ createdAt: "desc" });
});

// ADD BOOK + the COMMENT
app.post("/review", async (req, res) => {
  try {
    const review = new Review({
      review: req.body.review,
      id: req.body.id,
      bookId: req.body.bookId,
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      authorName: req.body.authorName
    });
    await review.save();
    res.json(review);
  } catch (err) {
    res
      .status(400)
      .json({ errors: err.errors, comment: "Cannot add new comment" });
  }
});

//DELETE ONE REVIEW
app.delete("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  try {
    const remove = await Review.findByIdAndDelete(reviewId);
    remove.save();
    res.status(201).json(remove);
  } catch (err) {
    res.status(400).json({
      message: "Cannot delete",
      errors: err.errors
    });
  }
});

//ADD TO FAVOURITES
app.post("/like", async (req, res) => {
  try {
    const like = new Like({
      id: req.body.id,
      title: req.body.title,
      authors: req.body.authors,
      username: req.body.username,
      image: req.body.image,
      buy: req.body.buy
    });
    await like.save();
    res.json(like);
  } catch (err) {
    res
      .status(400)
      .json({ errors: err.errors, comment: "Cannot add new like" });
  }
});

//DELETE From FAVOURITES
app.delete("/fav/:favId", async (req, res) => {
  const { favId } = req.params;

  await Like.findByIdAndDelete(favId, (err, favs) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "Not deleted" });
    } else {
      res.json(favs);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
