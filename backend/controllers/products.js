
const  Product  = require("../models/productsModel.js");


// get product by id
const getProduct = async (req, res) => {
  try {
    const getAll = await Product.findById(req.params)
    res.status(200).json(getAll)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};
/***get all products */
const getAllProducts = async (req, res) => {
  try {
    const getAll = await Product.find()
    res.status(200).json(getAll)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};
/***delete products */
const deleteProducts = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params);
    res.status(200).json("product delted successfully");
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};
/***update products */
const updateProducts = async (req, res) => {
  const { title, description, price, image } = req.body;
  try {
    const update = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        price,
        image,
      },
      { new: true }
    );

    await update.save();
    res.status(201).json(update);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getAllProducts,
  deleteProducts,
  updateProducts,
  getProduct
};
