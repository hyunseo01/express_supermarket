const { fail } = require("../util/response");

const validatorProductInput = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== "string") {
    return fail(res, 400, "유효하지 않은 name 값");
  }

  if (!price || typeof price !== "number" || price <= 0) {
    return fail(res, 400, "유효하지 않은 price 값");
  }

  next();
};

module.exports = { validatorProductInput };
