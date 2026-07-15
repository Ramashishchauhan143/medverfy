import { useState } from "react";

function MedicineDropdownUI({ medicines, onSelect }) {

  const [search, setSearch] = useState("");

  const filteredMedicines = medicines.filter((med) =>
    med.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div style={{ maxWidth: "500px", margin: "20px auto" }}>

      <input
        type="text"
        placeholder="Search medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          fontSize: "16px"
        }}
      />

      <button
  onClick={() => onSelect(search)}
  style={{
    width: "100%",
    padding: "12px",
    backgroundColor: "#0b5ed7",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px"
  }}
>
  Search Medicine
</button>


      <div
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px"
        }}
      >

        {filteredMedicines.map((med, index) => (
          <div
            key={index}
            onClick={() => onSelect(med)}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #eee"
            }}
          >
            {med}
          </div>
        ))}

      </div>

    </div>

  );
}

export default MedicineDropdownUI;
