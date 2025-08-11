import textToSpeech from "@google-cloud/text-to-speech";

const client = new textToSpeech.TextToSpeechClient();

export async function synthesizeSpeech(text) {
  const request = {
    input: { text },
    voice: {
      languageCode: "en-US",
      name: "en-US-Neural2-J",
      ssmlGender: "NEUTRAL"
    },
    audioConfig: {
      audioEncoding: "MP3",
      speakingRate: 0.9,
      pitch: 2.0
    }
  };

  const [response] = await client.synthesizeSpeech(request);
  return response.audioContent;
}
