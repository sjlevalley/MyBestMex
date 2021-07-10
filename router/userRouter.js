const { User } = require("../models");
const { omit } = require("lodash");

const userRouter = require("express").Router();

// Helper function takes user document and returns user object to attach to the
// session.
const createSessionUser = (user) => omit(user.toJSON(), ["password", "__v"]);

userRouter.get("/", async (req, res, next) => {
  try {
    if (!req.session?.user) {
      return res.status(401).json({ message: "Must be logged in." });
    }
    res.json(req.session.user);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({ username, email, password });
    await user.save();

    // avoid leaking password to client and initialize the session
    req.session.user = createSessionUser(user);
    res.json(req.session.user);
  } catch (error) {
    // check for duplicate error
    const DUPLICATE_ENTRY_CODE = 11000;
    if (error.code === DUPLICATE_ENTRY_CODE && error.keyPattern?.username) {
      return res.status(400).json({ message: "Username already exists." });
    }
    if ((error.code = DUPLICATE_ENTRY_CODE && error.keyPattern?.email)) {
      return res.status(400).json({ message: "E-mail already exists." });
    }
    next(error);
  }
});

userRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isUserAuthentic = user && (await user.checkPassword(password));
    if (isUserAuthentic) {
      req.session.user = createSessionUser(user);
      return res.json(req.session.user);
    }
    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/logout", async (req, res, next) => {
  try {
    if (!req.session.user) {
      return res.status(422).json({ message: "Cannot comply" });
    }
    req.session.destroy((err) => {
      if (err) return next(err);
      res.end();
    });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
