"use client";

import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");

  const generateSites = async () => {
    try {
      const res = await fetch("/api/generate", { method: "POST" });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error generating sites.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Website Generator</h1>
      <p>Click the button to generate all websites from CSV.</p>
      <button
        onClick={generateSites}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Generate Sites
      </button>
      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  );
}
