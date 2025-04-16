const productService = require("../service/productService");
const { fail } = require("../util/response");

const existor = async (req, res, next) => {
  const { id } = req.params;
  const product = await productService.getProductById(+id);
  if (!product) {
    return fail(res, 404, `${id} 제품 없음`);
  }
  req.product = product;
  next();
};

module.exports = { existor };
