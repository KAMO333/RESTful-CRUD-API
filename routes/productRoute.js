const express = require("express");

const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Fetch all products from database
router.get("/", getProducts);

// Fetch a product from database using its ID
router.get("/:id", getProduct);

// Place a product in database
router.post("/", createProduct);

// Update a product
router.put("/:id", updateProduct);

// Delete a product from database
router.delete("/:id", deleteProduct);

module.exports = router;
