import { TiArrowRight } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "white", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        
        {/* Company Info */}
        <div style={{ width: "100%", maxWidth: "25%", marginBottom: "1rem" }}>
          <img src="/Logo.png" alt="Merveille Catering Logo" style={{ width: "4rem", marginBottom: "1rem" }} />
          <p style={{ color: "#9ca3af" }}>At Merveille Catering Services, we craft unforgettable culinary experiences for every event.</p>
        </div>
        
        {/* Quick Links */}
        <div style={{ width: "100%", maxWidth: "25%", marginBottom: "1rem" }}>
         <Link to="posts/:{postId}"> <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "1rem" }}>Quick Links</h3></Link>
          <ul style={{ listStyle: "none", padding: 0, color: "#9ca3af" }}>
            {["Home", "About Us", "Services", "Contact"].map((link, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <TiArrowRight style={{ color: "#22c55e" }} />
                <a href="#" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s", cursor: "pointer" }} 
                   onMouseOver={(e) => (e.target.style.color = "#22c55e")}
                   onMouseOut={(e) => (e.target.style.color = "#9ca3af")}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Services */}
        <div style={{ width: "100%", maxWidth: "25%", marginBottom: "1rem" }}>
          <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "1rem" }}>Our Services</h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#9ca3af" }}>
            {["Wedding Catering", "Corporate Events", "Private Parties", "Custom Menus"].map((service, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <TiArrowRight style={{ color: "#22c55e" }} />
                <a href="#" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s", cursor: "pointer" }}
                   onMouseOver={(e) => (e.target.style.color = "#22c55e")}
                   onMouseOut={(e) => (e.target.style.color = "#9ca3af")}>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact */}
        <div style={{ width: "100%", maxWidth: "25%" }}>
          <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "1rem" }}>Contact Us</h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#9ca3af" }}>
            <li style={{ marginBottom: "0.75rem" }}>Phone: +250 783010765</li>
            <li style={{ marginBottom: "0.75rem" }}>Email: merveillecatering@gmail.com</li>
            <li>Location: Kigali, Rwanda</li>
          </ul>
        </div>
      </div>
      
      {/* Social Media */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", gap: "1.5rem" }}>
        {[FaTiktok, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
          <a key={index} href="#" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", transition: "color 0.3s" }}
             onMouseOver={(e) => (e.target.style.color = "#22c55e")}
             onMouseOut={(e) => (e.target.style.color = "#9ca3af")}>
            <Icon size={24} />
          </a>
        ))}
      </div>
      
      {/* Copyright */}
      <div style={{ textAlign: "center", marginTop: "2rem", color: "#6b7280" }}>
        &copy; {new Date().getFullYear()} Merveille Catering Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
