import { useState } from "react";

function SocialShare({ medicine }) {
  const url = window.location.href;
  const [copied, setCopied] = useState(false);

  const whatsapp = `https://wa.me/?text=Check this medicine: ${medicine} ${url}`;
  const twitter = `https://twitter.com/intent/tweet?text=Medicine: ${medicine}&url=${url}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "25px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>
        📤 Share This Medicine
      </h3>

      <p style={{ fontSize: "14px", color: "#64748b" }}>
        Help others by sharing verified medicine info
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >
        {/* WhatsApp */}
        <a href={whatsapp} target="_blank">
          <button style={btnStyle("#25D366")}>🟢 WhatsApp</button>
        </a>

        {/* Twitter */}
        <a href={twitter} target="_blank">
          <button style={btnStyle("#1DA1F2")}>🐦 Twitter</button>
        </a>

        {/* LinkedIn */}
        <a href={linkedin} target="_blank">
          <button style={btnStyle("#0077B5")}>💼 LinkedIn</button>
        </a>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          style={btnStyle("#0f172a")}
        >
          🔗 {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}

const btnStyle = (bg) => ({
  padding: "10px 16px",
  background: bg,
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "0.3s",
  fontWeight: "500"
});

export default SocialShare;