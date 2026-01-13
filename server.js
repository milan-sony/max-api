// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const connectDB = require("./db/mongoose");
// const assistantRoutes = require("./routes/assistant");
// const alarmRoutes = require("./routes/alarms");
// const { loadPendingAlarms } = require("./services/scheduler");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/assistant", assistantRoutes);
// app.use("/api/alarms", alarmRoutes);

// connectDB().then(loadPendingAlarms);

// app.listen(5000, () =>
//     console.log("🚀 Backend running on http://localhost:5000")
// );

import express from "express";
import cors from "cors";

import { connectDB } from "./configs/mongoDB.js";
import { baseRoute } from "./routes/index.js";

// Creates an express app
const app = express();

// Body parser
app.use(express.json());

// Connect DB
connectDB()

// Enable CORS
app.use(cors());

// Base URL
app.use("/", baseRoute)

app.listen((process.env.PORT || 5000), () => {
    console.log(`\n🚀 Server listening on port: ${process.env.PORT || 5000}`);
});