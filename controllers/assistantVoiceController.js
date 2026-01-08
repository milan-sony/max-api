// const express = require("express");
// const Alarm = require("../models/Alarm");
// const { parseIntent } = require("../services/gpt");
// const { scheduleAlarm } = require("../services/scheduler");

export const voiceInput = async (req, res) => {

    try {
        const { message } = req.body;

        console.log(`\nInput voice/text: ${message}`);

        // const intent = await parseIntent(message);

        // if (intent.type === "set_alarm") {
        //     const alarm = await Alarm.create({
        //         time: new Date(intent.time),
        //         label: intent.label || "Alarm"
        //     });

        //     scheduleAlarm(alarm);

        //     return res.json({
        //         reply: `Alarm set for ${new Date(intent.time).toLocaleString()}`
        //     });
        // }

        // if (intent.type === "get_time") {
        //     return res.json({ reply: new Date().toLocaleTimeString() });
        // }

        return res.status(200).json({
            status: 200,
            message: "Okay"
        })
    } catch (error) {
        console.error("Error processing voice input:", error);
        return res.status(500).json({
            status: 500,
            message: "Internal server error"
        })
    }

}