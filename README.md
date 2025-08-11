# QubuHub Cosmic Voice Narrator

This project delivers a next-level AI voice narration experience with cosmic glowing avatars and ambient soundscapes.

## Features
- Google Generative AI Text-to-Speech backend  
- React frontend with animated alien avatars and caption sync  
- Ambient synth background audio  
- Basic voice command system stub  
- Easy deployment with environment config

## Setup

### Backend

1. Copy `.env.example` to `.env` and add your Google service account JSON path.  
2. Run `npm install` and start with `node server.js`.  
3. Exposes `/api/tts` endpoint for generating speech audio.

### Frontend

1. Run `npm install` and start with `npm run dev` or `npm start`.  
2. Edit `.env` if needed to configure backend API URL.  
3. Loads captions and plays AI voice narration synced with animated avatar.

 install 
 `npm install framer-motion
  npm install node-fetch
 MORALIS_API_KEY=your_moralis_api_key_here
 ALCHEMY_API_KEY=your_alchemy_api_key_here
 npm install react-tsparticles`

---

Ready for launch! 🚀✨  
```bash
qubuhub-voice-narrator/
├── backend/
│   ├── tts.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AITTSPlayer.jsx
│   │   │   ├── SyncGlowingEyesAvatar.jsx
│   │   │   ├── CosmicNarrator.jsx
│   │   │   └── AmbientSynth.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── vite.config.js (or CRA setup)
├── .gitignore
└── README.md
