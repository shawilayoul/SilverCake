import express from "express";
import cors from "cors";
import menuRout from "./routes/menu.js"
import dbConnect from "./dbConnect/db.js";

const app = express();
dbConnect()
app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRout);

app.listen(8000, () => console.log("server is listing to port 8000"));
