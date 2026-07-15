import React from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    ...styles.link,
    color: location.pathname === path ? "#38bdf8" : "#e2e8f0",
    borderBottom:
      location.pathname === path ? "2px solid #38bdf8" : "2px solid transparent"
  });

  return (
    <nav style={styles.nav}>
      
      {/* Logo */}
      <div style={styles.logo}>
        <span style={{ color: "#38bdf8" }}>Med</span>Verify
      </div>

      {/* Links */}
      <div style={styles.rightSection}>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/description" style={linkStyle("/description")}>Description</Link>
        <Link to="/about" style={linkStyle("/about")}>About</Link>
        <Link to="/gallery" style={linkStyle("/gallery")}>Gallery</Link>
        <Link to="/disclaimer" style={linkStyle("/disclaimer")}>Disclaimer</Link>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Hamburger */}
        <HamburgerMenu />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    height: "70px",
    position: "sticky",
    top: 0,
    zIndex: 1000,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "0 50px",
    boxSizing: "border-box",

    background: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(10px)",

    boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
  },

  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: "1px"
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "25px"
  },

  link: {
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    paddingBottom: "5px",
    transition: "all 0.3s ease"
  },

  divider: {
    width: "1px",
    height: "20px",
    background: "rgba(255,255,255,0.2)"
  }
};

export default Navbar;