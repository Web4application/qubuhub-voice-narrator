import express from "express";
import dotenv from "dotenv";
import { synthesizeSpeech } from "./tts.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.post("/api/tts", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).send("Text is required");

    const audioContent = await synthesizeSpeech(text);

    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Length": audioContent.length,
      "Cache-Control": "no-cache"
    });
    res.send(audioContent);
  } catch (error) {
    console.error("TTS error:", error);
    res.status(500).send("Failed to synthesize speech");
  }
});

app.listen(PORT, () => {
  console.log(`TTS server running on port ${PORT}`);
});
