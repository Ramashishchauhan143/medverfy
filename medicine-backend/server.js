const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/medicine", async (req, res) => {
    try {
        let name = req.query.name;

        if (!name) {
            return res.json({ success: false, error: "Please provide a medicine name" });
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
        console.log(error);
        return res.json({
            success: false,
            error: "Medicine not found or API error"
        });
    }
});

app.listen(5000, () => {
    console.log("Backend API running on http://localhost:5000");
});
