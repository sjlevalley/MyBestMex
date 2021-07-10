const mongoose = require("mongoose");
const { isPhoneNum, isZip } = require("../util/validate");

const { Schema } = mongoose;

// Add additional fields to the user schema as needed for your app. Feel free to
// modify username, email, and password validations. email as part of the login
// credentials.
const TacoShopSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  reviews: [
    {
      type: String,
      trim: true,
    },
  ],
  imagePath:
  {
    type: String,
    trim: true,
  },
  menuURL:
  {
    type: String,
    trim: true,
  },
  rating: [
    {
      type: Number,
      trim: true,
    },
  ],
  description: {
    type: String,
    trim: true,
  },
  featuredFood: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: isPhoneNum,
      message: "Not a valid phone number",
    },
  },
  zip: {
    type: Number,
    required: true,
    trim: true,
    validate: {
      validator: isZip,
      message: "Not a valid zip code",
    },
  },
});

const TacoShop = mongoose.model("TacoShop", TacoShopSchema);

module.exports = TacoShop;
