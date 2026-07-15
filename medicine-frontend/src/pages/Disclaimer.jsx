import React from "react";
import { Link } from "react-router-dom";

function Disclaimer() {
  return (
    <div
      style={{
        padding: "50px 20px",
        fontFamily: "Arial",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* 🔥 HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "35px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #7f1d1d, #b91c1c)",
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: "2.3rem", marginBottom: "10px" }}>
          ⚠️ Disclaimer
        </h1>

        <p style={{ color: "#fecaca" }}>
          Please read carefully before using MedVerify
        </p>
      </div>

      {/* 🔥 MAIN CARD */}
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc, #fef2f2)",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          lineHeight: "1.7",
          color: "#1e293b",
        }}
      >
        {/* Section 1 */}
        <Section
          title="🩺 Medical Disclaimer"
          text="Do not rely solely on MedVerify or openFDA data to make medical decisions. Always consult a qualified healthcare provider regarding risks, benefits, and proper usage of medicines."
        />

        {/* Section 2 */}
        <Section
          title="🔐 Data & System Usage"
          text="This system may be monitored, recorded, and audited for security and lawful purposes. Any data transmitted or stored may be accessed by authorized authorities."
        />

        {/* Section 3 */}
        <Section
          title="⚖️ Legal Notice"
          text="Unauthorized use of this system is strictly prohibited and may result in legal action, including civil or criminal penalties."
        />

        {/* Section 4 */}
        <Section
          title="📡 API Usage Limitation"
          text="Access to external APIs such as openFDA may be restricted or limited as per their terms of service and usage policies."
        />

        {/* 🔙 BACK BUTTON */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#dc2626",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "#b91c1c")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "#dc2626")
            }
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

/* 🔥 Reusable Section Component */
function Section({ title, text }) {
  return (
    <div style={{ marginBottom: "25px" }}>
      <h3 style={{ marginBottom: "8px", color: "#7f1d1d" }}>
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
}

export default Disclaimer;