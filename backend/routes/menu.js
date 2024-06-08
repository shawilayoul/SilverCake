import { getAllMenu, createMenu } from "../controllers/menuController.js";
import express from "express";

const router = express.Router();

router.post("/create", createMenu);
router.get("/getAllMenu", getAllMenu);

export default router;
