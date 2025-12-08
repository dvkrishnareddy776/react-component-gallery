import { useState } from "react";

function FormDemo() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ✅ Basic email validation: must contain @ and .
  const isValidEmail = email.includes("@") && email.includes(".");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ✅ Prevent page reload
    if (isValidEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ maxWidth: "320px", margin: "0 auto" }}>
      <h3>Form Demo</h3>

      {/* ✅ Success message */}
      {submitted ? (
        <p style={{ color: "green", marginTop: "1rem" }}>
          ✅ Email submitted successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* ✅ Email input */}
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Email:
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: isValidEmail ? "1px solid #ccc" : "1px solid red",
              borderRadius: "4px",
            }}
            placeholder="Enter your email"
          />

          {/* ✅ Error message */}
          {!isValidEmail && email.length > 0 && (
            <p style={{ color: "red", fontSize: "0.85rem" }}>
              Please enter a valid email.
            </p>
          )}

          {/* ✅ Submit button */}
          <button
            type="submit"
            disabled={!isValidEmail}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: isValidEmail ? "pointer" : "not-allowed",
              opacity: isValidEmail ? 1 : 0.5,
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default FormDemo;
