import React, { useState, useEffect, useRef } from "react";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // close outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div style={styles.container} ref={menuRef}>
      
      {/* Hamburger */}
      <div style={styles.hamburger} onClick={() => setOpen(!open)}>
        <div style={{ ...styles.line, transform: open ? "rotate(45deg) translateY(8px)" : "" }} />
        <div style={{ ...styles.line, opacity: open ? 0 : 1 }} />
        <div style={{ ...styles.line, transform: open ? "rotate(-45deg) translateY(-8px)" : "" }} />
      </div>

      {/* Dropdown */}
      <div
        style={{
          ...styles.dropdown,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: open ? "auto" : "none"
        }}
      >
        <MenuItem label="Login" />
        <MenuItem label="Register" />
        <MenuItem label="Help" />
      </div>
    </div>
  );
}

function MenuItem({ label }) {
  return (
    <div style={styles.item}>
      {label}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "inline-block"
  },

  hamburger: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "8px"
  },

  line: {
    width: "25px",
    height: "3px",
    background: "#fff", // header ke liye white
    borderRadius: "2px",
    transition: "0.3s"
  },

  dropdown: {
    position: "absolute",
    top: "45px",
    right: "0",
    width: "170px",
    background: "#ffffff",  // ⭐ main fix
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    padding: "8px 0",
    transition: "all 0.25s ease"
  },

  item: {
    padding: "12px 16px",
    fontSize: "14px",
    color: "#1e293b",
    cursor: "pointer",
    transition: "0.2s",
    borderRadius: "8px",
    margin: "4px 8px"
  }
};

// hover via CSS-like JS
setTimeout(() => {
  document.querySelectorAll("div").forEach((el) => {
    if (el.innerText === "Login" || el.innerText === "Register" || el.innerText === "Help") {
      el.onmouseenter = () => {
        el.style.background = "#f1f5f9";
      };
      el.onmouseleave = () => {
        el.style.background = "transparent";
      };
    }
  });
}, 300);

export default HamburgerMenu;