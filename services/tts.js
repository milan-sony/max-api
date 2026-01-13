import fs from "fs";

export default async function textToSpeech(text) {
    console.log("\n🔊 TTS:", text);

    return fs.readFileSync("sample.wav");
}