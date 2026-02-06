const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// health check
app.get("/", (req, res) => {
    res.send("Medicine Backend API is running");
});

// medicine API
app.get("/medicine", async (req, res) => {
    try {
        let name = req.query.name;

        if (!name) {
            return res.json({
                success: false,
                error: "Please provide a medicine name"
            });
        }

        if (name.toLowerCase() === "paracetamol") {
            name = "acetaminophen";
        }

        const url = `https://api.fda.gov/drug/label.json?search=openfda.generic_name:"${name}"&limit=1`;

        const response = await axios.get(url);

        return res.json({
            success: true,
            data: response.data.results[0]
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            error: "Medicine not found or API error"
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});
