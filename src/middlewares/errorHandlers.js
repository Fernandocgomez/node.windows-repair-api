exports.errorHandler = (req, res, next) => {
  const error = new Error("Route Not found");
  error.status = 404;
  next(error);
};

exports.errorHandlerShowMessage = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};
