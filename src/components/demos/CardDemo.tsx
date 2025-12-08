import { useState } from "react";

function CardDemo() {
  // ✅ Details are hidden by default
  const [expanded, setExpanded] = useState(false);

  // ✅ Toggle boolean state
  const toggle = () => setExpanded(prev => !prev);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        maxWidth: "300px",
        margin: "0 auto",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* ✅ Always-visible profile info */}
      <h3 style={{ marginBottom: "0.25rem" }}>Jane Doe</h3>
      <p style={{ color: "#555", marginTop: 0 }}>Frontend Developer</p>

      {/* ✅ Toggle button */}
      <button
        onClick={toggle}
        style={{
          marginTop: "0.5rem",
          padding: "0.4rem 0.8rem",
          fontSize: "0.9rem",
          cursor: "pointer",
        }}
      >
        {expanded ? "Hide Details" : "Show Details"}
      </button>

      {/* ✅ Conditional rendering */}
      {expanded && (
        <div style={{ marginTop: "1rem", color: "#444" }}>
          <p><strong>Email:</strong> jane@example.com</p>
          <p><strong>Location:</strong> Bengaluru, India</p>
          <p><strong>Skills:</strong> React, TypeScript, UI Design</p>
        </div>
      )}
    </div>
  );
}

export default CardDemo;