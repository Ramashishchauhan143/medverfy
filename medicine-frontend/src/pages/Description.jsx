import React from "react";
import MedImage from "../assets/medimage.jpg";
import MedVideo from "../assets/medvideo.mp4";

function Description() {
  return (
    <div
      style={{
        padding: "50px 20px",
        fontFamily: "Arial",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* 🔥 HERO SECTION */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "40px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          💊 MedVerify Platform
        </h1>

        <p style={{ maxWidth: "700px", margin: "0 auto", color: "#e2e8f0" }}>
          A smart medicine verification system that helps you access trusted,
          official drug information instantly.
        </p>
      </div>

      {/* 🔥 MEDIA SECTION */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        {/* Image */}
        <div
          style={{
            flex: "1 1 400px",
            textAlign: "center",
          }}
        >
          <img
            src={MedImage}
            alt="Medicine"
            style={{
              maxWidth: "100%",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        </div>

        {/* Video */}
        <div
          style={{
            flex: "1 1 400px",
            textAlign: "center",
          }}
        >
          <video
            width="100%"
            controls
            style={{
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <source src={MedVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* 🔥 PURPOSE + INFO CARD */}
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#0f172a" }}>
          🎯 Purpose of this Website
        </h2>

        <p style={{ lineHeight: "1.7", color: "#334155" }}>
          This platform helps users understand medicines, their usage, side
          effects, warnings, dosage, and manufacturer details using verified
          sources. It ensures safer and smarter healthcare decisions.
        </p>

        {/* 🔥 FEATURES */}
        <h2 style={{ marginTop: "30px", marginBottom: "15px" }}>
          🚀 What You Get
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          {[
            "🔍 Medicine Search",
            "📊 Risk Analysis",
            "⚠️ Side Effects Info",
            "🚨 Recall Alerts",
            "🤖 Chatbot Support",
            "📤 Share Feature",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "12px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* 🔥 MEDICINE LIST */}
        <h2 style={{ marginTop: "30px", marginBottom: "15px" }}>
          💊 Available Medicines
        </h2>

        <ul style={{ lineHeight: "1.8", color: "#1e293b" }}>
          <li>Paracetamol</li>
          <li>Ibuprofen</li>
          <li>Amoxicillin</li>
          <li>Azithromycin</li>
          <li>Doxycycline</li>
          <li>Metformin</li>
          <li>Omeprazole</li>
          <li>Ciprofloxacin</li>
        </ul>

        {/* 🔥 BACK BUTTON */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#2563eb",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "#2563eb")
            }
          >
            ⬅ Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Description;