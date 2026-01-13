import express from "express";
import multer from "multer";

import { voiceInput } from "../../controllers/assistantVoiceController.js";
import VoiceLog from "../../models/VoiceLog.js";

const assistantRouter = express.Router();

const upload = multer({ dest: "uploads/" });

assistantRouter.post("/", upload.single("audio"), voiceInput);

assistantRouter.get("/:id", async (req, res) => {
    console.log(`\nFetching audio log with ID: ${req.params.id}`)
    const log = await VoiceLog.findById(req.params.id);
    res.sendFile(log.path, { root: "." });
});

export default assistantRouter;  