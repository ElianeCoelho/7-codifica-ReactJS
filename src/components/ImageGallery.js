import React, { useState } from "react";
import NossaSenhoraAparecida from "../assets/NossaSenhoraAparecida.jpeg"; // ajuste o caminho conforme sua estrutura
import NossaSenhoraDeFatima from "../assets/NossaSenhoraDeFatima.jpg"; // exemplo para outras imagens
import NossaSenhoraDoRosario from "../assets/NossaSenhoraDoRosario.webp";


function ImageGallery() {
  const images = [
    NossaSenhoraAparecida,
    NossaSenhoraDeFatima,
    NossaSenhoraDoRosario,
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagem ${index + 1}`}
            style={{ width: "100px", cursor: "pointer" }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div>
            <img
              src={selectedImage}
              alt="Selecionada"
              style={{ maxWidth: "90%", maxHeight: "90%" }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{ display: "block", margin: "10px auto" }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;

