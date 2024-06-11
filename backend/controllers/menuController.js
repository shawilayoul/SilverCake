const Menu = require("../models/menuModel.js");
const createMenu = async (req, res) => {
  const { title, price, description} = req.body;
  const imagURL = req.file
  console.log(selectedFile)
  const newMenu = new Menu({
    title,
    price,
    description,
    selectedFile:imagURL,
  });

  try {
    await newMenu.save();
    res.status(201).json(newroom);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**geting all menu */
 const getAllMenu = async (req, res) => {
  try {
    const allMenu = await Menu.find();
    res.status(200).json(allMenu);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports= {
  getAllMenu,
  createMenu
}