const mongoose = require("mongoose");

const AlarmSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true
    },
    label: {
        type: String,
        default: "Alarm"
    },
    done: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("Alarm", AlarmSchema);
