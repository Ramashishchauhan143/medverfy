const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const Groq = require("groq-sdk");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const formatMedicine = require("./utils/formatMedicine");

// ======================
// GROQ CONFIG
// ======================

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ======================
// HEALTH CHECK
// ======================

app.get("/", (req, res) => {
  res.send("Medicine Backend API is running");
});

// ======================
// MEDICINE SEARCH API
// ======================

app.get("/medicine", async (req, res) => {
  try {
    let name = req.query.name;

    if (!name) {
      return res.json({
        success: false,
        error: "Please provide a medicine name",
      });
    }

    name = name.toLowerCase().trim();

    if (name === "paracetamol") {
      name = "acetaminophen";
    }

    const labelUrl =
      `https://api.fda.gov/drug/label.json?search=openfda.generic_name:"${name}"&limit=1`;

    const eventUrl =
      `https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:"${name}"&limit=5`;

    const recallUrl =
      `https://api.fda.gov/drug/enforcement.json?search=product_description:"${name}"&limit=3`;

    const [labelRes, eventRes, recallRes] =
      await Promise.all([
        axios.get(labelUrl),
        axios.get(eventUrl).catch(() => null),
        axios.get(recallUrl).catch(() => null),
      ]);

    if (
      !labelRes?.data?.results ||
      labelRes.data.results.length === 0
    ) {
      return res.json({
        success: false,
        error: "Medicine not found",
      });
    }

    const medicine =
      labelRes.data.results[0];

    const formattedData =
      formatMedicine(
        medicine,
        eventRes?.data?.results || [],
        recallRes?.data?.results || []
      );

    return res.json({
      success: true,
      data: formattedData,
    });

  } catch (error) {
    console.log(error.message);

    return res.json({
      success: false,
      error: "Medicine not found or API error",
    });
  }
});

// ======================
// AI CHATBOT API
// ======================

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Message is required",
      });
    }

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `
You are MedVerify AI Assistant.

You help users understand medicines, side effects, dosage, warnings, recalls and safety information.

Keep answers:
- Simple
- Accurate
- Beginner friendly
- Short unless user asks details
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],

        model: "llama-3.3-70b-versatile",
      });

    const reply =
      completion.choices[0].message.content;

    res.json({
      reply,
    });

  } catch (error) {
    console.log("========== GROQ ERROR ==========");
    console.log(error);
    console.log("===============================");

    res.status(500).json({
      reply:
        "Sorry, AI service is unavailable right now.",
    });
  }
});

// ======================
// SERVER START
// ======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Backend API running on port ${PORT}`
  );
});