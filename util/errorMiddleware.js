// This middleware handles uncaught errors in other routes/middleware. This
// function should be the final middleware added to the express app. Call next
// when handling unexpected errors in routes to have this middleware handle the
// error.
const errorMiddleware = (err, req, res) => {
  // Don't leak unexpected error messages to client in production.
  if (process.env.NODE_ENV === "production") {
    return res.status(500).json({ message: "Fiddlesticks" });
  }

  // Log errors and provide helpful messages to client in development.
  console.error(err);
  res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
