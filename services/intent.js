function processIntent(text) {
    text = text.toLowerCase();

    if (text.includes("every 30")) {
        return {
            type: "recurring_reminder",
            message: "Drink water",
            intervalMinutes: 30
        };
    }

    return { type: "chat", reply: "Okay, noted." };
}

module.exports = processIntent;
