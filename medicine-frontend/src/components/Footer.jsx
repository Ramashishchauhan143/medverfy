import React from "react";

function Footer() {
  return (
    <div
      style={{
        marginTop: "60px",
        backgroundColor: "#2c3e50",
        color: "#fff",
        padding: "40px 20px",
        fontFamily: "Arial",
        borderRadius:"10px"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>Thanks for visit!</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div style={{ minWidth: "180px" }}>
          <h3 style={{ borderBottom: "1px solid #fff", paddingBottom: "5px" }}>Helpful Links</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            <li>Courses</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div style={{ minWidth: "180px" }}>
          <h3 style={{ borderBottom: "1px solid #fff", paddingBottom: "5px" }}>Get in Touch</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px", lineHeight: "1.8" }}>
            <li>Medverfy.in</li>
            <li>MEdicineVerification.in</li>
            <li>openFDA.com</li>
            <li>Support Team: 10am - 6pm</li>
          </ul>
        </div>

        <div style={{ minWidth: "180px" }}>
          <h3 style={{ borderBottom: "1px solid #fff", paddingBottom: "5px" }}>Connect with us</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px", lineHeight: "1.8" }}>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          borderTop: "1px solid #444",
          paddingTop: "15px",
          fontSize: "14px",
        }}
      >
        © 2026 MedVerify
      </div>
    </div>
  );
}

export default Footer;
