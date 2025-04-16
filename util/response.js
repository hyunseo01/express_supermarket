const success = (res, status, message, data) => {
  res.status(status).json({
    status: "success",
    message,
    data,
  });
};
const fail = (res, status, message) => {
  res.status(status).json({
    status: "error",
    message,
  });
};

module.exports = { success, fail };
