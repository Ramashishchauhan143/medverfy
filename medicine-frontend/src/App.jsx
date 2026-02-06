import { useState } from "react";
import "./App.css";
import medicineList from "./components/medicineList";

import {
  MedicineDropdownUI,
  MedicineAutocompleteUI,
  MedicinePremiumUI
} from "./components/MedicineUI";


function App() {

  const [suggestions, setSuggestions] = useState([]);


  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);


  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");






  const searchMedicine = async (medicineName) => {
    if (!medicineName) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(
        `http://localhost:5000/medicine?name=${medicineName}`
      );
      const result = await res.json();

      if (result.success) {
        setData(result.data);
      } else {
        setError("No data found!");
      }
    } catch {
      setError("API Error!");
    }

    setLoading(false);
  };




  //   async function fetchData(medicine) {
  //   const res = await fetch(`http://localhost:5000/medicine/${medicine}`);
  //   const data = await res.json();
  //   console.log(data);
  // }

  const fetchSuggestions = async (value) => {
    setName(value);

    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.fda.gov/drug/label.json?search=openfda.generic_name:${value}*&limit=5`
      );
      const json = await res.json();

      const names = json.results
        ?.map(r => r.openfda?.generic_name?.[0])
        .filter(Boolean);

      setSuggestions([...new Set(names)]);
    } catch {
      setSuggestions([]);
    }
  };






  return (
    <div className="container">


      <div className="hero-section">
        <img
          src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/20516/PA1050804.jpg?date=Sun%20Dec%2021%202025%2023:51:37%20GMT+0530%20(India%20Standard%20Time)"
          alt="FDA Banner"
        />








        <h1 className="title">MedVerify</h1>
        <p>Powered by US FDA Open Data | Safe Medicine Awareness</p>
      </div>






      {/* <MedicineDropdownUI
  medicines={[
    "acetaminophen",
    "ibuprofen",
    "amoxicillin",
    "azithromycin",
    "doxycycline",
    "ciprofloxacin",
    "metformin",
    "omeprazole"
  ]}
  onSelect={(value) => {
    setName(value);
    searchMedicine();
  }}
/> */}


      <h1 className="title">Medicine  Authentication  Information</h1>

      <marquee style={{ color: "red" }}>
        <h2>
          Verify the authenticity of medicines using official US Food and Drug Administration (FDA) drug data.
          Designed to protect patients from counterfeit and unsafe medicines.
        </h2>
      </marquee>





      <MedicineDropdownUI
        medicines={medicineList}
        onSelect={(value) => {
          setName(value);
          searchMedicine(value);
        }}
      />








      <div className="search-box">
        {/* <input
          type="text"
          placeholder="Enter medicine name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}

        <input
          type="text"
          placeholder="Enter medicine name..."
          value={name}
          onChange={(e) => fetchSuggestions(e.target.value)}
        />

        {suggestions.length > 0 && (
          <ul style={{
            background: "#111",
            borderRadius: "10px",
            marginTop: "5px",
            maxHeight: "180px",
            overflowY: "auto"
          }}>
            {suggestions.map((s, i) => (
              <li
                key={i}
                style={{ padding: "8px", cursor: "pointer" }}
                onClick={() => {
                  setName(s);
                  setSuggestions([]);
                  searchMedicine();
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        )}



        {/* <button onClick={searchMedicine}>Search</button> */}

        <button onClick={() => searchMedicine(name)}>
          Search
        </button>

      </div>

      {loading && <p className="msg">Loading...</p>}
      {error && <p className="msg error">{error}</p>}

      {data && (
        <div className="medicine-card flex-card">

          {/* LEFT IMAGE */}
          <div className="medicine-image">
            <img
              src={`https://dummyimage.com/300x300/2563eb/ffffff&text=${data.openfda?.generic_name || "Medicine"}`}
              alt="medicine"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="medicine-content">
            <h2>{data.openfda?.brand_name}</h2>

            <p><strong>Generic Name:</strong> {data.openfda?.generic_name}</p>
            <p><strong>Manufacturer:</strong> {data.openfda?.manufacturer_name}</p>

            <div className="section">
              <h3 className="section-title">Purpose</h3>
              <p>{data.purpose}</p>
            </div>

            <div className="section">
              <h3 className="section-title">Uses</h3>
              <p>{data.indications_and_usage}</p>
            </div>

            <div className="section">
              <h3 className="section-title">Warnings</h3>
              <p>{data.warnings}</p>
            </div>

            <div className="section">
              <h3 className="section-title">Dosage</h3>
              <p>{data.dosage_and_administration}</p>
            </div>
          </div>
        </div>
      )}


      {/* MEDICINE IMAGE GALLERY */}
      <div className="medicine-gallery">

        <h2 className="section-title">Commonly Used Medicines</h2>

        <div className="medicine-grid">
          {[
            "Paracetamol",
            "Ibuprofen",
            "Amoxicillin",
            "Azithromycin",
            "Metformin",
            "Omeprazole",
            "Ciprofloxacin",
            "Aspirin",
            "Cetirizine",
            "Doxycycline",
            "Pantoprazole",
            "Atorvastatin",
            "RANITIDINE",
            "atenolol"
          ].map((med, index) => (
            <div className="medicine-box" key={index}>
              <img
                src={`https://dummyimage.com/200x200/2563eb/ffffff&text=${med}`}
                alt={med}
              />
              <span>{med}</span>
            </div>
          ))}
        </div>

      </div>

      <footer className="site-footer">

        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-col">
            <h3 className="footer-logo">MedVerify</h3>
            <p>
              Verified medicine information powered by
              the US FDA Open Data platform.
            </p>
          </div>

          {/* CENTER */}
          <div className="footer-col footer-center">
            <h4>Connect With Us</h4>
            <p>
              Follow MedVerify for medicine safety updates,
              FDA alerts, and health awareness.
            </p>

            <div className="footer-social">
              <a href="#"><img src="https://img.icons8.com/color/48/facebook-new.png" /></a>
              <a href="#"><img src="https://img.icons8.com/color/48/twitter--v1.png" /></a>
              <a href="#"><img src="https://img.icons8.com/color/48/instagram-new.png" /></a>
              <a href="#"><img src="https://img.icons8.com/color/48/linkedin.png" /></a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-col">
            <h4>Data Source</h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh3d8lXsBWkEF_TvtxY3yOz1-Lk6KnLsk-A&s"
              alt="FDA"
              className="footer-fda"
            />
            <p>Official FDA Drug Database</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 MedVerify. Educational use only.
        </div>

      </footer>





    </div>
  );
}

export default App;
