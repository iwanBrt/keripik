const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const app = express();
// Increase payload limit because base64 images can be somewhat large
app.use(express.json({ limit: '10mb' }));

// Serve all static files (like index.html, assets, css) from the current directory
app.use(express.static(__dirname));

// The API endpoint for the mood scanner
app.post('/api/mood', async (req, res) => {
    const { base64Image } = req.body;
    if (!base64Image) {
        return res.status(400).json({ error: 'Image data is required' });
    }

    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'API key is not configured in .env' });
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: "Analyze the facial expression in this image. Categorize the mood into one of these exact 5 categories: 'Senang', 'Marah', 'Santai', 'Cape', or 'Sedih'. Map it to the corresponding flavor category: Senang -> Manis, Marah -> Pedas, Santai -> Balado, Cape -> Pedas Manis, Sedih -> Extra Pedas. Respond ONLY with a valid JSON object matching this schema: {\"mood\": \"String\", \"kategori_rasa\": \"String\", \"alasan\": \"String (short explanation in Indonesian)\"}." },
                            { inline_data: { mime_type: "image/jpeg", data: base64Image } }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.4,
                    response_mime_type: "application/json"
                }
            })
        });

        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json(data);
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error('API Route Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n=========================================`);
    console.log(`✅ SERVER LOKAL BERHASIL JALAN!`);
    console.log(`✅ BUKA LINK INI DI BROWSER: http://localhost:${PORT}`);
    console.log(`=========================================\n`);
});
