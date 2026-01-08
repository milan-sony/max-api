import express from "express";
import { voiceInput } from "../../controllers/assistantVoiceController.js";

const assistantRouter = express.Router();

assistantRouter.post("/", voiceInput);

export default assistantRouter;
