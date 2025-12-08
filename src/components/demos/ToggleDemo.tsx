import { useState } from "react";

function ToggleDemo() {
  const [isOn, setIsOn] = useState(false);

  // ✅ Toggle boolean state
  const toggle = () => setIsOn(prev => !prev);

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h3>Toggle Demo</h3>

      {/* ✅ Toggle switch container */}
      <div
        onClick={toggle}
        style={{
          width: "60px",
          height: "30px",
          borderRadius: "30px",
          background: isOn ? "#4caf50" : "#ccc",
          position: "relative",
          cursor: "pointer",
          margin: "1rem auto",
          transition: "background 0.25s ease",
        }}
      >
        {/* ✅ Switch knob */}
        <div
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "white",
            position: "absolute",
            top: "2px",
            left: isOn ? "32px" : "2px",
            transition: "left 0.25s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* ✅ ON/OFF text */}
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {isOn ? "ON" : "OFF"}
      </p>
    </div>
  );
}

export default ToggleDemo;