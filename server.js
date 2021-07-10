require("dotenv").config();
const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const connectDb = require("./config/connectDb");
const session = require("./config/session");
const errorMiddleware = require("./util/errorMiddleware");
const checkEnv = require("./config/checkEnv");
const cors = require('cors')

checkEnv();

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await connectDb();
    console.log(`🔌 MongoDB Connected`);

    const app = express();

    // trust proxy required for using secure cookies on Heroku
    app.set("trust proxy", 1);
    app.use('/uploads/', express.static('uploads'));
    app.use('/shop/uploads/', express.static('uploads'));

    app.use(
      express.urlencoded({ extended: true }),
      express.json(),
      session,
      router,
      errorMiddleware
    );

    app.use(cors);

    mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/bestmexsd",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );

    app.listen(PORT, () => {
      console.log(`🌎 ==> Server listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error);
  }
})();
