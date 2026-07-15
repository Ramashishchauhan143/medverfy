import { useState } from "react";

function MedicineDropdownUI({ medicines, onSelect }) {
  const [search, setSearch] = useState("");

  const filteredMedicines = medicines.filter((med) =>
    med.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        position: "relative"
      }}
    >
      {/* 🔍 Input Field */}
      <input
        type="text"
        placeholder="🔍 Search medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}


        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
         border: "1px solid #cbd5f5",
          background: "#f8fafc",
          fontSize: "16px",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #0b5ed7")}
        onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
      />

      {/* 🔘 Button */}
      <button
        onClick={() => onSelect(search)}
        style={{
          width: "100%",
          padding: "14px",
          background: "linear-gradient(135deg, #0b5ed7, #2563eb)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "12px",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseOver={(e) =>
          (e.target.style.background =
            "linear-gradient(135deg, #2563eb, #1d4ed8)")
        }
        onMouseOut={(e) =>
          (e.target.style.background =
            "linear-gradient(135deg, #0b5ed7, #2563eb)")
        }
      >
        Search Medicine
      </button>

      {/* 📋 Dropdown */}
      {search && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginTop: "5px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 10,
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
          }}
        >
          {filteredMedicines.slice(0, 8).map((med, index) => (
            <div
              key={index}
              onClick={() => {
                setSearch(med);
                onSelect(med);
              }}
              style={{
                padding: "12px",
                cursor: "pointer",
                borderBottom: "1px solid #f1f1f1",
                transition: "0.2s"
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "#f1f5f9")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "white")
              }
            >
              {med}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MedicineDropdownUI;