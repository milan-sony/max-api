const express = require("express");
const Alarm = require("../../models/Alarm");

const router = express.Router();

router.get("/", async (req, res) => {
    const alarms = await Alarm.find().sort({ time: 1 });
    res.json(alarms);
});

router.delete("/:id", async (req, res) => {
    await Alarm.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;
