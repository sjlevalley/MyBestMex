const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  shopId: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    ref: "User",
    required: true,
    trim: true,
    minLength: 2,
  },
  text: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
