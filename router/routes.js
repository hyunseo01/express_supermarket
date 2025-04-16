const express = require("express");
const router = express.Router();
const success = require("../util/response").success;
const productService = require("../service/productService");
const { fail } = require("../util/response");
const { existor } = require("../middleware/existor");
const { validatorProductInput } = require("../middleware/validator");

router.get("/products", async (req, res) => {
  const products = await productService.getProducts();
  success(res, 200, "제품 전체 출력", products);
});

router.get("/products/:id", existor, async (req, res) => {
  // const { id } = req.params;
  // const product = await productService.getProductById(+id);
  // if (!product) {
  //   return fail(res, 404, `${id} 제품 없음`);
  // }
  success(res, 200, `${id}제품 출력`, product);
});

router.post("/products", validatorProductInput, async (req, res) => {
  const { name, price } = req.body;
  const product = await productService.createProduct({
    name,
    price,
  });
  success(res, 201, `${name} 제품 생성`, product);
});

router.put("/products/:id", existor, async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const data = { name, price };
  const product = await productService.updateProduct(+id, data);
  // if (!product) {
  //   return fail(res, 404, `${id} 제품 없음`);
  // }
  success(res, 200, `${id} 제품 수정`, product);
});

router.delete("/products/:id", existor, async (req, res) => {
  const { id } = req.params;
  const product = await productService.deleteProduct(+id);
  // if (!product) {
  //   return fail(res, 404, `${id} 제품 없음`);
  // }
  success(res, 200, `${id} 제품 삭제`, product);
});

module.exports = { router };
