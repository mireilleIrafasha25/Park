import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        "https://your-backend-api.com/contact", // Your backend API endpoint
        formData
      );
      setResponseMessage("Thank you for reaching out! We will get back to you soon.");
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: "3rem 0", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem", color: "#4a4a4a" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#2c3e50", textAlign: "center", marginBottom: "1.5rem" }}>Contact Us</h2>
        <p style={{ textAlign: "center", fontSize: "1.125rem", color: "#2c3e50", marginBottom: "2rem" }}>
          We’d love to hear from you! Please leave your details, and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} style={{ backgroundColor: "#ffffff", borderRadius: "0.75rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "2rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="name" style={{ display: "block", fontSize: "1rem", fontWeight: "600", color: "#333" }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              style={{
                marginTop: "0.5rem",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="email" style={{ display: "block", fontSize: "1rem", fontWeight: "600", color: "#333" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{
                marginTop: "0.5rem",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label htmlFor="message" style={{ display: "block", fontSize: "1rem", fontWeight: "600", color: "#333" }}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              style={{
                marginTop: "0.5rem",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
              }}
            ></textarea>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                display: "inline-block",
                width: "100%",
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                color: "#ffffff",
                backgroundColor: isSubmitting ? "#6c757d" : "#4a90e2",
                borderRadius: "0.5rem",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "background-color 0.3s",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {responseMessage && (
          <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "1.125rem", fontWeight: "500", color: "#28a745" }}>
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
