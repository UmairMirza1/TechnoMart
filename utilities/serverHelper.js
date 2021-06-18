const response = (res, status, success, message, payload) => {
  return res.status(status).json({
    success: success,
    message: message,
    payload: payload,
  });
};

module.exports = { response };
