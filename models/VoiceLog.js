import mongoose from "mongoose";

const VoiceLogSchema = new mongoose.Schema({
    filename: String,
    path: String,
    mimeType: String,
    size: Number,
    transcript: String,
    source: {
        type: String,
        enum: ["web", "esp32"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("VoiceLog", VoiceLogSchema);
