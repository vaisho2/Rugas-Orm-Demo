// Global Error Handling Middleware
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    // returning json response with error
    res.status(500).json({ message: err.message });
  };
  