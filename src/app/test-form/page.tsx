"use client";

import { useState } from "react";
import FormCard from "../../components/features/pendaftaran/FormCard";

const lombas = ["Desain Grafis", "Typing Competition", "Competitive Programming"];

export default function TestFormPage() {
  const [selectedLomba, setSelectedLomba] = useState("Desain Grafis");

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{ background: "#000923" }}
    >
      <h1 
        className="text-white text-3xl font-bold mb-8"
        style={{ fontFamily: "'Zen Dots', cursive" }}
      >
        Test Form Card
      </h1>

      {/* Lomba Selector */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {lombas.map((lomba) => (
          <button
            key={lomba}
            onClick={() => setSelectedLomba(lomba)}
            className="px-4 py-2 rounded-full text-white text-sm font-semibold transition-all"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              background: selectedLomba === lomba
                ? "linear-gradient(90deg, #6e8efb 0%, #d000cb 100%)"
                : "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {lomba}
          </button>
        ))}
      </div>

      {/* Form Card */}
      <FormCard 
        lomba={selectedLomba}
        onSubmitSuccess={() => {
          console.log("Form submitted successfully!");
        }}
      />
    </div>
  );
}