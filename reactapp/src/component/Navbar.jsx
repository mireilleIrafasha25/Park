import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    header: {
      backgroundColor: "white",
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "0 1rem",
    },
    navContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginTop: "12px",
    },
    navList: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginRight: "240px",
      fontSize: "14px",
      fontWeight: "600",
    },
    navItem: {
      color: "rgb(71, 85, 105)",
      transition: "color 0.2s ease",
      textDecoration: "none",
    },
    navItemHover: {
      color: "rgb(156, 163, 175)",
    },
    button: {
      backgroundColor: "rgb(34, 197, 94)",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "rgb(16, 185, 129)",
    },
    mobileMenu: {
      position: "fixed",
      backgroundColor: "white",
      zIndex: 10,
      height: "100%",
      padding: "28px 0",
      top: "64px",
      left: 0,
      transition: "all 0.5s ease-out",
    },
    hiddenMenu: {
      width: 0,
      overflow: "hidden",
    },
    visibleMenu: {
      width: "100%",
    },
    menuItem: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#274C5B",
      padding: "12px 16px",
      textDecoration: "none",
    },
    menuItemHover: {
      color: "rgb(34, 197, 94)",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        <div style={styles.logoContainer}>
          <a href="/">
            <img src="/Logo.png" style={{ width: "32px", height: "20px" }} alt="Logo" />
          </a>
        </div>

        <div style={{ display: "none", ...styles.navList }} className="md:block">
          <nav aria-label="Global">
            <ul style={{ display: "flex", gap: "20px" }}>
              <Link to="/" style={styles.navItem}>
                Home
              </Link>
              <Link to="/about" style={styles.navItem}>
                About
              </Link>
              <Link to="/service" style={styles.navItem}>
                Services
              </Link>
              <Link to="/contact-us" style={styles.navItem}>
                Contact
              </Link>
            </ul>
          </nav>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <Link to="/login" style={styles.button}>
            Login
          </Link>
          <Link to="/register" style={styles.button}>
            Register
          </Link>

          <button style={{ padding: "8px" }} onClick={() => setIsOpen(!isOpen)}>
            <CiMenuBurger style={{ fontSize: "24px", color: "rgb(71, 85, 105)" }} />
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        style={{
          ...styles.mobileMenu,
          ...(isOpen ? styles.visibleMenu : styles.hiddenMenu),
        }}
      >
        <ul style={{ display: "flex", flexDirection: "column", gap: "25px", padding: "0 24px" }}>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/" style={styles.menuItem}>
              Home
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/about" style={styles.menuItem}>
              About
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/service" style={styles.menuItem}>
              Services
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/contact-us" style={styles.menuItem}>
              Contact
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/login" style={styles.button}>
              Login
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/register" style={styles.button}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
