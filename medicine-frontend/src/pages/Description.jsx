import React from "react";
import { Link } from "react-router-dom";

function Description() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ color: "#0b5ed7" }}>About MedVerify</h1>

      <p style={{ fontSize: "1.1rem", marginTop: "20px" }}>
        <strong>MedVerify</strong> is a medicine information and verification
        platform designed to help users check medicine details quickly and
        safely.
      </p>

      <h2 style={{ marginTop: "30px" }}>🔹 What does this website do?</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li>✔ Verify medicine name and basic details</li>
        <li>✔ Show usage, category, and safety info</li>
        <li>✔ Help users avoid fake or wrong medicines</li>
        <li>✔ Provide fast medicine search using dropdown</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>💊 Available Medicines</h2>
      <p>
        This portal contains information about:
      </p>
      <ul style={{ lineHeight: "1.8" }}>
        <li>🟢 Generic medicines (Paracetamol, Amoxicillin, etc.)</li>
        <li>🔵 Branded medicines</li>
        <li>🟠 Common tablets, syrups, injections</li>
        <li>🟣 Pain relief, fever, infection, stomach & more</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>⚙ How it works</h2>
      <ol style={{ lineHeight: "1.8" }}>
        <li>Select a medicine from dropdown</li>
        <li>Website fetches data from backend API</li>
        <li>Medicine details are displayed instantly</li>
      </ol>

      <div style={{ marginTop: "40px" }}>
        <Link to="/" style={{
          textDecoration: "none",
          color: "white",
          background: "#0b5ed7",
          padding: "10px 20px",
          borderRadius: "6px"
        }}>
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Description;
