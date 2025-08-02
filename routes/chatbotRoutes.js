import express from "express";
import { getChatPage, chatWithBot } from "../controllers/chatbotController.js";

const router = express.Router();

router.get("/chatbot", getChatPage);
router.post("/chatbot", chatWithBot);

export default router;
