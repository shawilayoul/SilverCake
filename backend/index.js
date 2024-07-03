const express = require("express");
const multer = require("multer");
const dotenv = require('dotenv');
const cors = require("cors");
const { dbConnect } = require("./dbConnect/db.js");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const  Product  = require("./models/productsModel.js");


dotenv.config();


/*** uploading anfg image using multer */
//const storage = multer.memoryStorage()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const app = express();
dbConnect();
app.use(cors());
app.use(bodyparser.json({ limit: "16mb", extended: true })); // Make sure you add these two lines
app.use(bodyparser.urlencoded({ limit: "16mb", extended: true }));
app.use(morgan("common"));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/upload", upload.single("image"), (req, res) => {
  const {
    title,
    description,
    price,
    time,
    chef,
    category,
    allCategory,
    cuisine,
    count

  } = req.body;

  const newImage = new Product({
    title,
    description,
    price,
    time,
    chef,
    category,
    allCategory,
    cuisine,
    count,
    image: req.file.path,
  });
  newImage
    .save()
    .then(() =>
      res.status(201).json({ message: "Image uploaded successfully" })
    )
    .catch((err) => res.status(400).json({ error: err.message }));
});
// auter middleware
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/products", require("./routes/products"));

app.listen(8000, () => console.log("server is listing to port 8000"));
