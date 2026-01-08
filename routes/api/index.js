import express from "express";
import assistantRouter from "./assistant.js";

const apiV1Router = express.Router();

// Assistant routes
apiV1Router.use("/assistant", assistantRouter);

// Base route for v1
apiV1Router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "VoiceAssist API v1",
    });
});

export default apiV1Router;
