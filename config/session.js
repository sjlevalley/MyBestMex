const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const { NODE_ENV, SESSION_SECRET, MONGODB_URI } = process.env;

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

store.on("error", (error) => console.error(error));

// export config for session middleware
module.exports = session({
  secret: SESSION_SECRET,
  cookie: {
    sameSite: true,
    // Don't use secure: true in development. Must use https with secure: true.
    secure: NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  },
  resave: false,
  saveUninitialized: false,
  store,
});
