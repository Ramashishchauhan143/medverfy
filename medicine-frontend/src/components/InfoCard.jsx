function InfoCard({ title, value, full }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        gridColumn: full ? "1 / -1" : "auto"
      }}
    >
      <h4 style={{ color: "#2563eb", marginBottom: "8px" }}>{title}</h4>
      <p style={{ color: "#334155" }}>
        {value || "N/A"}
      </p>
    </div>
  );
}