const express = require("express");

const {
  getAllProducts,
  deleteProducts,
  updateProducts,
  getProduct
} = require("../controllers/products.js");

const router = express.Router();

router.get("/getAll", getAllProducts);
router.get("/getProduct/:_id", getProduct);
router.delete("/delete/:_id", deleteProducts);
router.put("/update/:_id", updateProducts);

module.exports = router;
