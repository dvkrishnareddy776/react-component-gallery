import { useState } from "react";

function ColorPickerDemo() {
  // ✅ Array of colors to choose from
  const colors = ["#ff4d4d", "#4caf50", "#2196f3", "#ff9800", "#9c27b0", "#333"];

  // ✅ Selected color (default = first color)
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h3>Color Picker Demo</h3>

      {/* ✅ Preview box */}
      <div
        style={{
          width: "120px",
          height: "120px",
          background: selectedColor,
          margin: "1rem auto",
          borderRadius: "8px",
          border: "2px solid #ddd",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      />

      {/* ✅ Color buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: selectedColor === color ? "3px solid black" : "2px solid #ccc",
              background: color,
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
          />
        ))}
      </div>

      {/* ✅ Selected color label */}
      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
        Selected: {selectedColor}
      </p>
    </div>
  );
}

export default ColorPickerDemo;
