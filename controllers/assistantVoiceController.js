import fs from "fs"
import speechToText from "../services/stt.js";
import textToSpeech from "../services/tts.js";

import VoiceLog from "../models/VoiceLog.js";

export const voiceInput = async (req, res) => {

    try {
        const audioPath = req.file.path;

        console.log(`\nReceived audio file: ${audioPath}`);

        const text = await speechToText(audioPath);

        await VoiceLog.create({
            filename: req.file.filename,
            path: audioPath,
            mimeType: req.file.mimetype,
            size: req.file.size,
            transcript: text,
            source: "web"
        });

        console.log("\nTranscribed text:", text)

        // const intent = processIntent(text);

        let reply = "Okay";

        // if (intent.type === "recurring_reminder") {
        //     const reminder = await Alarm.create({
        //         type: "reminder",
        //         message: intent.message,
        //         intervalMinutes: intent.intervalMinutes
        //     });

        //     scheduleReminder(reminder);
        //     reply = "I will remind you every 30 minutes.";
        // }

        const audioResponse = await textToSpeech(reply);

        res.set("Content-Type", "audio/wav");
        res.send(audioResponse);

        // DELETE audio file after processing
        // fs.unlinkSync(audioPath);

    } catch (error) {
        console.error("Error processing voice input: ", error);
        return res.status(500).json({
            status: 500,
            message: "Internal server error"
        })
    }

}