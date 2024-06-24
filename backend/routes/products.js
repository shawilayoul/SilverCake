const express = require("express");

const {
  getAllProducts,
  deleteProducts,
  updateProducts,
} = require("../controllers/products.js");

const router = express.Router();

router.get("/getAll", getAllProducts);
router.delete("/delete/:_id", deleteProducts);
router.put("/update/:_id", updateProducts);

module.exports = router;
