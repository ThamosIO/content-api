// Keep the vars unused, the error handler in express is the middleware with 4 parameters
function errorHandler(err, req, res, next) {
  if (!err || !err.status) {
    return res.status(500).send({
      status: 500,
      message: 'Internal server error',
    });
  }

  res.status(err.status).send({
    status: err.status,
    message: err.message,
  });
}

module.exports = errorHandler;
