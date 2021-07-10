// require("dotenv").config();
// const db = require("../models");
// const connectDb = require("../config/connectDb");
// const users = require("./users.json");

// connectDb()
//     .then(() => db.User.deleteMany({}))
//     .then(() => db.User.create(users))
//     .catch(console.error)
//     .finally(() => process.exit());


require("dotenv").config();
const db = require("../models");
const connectDb = require("../config/connectDb");
const tacoshops = require("./tacoshops.json");

connectDb()
  .then(() => db.TacoShop.deleteMany({}))
  .then(() => db.TacoShop.create(tacoshops))
  .catch(console.error)
  .finally(() => process.exit());
