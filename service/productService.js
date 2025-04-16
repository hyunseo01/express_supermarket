const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const productService = {
  async getProducts() {
    return await prisma.products.findMany();
  },
  async getProductById(id) {
    return await prisma.products.findUnique({
      where: { id },
    });
  },
  async createProduct(data) {
    return await prisma.products.create({
      data,
    });
  },
  async updateProduct(id, data) {
    return await prisma.products.update({
      where: { id },
      data,
    });
  },
  async deleteProduct(id) {
    return await prisma.products.delete({
      where: { id },
    });
  },
};
module.exports = productService;
