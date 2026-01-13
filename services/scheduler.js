const cron = require("node-cron");
const dayjs = require("dayjs");
const Alarm = require("../models/Alarm");

function scheduleAlarm(alarm) {
    const date = dayjs(alarm.time);

    const cronExpr = `${date.minute()} ${date.hour()} ${date.date()} ${date.month() + 1} *`;

    cron.schedule(cronExpr, async () => {
        console.log(`⏰ ALARM: ${alarm.label}`);

        await Alarm.findByIdAndUpdate(alarm._id, { done: true });
    });
}

async function loadPendingAlarms() {
    const alarms = await Alarm.find({ done: false });
    alarms.forEach(scheduleAlarm);
}

module.exports = { scheduleAlarm, loadPendingAlarms };
