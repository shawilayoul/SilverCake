import Menu from "../models/menuModel.js";
export const createMenu = async (req, res) => {
  try {
    const { imgURL , ...newroom}= req.body;
                            const {imgURL:image} =req.files
    image.mv("./uploads" + image.name)
    await newroom.save();
    res.status(201).json(newroom);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**geting all menu */
export const getAllMenu = async (req, res) => {
  try {
    const allMenu = await Menu.find();
    res.status(200).json(allMenu);
  } catch (error) {
    res.status(500).json(error);
  }
};
