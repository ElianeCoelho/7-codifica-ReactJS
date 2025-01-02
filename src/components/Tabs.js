import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Sobre");

  const renderContent = () => {
    switch (activeTab) {
      case "Sobre":
        return <p>Bem-vindo ao projeto React! Explore as funcionalidades.</p>;
      case "Contato":
        return <p>Para dúvidas, entre em contato em: contato@example.com</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Tabs Navegáveis</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setActiveTab("Sobre")}
          style={{
            background: activeTab === "Sobre" ? "#ddd" : "#fff",
          }}
        >
          Sobre
        </button>
        <button
          onClick={() => setActiveTab("Contato")}
          style={{
            background: activeTab === "Contato" ? "#ddd" : "#fff",
          }}
        >
          Contato
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>{renderContent()}</div>
    </div>
  );
}

export default Tabs;
