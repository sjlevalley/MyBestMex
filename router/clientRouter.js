const path = require("path");
const express = require("express");

const clientRouter = express.Router();

// Serve up static assets
clientRouter.use(express.static(path.join(__dirname, "../client/build")));

// Send every request to the React app
// Define any API routes before this runs!
clientRouter.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = clientRouter;
