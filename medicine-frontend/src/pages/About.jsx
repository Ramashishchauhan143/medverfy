import React from "react";

function About() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      {/* 🔥 Title */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "2.5rem",
          color: "#0f172a",
        }}
      >
        💊 About MedVerify
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Your trusted companion for medicine verification & safety
      </p>

      {/* 🔥 Glass Card */}
      <div
        style={{
          padding: "25px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          marginBottom: "25px",
        }}
      >
        <p style={{ lineHeight: "1.7", color: "#1e293b" }}>
          <strong>MedVerify</strong> is a modern medicine authentication platform
          that helps users verify medicines using trusted FDA data. It allows you
          to explore drug details like usage, warnings, dosage, and manufacturer
          information in seconds.
        </p>
      </div>

      {/* 🔥 Features Section */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#0f172a", marginBottom: "15px" }}>
          🚀 Key Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          {[
            "🔍 Smart Medicine Search",
            "📊 Risk Analysis System",
            "⚠️ Side Effects Detection",
            "🚨 Drug Recall Alerts",
            "🤖 AI Chatbot Support",
            "📤 Easy Social Sharing",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                borderRadius: "10px",
                background: "#ffffff",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Tech Stack */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#0f172a", marginBottom: "10px" }}>
          🛠️ Tech Stack
        </h2>

        <p style={{ color: "#334155", lineHeight: "1.6" }}>
          Built using <strong>React</strong>, <strong>React Router</strong>, and a
          custom <strong>Node.js + Express backend</strong>. The app fetches
          real-time data from official FDA APIs to ensure accuracy and
          reliability.
        </p>
      </div>

      {/* 🔥 Mission Section */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "12px",
          background: "#0f172a",
          color: "white",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>🎯 Our Mission</h3>
        <p style={{ lineHeight: "1.6" }}>
          To make medicine information accessible, transparent, and safe for
          everyone. We aim to reduce misinformation and help users make informed
          healthcare decisions.
        </p>
      </div>
    </div>
  );
}

export default About;