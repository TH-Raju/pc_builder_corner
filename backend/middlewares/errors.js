/* eslint-disable import/no-anonymous-default-export */
export default (err, req, res, next) => {
  let error = { ...err };

  error.statusCode = err.statusCode || 500;
  error.message = err.message || "Internal Server Error";

  res.status(error.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
