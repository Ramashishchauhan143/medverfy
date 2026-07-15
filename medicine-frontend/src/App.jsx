import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Description from "./pages/Description";
import About from "./pages/About"; 
import MedicineDropdownUI from "./components/MedicineUI";
import medicineList from "./components/medicineList";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import SocialShare from "./components/SocialShare";
import Chatbot from "./components/Chatbot";
import Gallery from "./pages/Gallery"; 
import Disclaimer from "./pages/Disclaimer"; 


function Home() {
  const [medicine, setMedicine] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [events, setEvents] = useState([]);
  const [recalls, setRecalls] = useState([]);
  const [medicine2, setMedicine2] = useState("");
  const [data2, setData2] = useState(null);
  const [events2, setEvents2] = useState([]);
  const [recalls2, setRecalls2] = useState([]);

  const getRiskLevel = () => {
    if (recalls.length > 0) return { label: "High Risk", color: "#dc2626" };
    if (events.length > 3) return { label: "Moderate", color: "#f59e0b" };
    return { label: "Safe", color: "#16a34a" };
  };

  const searchMedicine = async (name) => {
    if (!name) return;

    setLoading(true);
    setError("");
    setData(null);
    setEvents([]);

    try {
      const res = await fetch(
        `https://medverfy-backend.onrender.com/medicine?name=${name}`
      );
      const result = await res.json();

      if (result.success) {
        setData(result.data);
        setEvents(result.events || []);
        setRecalls(result.recalls || []);
      } else {
        setError("Medicine data not found");
      }
    } catch (err) {
      setError("API error");
    }

    setLoading(false);
  };

  const searchMedicine2 = async (name) => {
    if (!name) return;

    try {
      const res = await fetch(
        `https://medverfy-backend.onrender.com/medicine?name=${name}`
      );
      const result = await res.json();

      if (result.success) {
        setData2(result.data);
        setEvents2(result.events || []);
        setRecalls2(result.recalls || []);
      }
    } catch (err) {
      console.log("Second medicine error");
    }
  };

  return (
    <div>

     
      

      

      {/* 🔥 HERO */}
      <div style={{
        textAlign: "center",
        marginTop: "30px",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        borderRadius: "12px",
        maxWidth: "900px",
        marginInline: "auto",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ fontSize: "2.5rem" }}>Medicine Authentication</h1>
        <p style={{ color: "#e2e8f0" }}>
          Verify medicines and explore trusted drug information instantly.
        </p>
      </div>

      {/* 🔍 SEARCH */}
      <div style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #e0f2fe, #f8fafc)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center" }}>🔍 Search Medicine</h2>

        <MedicineDropdownUI
          medicines={medicineList}
          onSelect={(value) => {
            setMedicine(value);
            searchMedicine(value);
          }}
        />
      </div>

      {loading && (
        <p style={{ textAlign: "center" }}>Loading medicine data...</p>
      )}

      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

      {/* 🔥 RESULT */}
      {data && (
        <div style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "30px",
          borderRadius: "16px",
          background: "#ffffff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}>

          {/* Image */}
          <img
            src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/20516/300-PA1050804.jpg"
            style={{
              width: "100%",
              maxHeight: "250px",
              objectFit: "contain",
              borderRadius: "10px"
            }}
          />

          {/* Compare */}
          {data && data2 && (
            <div style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px"
            }}>
              <div style={{
                flex: 1,
                padding: "20px",
                background: "#f1f5f9",
                borderRadius: "10px"
              }}>
                <h3>{data.openfda?.brand_name?.[0]}</h3>
                <p>{data.openfda?.generic_name?.[0]}</p>
              </div>

              <div style={{
                flex: 1,
                padding: "20px",
                background: "#e2e8f0",
                borderRadius: "10px"
              }}>
                <h3>{data2.openfda?.brand_name?.[0]}</h3>
                <p>{data2.openfda?.generic_name?.[0]}</p>
              </div>
            </div>
          )}

          {/* Name */}
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            {data.openfda?.brand_name?.[0] || "N/A"}
          </h2>

          {/* Risk
          {(() => {
            const risk = getRiskLevel();
            return (
              <div style={{ textAlign: "center", margin: "15px" }}>
                <span style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  background: risk.color,
                  color: "white"
                }}>
                  {risk.label}
                </span>
              </div>
            );
          })()} */}


{(() => {
  const risk = getRiskLevel();

  const riskConfig = {
    "High Risk": {
      bg: "#fee2e2",
      color: "#dc2626",
      icon: "🚨",
      text: "This medicine has reported recalls. Use with caution."
    },
    "Moderate": {
      bg: "#fef3c7",
      color: "#d97706",
      icon: "⚠️",
      text: "Some side effects reported. Monitor usage carefully."
    },
    "Safe": {
      bg: "#dcfce7",
      color: "#16a34a",
      icon: "✅",
      text: "No major risks found. Generally safe to use."
    }
  };

  const config = riskConfig[risk.label];

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "22px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: "0.3s"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {/* Header */}
      <h3 style={{
        color: config.color,
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        <span>{config.icon}</span>
        Risk Analysis: {risk.label}
      </h3>

      {/* Description */}
      <p style={{ color: "#374151" }}>
        {config.text}
      </p>

      {/* Risk Meter */}
      <div style={{
        marginTop: "15px",
        height: "8px",
        borderRadius: "10px",
        background: "#e5e7eb",
        overflow: "hidden"
      }}>
        <div style={{
          width:
            risk.label === "Safe"
              ? "30%"
              : risk.label === "Moderate"
              ? "65%"
              : "90%",
          height: "100%",
          background: config.color,
          transition: "0.5s"
        }} />
      </div>

      {/* Footer */}
      <p style={{
        marginTop: "10px",
        fontSize: "13px",
        color: "#6b7280"
      }}>
        AI-powered safety analysis based on FDA reports
      </p>
    </div>
  );
})()}

          

          {/* Info Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px"
          }}>
            <InfoCard title="Generic Name" value={data.openfda?.generic_name?.[0]} />
            <InfoCard title="Manufacturer" value={data.openfda?.manufacturer_name?.[0]} />
            <InfoCard title="Purpose" value={data.purpose?.[0]} />
            <InfoCard title="Dosage" value={data.dosage_and_administration?.[0]} />
          </div>

          <div style={{ marginTop: "20px" }}>
            <InfoCard title="Uses" value={data.indications_and_usage?.[0]} full />
            <InfoCard title="Warnings" value={data.warnings?.[0]} full />
          </div>

          {/* Side Effects */}
          {events.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <h3>⚠️ Side Effects</h3>
              {events.slice(0, 3).map((ev, i) => (
                <p key={i}>
                  • {ev.patient?.reaction?.[0]?.reactionmeddrapt || "No data"}
                </p>
              ))}
            </div>
          )}

          {/* Recall */}
          {recalls.length > 0 && (
            <div style={{ marginTop: "20px", color: "red" }}>
              <h3>🚨 Recall Warning</h3>
              {recalls.slice(0, 2).map((recall, i) => (
                <div key={i}>
                  <p>{recall.reason_for_recall}</p>
                  <p>{recall.recalling_firm}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}









    <div style={{ display: "flex", gap: "20px" }}>
  <div style={{ flex: 1 }}>
    <Feedback />
  </div>

  <div style={{ flex: 1 }}>
    <Chatbot />
  </div>
</div>
      <SocialShare medicine={medicine} />

    
      <Footer />

    </div>
  );
}

/* 🔥 Small reusable card */
function InfoCard({ title, value, full }) {
  return (
    <div style={{
      background: "#f8fafc",
      padding: "15px",
      borderRadius: "10px",
      gridColumn: full ? "1 / -1" : "auto"
    }}>
      <h4 style={{ color: "#2563eb" }}>{title}</h4>
      <p>{value || "N/A"}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;