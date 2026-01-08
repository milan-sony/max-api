const OpenAI = require("openai");
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function parseIntent(text) {
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `
                    Extract intent as JSON.
                    Allowed intents:
                    - set_alarm (time ISO string, label)
                    - get_time
                    - chat
                    Only return JSON.
                `
            },
            { role: "user", content: text }
        ]
    });

    return JSON.parse(response.choices[0].message.content);
}

module.exports = { parseIntent };
