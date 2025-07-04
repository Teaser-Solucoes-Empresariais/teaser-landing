// src/app/(PUBLIC)/(LANDING)/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "@/components/chatbot/config";
import MessageParser from "@/components/chatbot/MessageParser";
import ActionProvider from "@/components/chatbot/ActionProvider";

import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";

import { FaRobot } from "react-icons/fa";

export default function Home() {
  const [showBot, setShowBot] = useState(false);
  const [autoExpanded, setAutoExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  // auto‐expande o botão um pouco após carregar e retraí depois
  useEffect(() => {
    const inTimer = setTimeout(() => setAutoExpanded(true), 3000);
    const outTimer = setTimeout(() => setAutoExpanded(false), 7000);
    return () => {
      clearTimeout(inTimer);
      clearTimeout(outTimer);
    };
  }, []);

  // considera expandido se estiver em hover OU no modo auto‐expand
  const expanded = autoExpanded || hovered;

  // estilo base do botão flutuante
  const baseStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 30,
    right: 30,
    backgroundColor: "#6366F1",
    color: "#FFF",
    border: "none",
    zIndex: 999,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    overflow: "hidden",
  };

  // variante de tamanho/cantos dependendo do estado
  const variantStyle: React.CSSProperties = expanded
    ? { width: "230px", height: "60px", borderRadius: "30px" }
    : { width: "60px", height: "60px", borderRadius: "50%" };

  return (
    <>
      {/* Conteúdo principal da landing */}
      <div className="min-h-screen">
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
      </div>

      {/* Chatbot */}
      {showBot && (
        <div
          style={{
            position: "fixed",
            bottom: 105,
            right: 30,
            zIndex: 1000,
          }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      {/* Botão de toggle com animação de hover */}
      <button
        aria-label="Abrir assistente de chat"
        aria-expanded={showBot}
        onClick={() => setShowBot((v) => !v)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ ...baseStyle, ...variantStyle }}
      >
        <FaRobot size={24} />
        {expanded && (
          <span style={{ marginLeft: 12, fontWeight: "bold" }}>
            Olá, posso te ajudar?
          </span>
        )}
      </button>
    </>
  );
}
