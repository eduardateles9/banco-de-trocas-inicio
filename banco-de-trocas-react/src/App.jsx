import React, { useState } from "react";
import Inicio from "./pages/Inicio.jsx";

export default function App() {
  // Estado para controlar a tela visível no momento.
  // Por enquanto só existe 'inicio'. Quando surgirem outras telas,
  // é só adicionar novos valores aqui (ex: 'contato' | 'mensagem_enviada').
  const [telaAtual, setTelaAtual] = useState("inicio");

  return (
    <div className="app-container">
      {telaAtual === "inicio" && <Inicio />}
    </div>
  );
}
