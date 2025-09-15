"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, Variants } from "framer-motion";
import { Mail, MapPin, Phone, ShieldCheck, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

// Marka renkleri
export const brand = {
  primary: "#21ffd7",
  secondary: "#0040ff",
  dark: "#0a0f1a",
};

/* =============================
   LOGO
   ============================= */
export function ArcadiaLogoSVG() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={brand.primary} />
          <stop offset="100%" stopColor={brand.secondary} />
        </linearGradient>
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M20 4L36 20L20 36L4 20L20 4Z"
        stroke="url(#logo-gradient)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        filter="url(#logo-glow)"
      />
      <path d="M20 4V36" stroke="url(#logo-gradient)" strokeWidth="1.5" opacity="0.6" />
      <path d="M4 20H36" stroke="url(#logo-gradient)" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

/* =============================
   ÖZELLİK GÖRSELLERİ
   ============================= */
export function FaceRecognitionSVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-48 md:h-64">
      <defs>
        <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0" />
          <stop offset="30%" stopColor="#21ffd7" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#21ffd7" stopOpacity="1" />
          <stop offset="70%" stopColor="#21ffd7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="face-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0040ff" stopOpacity="0.4" />
        </linearGradient>

        <filter id="face-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="eye-gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.3" />
        </radialGradient>

        <pattern id="scan-grid" patternUnits="userSpaceOnUse" width="20" height="20">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#21ffd7" strokeWidth="0.5" opacity="0.3" />
        </pattern>

        <style>{`
          @keyframes facial-scan { 0% { y: 60; opacity: 0.2; } 50% { opacity: 1; } 100% { y: 240; opacity: 0.2; } }
          @keyframes recognition-pulse { 0% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } 100% { opacity: 0.3; transform: scale(1); } }
          @keyframes iris-scan { 0% { stroke-dashoffset: 50; } 100% { stroke-dashoffset: 0; } }
          .face-scanner { animation: facial-scan 3s ease-in-out infinite; }
          .face-outline { stroke: url(#face-gradient); stroke-width: 2.5; fill: none; filter: url(#face-glow); animation: recognition-pulse 2s ease-in-out infinite; }
          .recognition-point { fill: #21ffd7; filter: url(#face-glow); animation: recognition-pulse 1.5s ease-in-out infinite; }
          .iris-scan { stroke: #21ffd7; stroke-width: 2; fill: none; stroke-dasharray: 20 10; animation: iris-scan 2s linear infinite; }
        `}</style>
      </defs>

      <path
        className="face-outline"
        d="M150 70 C 120 70, 95 90, 95 125 C 95 145, 100 165, 110 180 C 125 200, 140 210, 150 210 C 160 210, 175 200, 190 180 C 200 165, 205 145, 205 125 C 205 90, 180 70, 150 70 Z"
      />
      <ellipse cx="130" cy="115" rx="12" ry="8" className="face-outline" />
      <ellipse cx="170" cy="115" rx="12" ry="8" className="face-outline" />
      <circle cx="130" cy="115" r="4" fill="url(#eye-gradient)" />
      <circle cx="170" cy="115" r="4" fill="url(#eye-gradient)" />
      <circle cx="130" cy="115" r="8" className="iris-scan" style={{ animationDelay: "0s" }} />
      <circle cx="170" cy="115" r="8" className="iris-scan" style={{ animationDelay: "0.5s" }} />
      <path className="face-outline" d="M150 125 L145 135 Q150 140 155 135 Z" />
      <path className="face-outline" d="M135 155 Q150 165 165 155" />
      <circle cx="115" cy="100" r="2" className="recognition-point" style={{ animationDelay: "0s" }} />
      <circle cx="185" cy="100" r="2" className="recognition-point" style={{ animationDelay: "0.2s" }} />
      <circle cx="150" cy="95" r="2" className="recognition-point" style={{ animationDelay: "0.4s" }} />
      <circle cx="130" cy="140" r="2" className="recognition-point" style={{ animationDelay: "0.6s" }} />
      <circle cx="170" cy="140" r="2" className="recognition-point" style={{ animationDelay: "0.8s" }} />
      <circle cx="150" cy="175" r="2" className="recognition-point" style={{ animationDelay: "1s" }} />
      <line x1="100" y1="110" x2="115" y2="100" stroke="#21ffd7" strokeWidth="1" opacity="0.6" />
      <line x1="200" y1="110" x2="185" y2="100" stroke="#21ffd7" strokeWidth="1" opacity="0.6" />
      <line x1="150" y1="80" x2="150" y2="95" stroke="#21ffd7" strokeWidth="1" opacity="0.6" />
      <rect className="face-scanner" x="80" y="60" width="140" height="8" fill="url(#scan-gradient)" rx="4" />
      <rect x="80" y="60" width="140" height="160" fill="url(#scan-grid)" opacity="0.4" />
      <path d="M80 60 L80 80 M80 60 L100 60" stroke="#21ffd7" strokeWidth="3" strokeLinecap="round" />
      <path d="M220 60 L220 80 M220 60 L200 60" stroke="#21ffd7" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 220 L80 200 M80 220 L100 220" stroke="#21ffd7" strokeWidth="3" strokeLinecap="round" />
      <path d="M220 220 L220 200 M220 220 L200 220" stroke="#21ffd7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function EmotionDetectionSVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-48 md:h-64">
      <defs>
        <radialGradient id="emotion-gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#0040ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="emotion-face-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0040ff" stopOpacity="0.5" />
        </linearGradient>
        <filter id="emotion-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes emotion-pulse { 0% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } 100% { opacity: 0.6; transform: scale(1); } }
          @keyframes emotion-wave { 0% { stroke-dashoffset: 40; opacity: 0.3; } 50% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: -40; opacity: 0.3; } }
          .emotion-face { stroke: url(#emotion-face-gradient); stroke-width: 2.5; fill: none; filter: url(#emotion-glow); animation: emotion-pulse 2s ease-in-out infinite; }
          .emotion-eye { fill: #21ffd7; filter: url(#emotion-glow); }
          .emotion-wave { stroke: #21ffd7; stroke-width: 2; fill: none; stroke-dasharray: 20 10; animation: emotion-wave 2s linear infinite; }
        `}</style>
      </defs>
      <ellipse cx="150" cy="150" rx="70" ry="70" fill="url(#emotion-gradient)" opacity="0.2" />
      <path className="emotion-face" d="M150 90 C 120 90, 110 130, 150 170 C 190 130, 180 90, 150 90 Z" />
      <ellipse cx="130" cy="130" rx="10" ry="7" className="emotion-face" />
      <ellipse cx="170" cy="130" rx="10" ry="7" className="emotion-face" />
      <circle cx="130" cy="130" r="4" className="emotion-eye" />
      <circle cx="170" cy="130" r="4" className="emotion-eye" />
      <path className="emotion-face" d="M140 155 Q150 165 160 155" />
      <path className="emotion-wave" d="M110 200 Q150 220 190 200" />
      <path className="emotion-wave" d="M120 210 Q150 230 180 210" style={{ animationDelay: "0.7s" }} />
      <g>
        <text x="150" y="250" textAnchor="middle" fill="#21ffd7" fontSize="12" opacity="0.7">
          Duygu Analizi
        </text>
      </g>
    </svg>
  );
}

export function HolographicHumanSVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-48 md:h-64">
      <defs>
        <linearGradient id="holo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0040ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="holo-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0040ff" stopOpacity="0.1" />
        </linearGradient>
        <filter id="hologram-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="hologram-lines">
          {Array.from({ length: 40 }).map((_, i) => (
            <rect key={i} x="0" y={i * 7} width="300" height="3" />
          ))}
        </clipPath>
        <style>{`
          @keyframes holo-float { 0% { transform: translateY(0px) rotateY(0deg); opacity: 0.7; } 33% { transform: translateY(-3px) rotateY(120deg); opacity: 1; } 66% { transform: translateY(-1px) rotateY(240deg); opacity: 0.8; } 100% { transform: translateY(0px) rotateY(360deg); opacity: 0.7; } }
          @keyframes holo-flicker { 0% { opacity: 0.8; } 5% { opacity: 0.3; } 10% { opacity: 0.9; } 15% { opacity: 0.4; } 20% { opacity: 0.8; } 100% { opacity: 0.8; } }
          @keyframes projection-pulse { 0% { r: 8; opacity: 0.3; } 50% { r: 12; opacity: 0.8; } 100% { r: 8; opacity: 0.3; } }
          .hologram-figure { animation: holo-float 8s ease-in-out infinite, holo-flicker 3s linear infinite; transform-origin: center bottom; }
          .projection-base { fill: #21ffd7; opacity: 0.3; filter: url(#hologram-glow); }
          .projection-point { animation: projection-pulse 2s ease-in-out infinite; }
        `}</style>
      </defs>
      <ellipse cx="150" cy="280" rx="70" ry="15" className="projection-base" />
      <ellipse cx="150" cy="280" rx="50" ry="10" className="projection-base" style={{ opacity: 0.5 }} />
      <ellipse cx="150" cy="280" rx="30" ry="6" className="projection-base" style={{ opacity: 0.7 }} />
      <circle cx="120" cy="278" r="8" fill="#21ffd7" className="projection-point" style={{ animationDelay: "0s" }} />
      <circle cx="150" cy="275" r="8" fill="#21ffd7" className="projection-point" style={{ animationDelay: "0.5s" }} />
      <circle cx="180" cy="278" r="8" fill="#21ffd7" className="projection-point" style={{ animationDelay: "1s" }} />
      <g className="hologram-figure">
        <ellipse cx="150" cy="80" rx="25" ry="30" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" clipPath="url(#hologram-lines)" filter="url(#hologram-glow)" />
        <circle cx="142" cy="75" r="2" fill="#21ffd7" opacity="0.8" />
        <circle cx="158" cy="75" r="2" fill="#21ffd7" opacity="0.8" />
        <path d="M145 85 Q150 88 155 85" stroke="#21ffd7" strokeWidth="1.5" fill="none" opacity="0.7" />
        <rect x="140" y="110" width="20" height="20" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" clipPath="url(#hologram-lines)" filter="url(#hologram-glow)" />
        <rect x="125" y="130" width="50" height="80" rx="5" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" clipPath="url(#hologram-lines)" filter="url(#hologram-glow)" />
        <rect x="100" y="140" width="20" height="50" rx="10" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" clipPath="url(#hologram-lines)" filter="url(#hologram-glow)" />
        <rect x="180" y="140" width="20" height="50" rx="10" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" clipPath="url(#hologram-lines)" filter="url(#hologram-glow)" />
        <circle cx="110" cy="200" r="8" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" filter="url(#hologram-glow)" />
        <circle cx="190" cy="200" r="8" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" filter="url(#hologram-glow)" />
        <rect x="135" y="210" width="15" height="50" rx="7" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" clipPath="url(#hologram-lines)" filter="url(#hologram-glow)" />
        <rect x="155" y="210" width="15" height="50" rx="7" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" clipPath="url(#hologram-lines)" filter="url(#hologram-glow)" />
        <ellipse cx="142" cy="270" rx="12" ry="6" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" filter="url(#hologram-glow)" />
        <ellipse cx="162" cy="270" rx="12" ry="6" stroke="url(#holo-gradient)" strokeWidth="2" fill="url(#holo-fill)" filter="url(#hologram-glow)" />
        <circle cx="180" cy="100" r="1.5" fill="#21ffd7" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; -5,-10; -10,-20" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="120" r="1" fill="#0040ff" opacity="0.7">
          <animate attributeName="opacity" values="0.1;0.7;0.1" dur="1.8s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; 8,-15; 15,-25" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="180" r="1.2" fill="#21ffd7" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; -10,-8; -20,-15" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </g>
      <path d="M120 278 L140 100" stroke="#21ffd7" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="1s" repeatCount="indefinite" />
      </path>
      <path d="M150 275 L150 80" stroke="#21ffd7" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="0.8s" repeatCount="indefinite" />
      </path>
      <path d="M180 278 L160 100" stroke="#21ffd7" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.2s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

export function AiChatbotSVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-48 md:h-64">
      <defs>
        <linearGradient id="chat-bubble-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0040ff" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="ai-brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" />
          <stop offset="100%" stopColor="#0040ff" />
        </linearGradient>
        <filter id="chat-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes typing-dot { 0% { opacity: 0.2; transform: translateY(0); } 33% { opacity: 1; transform: translateY(-3px); } 66% { opacity: 0.2; transform: translateY(0); } 100% { opacity: 0.2; transform: translateY(0); } }
          @keyframes message-appear { 0% { opacity: 0; transform: scale(0.8) translateX(-10px); } 100% { opacity: 1; transform: scale(1) translateX(0); } }
          @keyframes neural-pulse { 0% { stroke-width: 1; opacity: 0.3; } 50% { stroke-width: 2; opacity: 0.8; } 100% { stroke-width: 1; opacity: 0.3; } }
          @keyframes ai-processing { 0% { transform: rotate(0deg); opacity: 0.6; } 100% { transform: rotate(360deg); opacity: 1; } }
          .typing-indicator { animation: typing-dot 1.5s infinite; }
          .chat-message { animation: message-appear 0.8s ease-out; filter: url(#chat-glow); }
          .neural-connection { stroke: #21ffd7; fill: none; animation: neural-pulse 2s ease-in-out infinite; }
          .ai-core { animation: ai-processing 8s linear infinite; transform-origin: center; }
        `}</style>
      </defs>
      <g className="ai-core">
        <circle cx="150" cy="80" r="25" fill="none" stroke="url(#ai-brain-gradient)" strokeWidth="2" opacity="0.8" />
        <circle cx="150" cy="80" r="15" fill="none" stroke="url(#ai-brain-gradient)" strokeWidth="1" opacity="0.6" />
        <circle cx="150" cy="80" r="8" fill="#21ffd7" opacity="0.4" />
        <circle cx="135" cy="70" r="3" fill="#21ffd7" opacity="0.8" />
        <circle cx="165" cy="70" r="3" fill="#21ffd7" opacity="0.8" />
        <circle cx="140" cy="90" r="3" fill="#0040ff" opacity="0.8" />
        <circle cx="160" cy="90" r="3" fill="#0040ff" opacity="0.8" />
        <line x1="135" y1="70" x2="150" y2="80" className="neural-connection" style={{ animationDelay: "0s" }} />
        <line x1="165" y1="70" x2="150" y2="80" className="neural-connection" style={{ animationDelay: "0.3s" }} />
        <line x1="140" y1="90" x2="150" y2="80" className="neural-connection" style={{ animationDelay: "0.6s" }} />
        <line x1="160" y1="90" x2="150" y2="80" className="neural-connection" style={{ animationDelay: "0.9s" }} />
      </g>
      <g className="chat-message" style={{ animationDelay: "0s" }}>
        <path d="M50 140 L180 140 L180 170 L65 170 L50 160 Z" fill="url(#chat-bubble-gradient)" stroke="#21ffd7" strokeWidth="1" />
        <text x="65" y="158" fill="#ffffff" fontSize="12" opacity="0.9">
          {" "}Bugün nasılsın?{" "}
        </text>
      </g>
      <g className="chat-message" style={{ animationDelay: "1s" }}>
        <path d="M120 190 L250 190 L235 200 L250 210 L120 210 Z" fill="url(#chat-bubble-gradient)" stroke="#0040ff" strokeWidth="1" />
        <circle cx="140" cy="200" r="4" fill="#21ffd7" className="typing-indicator" style={{ animationDelay: "0s" }} />
        <circle cx="160" cy="200" r="4" fill="#21ffd7" className="typing-indicator" style={{ animationDelay: "0.3s" }} />
        <circle cx="180" cy="200" r="4" fill="#21ffd7" className="typing-indicator" style={{ animationDelay: "0.6s" }} />
      </g>
      <g className="chat-message" style={{ animationDelay: "3s" }}>
        <path d="M120 230 L270 230 L255 240 L270 250 L120 250 Z" fill="url(#chat-bubble-gradient)" stroke="#0040ff" strokeWidth="1" opacity="0">
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="3s" fill="freeze" />
        </path>
        <text x="135" y="245" fill="#ffffff" fontSize="11" opacity="0">
          {" "}Harika hissediyorum! Size nasıl yardım edebilirim?
          <animate attributeName="opacity" values="0;0.9" dur="0.5s" begin="3.2s" fill="freeze" />
        </text>
      </g>
      <g opacity="0.6">
        <rect x="200" y="60" width="20" height="3" fill="#21ffd7">
          <animate attributeName="width" values="5;20;5" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="200" y="68" width="20" height="3" fill="#21ffd7">
          <animate attributeName="width" values="5;15;5" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <rect x="200" y="76" width="20" height="3" fill="#21ffd7">
          <animate attributeName="width" values="5;18;5" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <text x="230" y="70" fill="#21ffd7" fontSize="8" opacity="0.7">
          Processing
        </text>
      </g>
      <g opacity="0.5">
        <path d="M50 120 Q80 110 100 115 Q130 120 150 105" stroke="#21ffd7" strokeWidth="1" fill="none" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M150 105 Q180 100 200 110 Q220 120 240 105" stroke="#21ffd7" strokeWidth="1" fill="none" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="2.3s" repeatCount="indefinite" />
        </path>
        <text x="50" y="135" fill="#21ffd7" fontSize="8" opacity="0.6">
          NLP Analysis
        </text>
      </g>
      <g opacity="0.7">
        <circle cx="220" cy="200" r="8" fill="none" stroke="#0040ff" strokeWidth="2" strokeDasharray="10,5">
          <animateTransform attributeName="transform" type="rotate" values="0 220 200;360 220 200" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="220" cy="200" r="3" fill="#0040ff" opacity="0.8">
          <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="220" y="220" textAnchor="middle" fill="#0040ff" fontSize="8" opacity="0.6">
          Generating
        </text>
      </g>
      <g opacity="0.4">
        <line x1="120" y1="80" x2="100" y2="50" stroke="#21ffd7" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="180" y1="80" x2="200" y2="50" stroke="#21ffd7" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="150" y1="55" x2="150" y2="30" stroke="#21ffd7" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="100" cy="45" r="4" fill="#21ffd7" opacity="0.6" />
        <circle cx="200" cy="45" r="4" fill="#21ffd7" opacity="0.6" />
        <circle cx="150" cy="25" r="4" fill="#21ffd7" opacity="0.6" />
        <text x="100" y="40" textAnchor="middle" fill="#21ffd7" fontSize="7" opacity="0.7">
          Memory
        </text>
        <text x="200" y="40" textAnchor="middle" fill="#21ffd7" fontSize="7" opacity="0.7">
          Context
        </text>
        <text x="150" y="20" textAnchor="middle" fill="#21ffd7" fontSize="7" opacity="0.7">
          Knowledge
        </text>
      </g>
      <path d="M50 280 Q150 270 250 280" stroke="#21ffd7" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="3s" repeatCount="indefinite" />
      </path>
      <text x="150" y="295" textAnchor="middle" fill="#21ffd7" fontSize="10" opacity="0.6">
        {" "}Continuous Learning & Adaptation{" "}
      </text>
    </svg>
  );
}

export function DeviceControlSVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-48 md:h-64">
      <defs>
        <radialGradient id="control-center-gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0040ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="signal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0" />
          <stop offset="50%" stopColor="#21ffd7" stopOpacity="1" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0" />
        </linearGradient>
        <filter id="control-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes signal-pulse { 0% { stroke-dashoffset: 50; opacity: 0.3; } 50% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: -50; opacity: 0.3; } }
          @keyframes device-activate { 0% { fill: #333; stroke-width: 1; } 50% { fill: #21ffd7; stroke-width: 2; } 100% { fill: #333; stroke-width: 1; } }
          @keyframes center-pulse { 0% { r: 12; opacity: 0.8; } 50% { r: 15; opacity: 1; } 100% { r: 12; opacity: 0.8; } }
          @keyframes wifi-wave { 0% { r: 20; opacity: 0; } 50% { r: 40; opacity: 0.6; } 100% { r: 60; opacity: 0; } }
          .signal-line { stroke: #21ffd7; stroke-width: 2; stroke-dasharray: 8 4; animation: signal-pulse 2s linear infinite; }
          .control-center { fill: url(#control-center-gradient); filter: url(#control-glow); animation: center-pulse 3s ease-in-out infinite; }
          .device-icon { animation: device-activate 4s ease-in-out infinite; transform-origin: center; }
          .wifi-signal { stroke: #21ffd7; stroke-width: 2; fill: none; animation: wifi-wave 2s ease-out infinite; }
        `}</style>
      </defs>
      <circle cx="150" cy="150" r="12" className="control-center" />
      <circle cx="150" cy="150" r="8" fill="#ffffff" opacity="0.8" />
      <circle cx="150" cy="150" r="4" fill="#21ffd7" opacity="1" />
      <circle cx="150" cy="150" r="20" className="wifi-signal" style={{ animationDelay: "0s" }} />
      <circle cx="150" cy="150" r="20" className="wifi-signal" style={{ animationDelay: "0.7s" }} />
      <circle cx="150" cy="150" r="20" className="wifi-signal" style={{ animationDelay: "1.4s" }} />
      <line x1="150" y1="138" x2="150" y2="70" className="signal-line" style={{ animationDelay: "0s" }} />
      <line x1="162" y1="150" x2="220" y2="150" className="signal-line" style={{ animationDelay: "0.3s" }} />
      <line x1="150" y1="162" x2="150" y2="230" className="signal-line" style={{ animationDelay: "0.6s" }} />
      <line x1="138" y1="150" x2="80" y2="150" className="signal-line" style={{ animationDelay: "0.9s" }} />
      <line x1="161" y1="139" x2="200" y2="100" className="signal-line" style={{ animationDelay: "1.2s" }} />
      <line x1="161" y1="161" x2="200" y2="200" className="signal-line" style={{ animationDelay: "1.5s" }} />
      <line x1="139" y1="161" x2="100" y2="200" className="signal-line" style={{ animationDelay: "1.8s" }} />
      <line x1="139" y1="139" x2="100" y2="100" className="signal-line" style={{ animationDelay: "2.1s" }} />

      <g transform="translate(150, 50)">
        <ellipse cx="0" cy="10" rx="8" ry="12" className="device-icon" style={{ animationDelay: "0s" }} />
        <rect x="-6" y="20" width="12" height="4" className="device-icon" style={{ animationDelay: "0s" }} />
        <rect x="-4" y="24" width="8" height="2" className="device-icon" style={{ animationDelay: "0s" }} />
        <line x1="-12" y1="5" x2="-8" y2="8" stroke="#21ffd7" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="12" y1="5" x2="8" y2="8" stroke="#21ffd7" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="0" y1="-2" x2="0" y2="-6" stroke="#21ffd7" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </line>
      </g>

      <g transform="translate(220, 100)">
        <rect x="-8" y="-4" width="16" height="8" rx="2" className="device-icon" style={{ animationDelay: "0.5s" }} />
        <circle cx="-2" cy="0" r="3" className="device-icon" style={{ animationDelay: "0.5s" }} />
        <circle cx="-2" cy="0" r="1.5" fill="#ff4444" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <rect x="-12" y="-2" width="4" height="4" className="device-icon" style={{ animationDelay: "0.5s" }} />
      </g>

      <g transform="translate(230, 150)">
        <circle cx="0" cy="0" r="10" className="device-icon" style={{ animationDelay: "1s" }} />
        <circle cx="0" cy="0" r="6" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="0" y1="-4" x2="0" y2="0" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
        <text x="0" y="20" textAnchor="middle" fill="#21ffd7" fontSize="8" opacity="0.7">
          23°C
        </text>
      </g>

      <g transform="translate(200, 200)">
        <rect x="-12" y="-8" width="24" height="16" rx="2" className="device-icon" style={{ animationDelay: "1.5s" }} />
        <rect x="-10" y="-6" width="20" height="12" fill="#000" opacity="0.8" />
        <rect x="-2" y="8" width="4" height="3" className="device-icon" style={{ animationDelay: "1.5s" }} />
        <rect x="-6" y="11" width="12" height="2" className="device-icon" style={{ animationDelay: "1.5s" }} />
        <rect x="-8" y="-4" width="16" height="8" fill="#21ffd7" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>

      <g transform="translate(150, 250)">
        <rect x="-6" y="-6" width="12" height="12" rx="2" className="device-icon" style={{ animationDelay: "2s" }} />
        <circle cx="0" cy="0" r="3" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <circle cx="0" cy="0" r="1.5" fill="#ffffff" opacity="0.6" />
        <path d="M8 -5 Q12 0 8 5" stroke="#21ffd7" strokeWidth="1" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite" />
        </path>
        <path d="M10 -8 Q16 0 10 8" stroke="#21ffd7" strokeWidth="1" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      <g transform="translate(100, 200)">
        <rect x="-4" y="-6" width="8" height="10" rx="1" className="device-icon" style={{ animationDelay: "2.5s" }} />
        <path d="M-3 -2 Q0 -8 3 -2" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.9" />
        <circle cx="0" cy="0" r="1.5" fill="#21ffd7" opacity="0.8">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(80, 150)">
        <rect x="-8" y="-3" width="16" height="6" rx="1" className="device-icon" style={{ animationDelay: "3s" }} />
        <rect x="-8" y="-9" width="16" height="6" rx="1" className="device-icon" style={{ animationDelay: "3s" }} />
        <rect x="-6" y="-7" width="12" height="4" fill="#000" opacity="0.8" />
        <rect x="-5" y="-6" width="10" height="3" fill="#21ffd7" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.2s" repeatCount="indefinite" />
        </rect>
      </g>

      <g transform="translate(100, 100)">
        <rect x="-6" y="-3" width="12" height="6" rx="1" className="device-icon" style={{ animationDelay: "3.5s" }} />
        <rect x="-2" y="-6" width="1" height="3" fill="#21ffd7" opacity="0.8" />
        <rect x="1" y="-6" width="1" height="3" fill="#21ffd7" opacity="0.8" />
        <path d="M-4 -8 Q0 -12 4 -8" stroke="#21ffd7" strokeWidth="1" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      <g opacity="0.6">
        <text x="50" y="280" fill="#21ffd7" fontSize="9" opacity="0.7">
          8 Cihaz Bağlı
        </text>
        <text x="200" y="280" fill="#21ffd7" fontSize="9" opacity="0.7">
          Aktif Kontrol
        </text>
        <circle cx="40" cy="275" r="3" fill="#00ff00" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="190" cy="275" r="3" fill="#21ffd7" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      <g opacity="0.8">
        <rect x="120" y="10" width="60" height="15" rx="7" fill="url(#control-center-gradient)" opacity="0.3" />
<text x="150" y="22" textAnchor="middle" fill="#21ffd7" fontSize="10">
  {' "Işıkları Aç" '}
  <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
</text>
      </g>
    </svg>
  );
}

export function LearningSVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-48 md:h-64">
      <defs>
        <radialGradient id="brain-core-gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#0040ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="neural-path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0040ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.5" />
        </linearGradient>
        <filter id="learning-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes neural-growth { 0% { stroke-dashoffset: 500; opacity: 0.3; } 50% { stroke-dashoffset: 250; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0.7; } }
          @keyframes synapse-fire { 0% { r: 2; opacity: 0.5; } 50% { r: 4; opacity: 1; } 100% { r: 2; opacity: 0.5; } }
          @keyframes knowledge-flow { 0% { transform: translateX(-20px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(20px); opacity: 0; } }
          @keyframes brain-pulse { 0% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 0.8; } }
          @keyframes learning-progress { 0% { stroke-dasharray: 0 314; } 100% { stroke-dasharray: 314 314; } }
          .neural-pathway { stroke: url(#neural-path-gradient); stroke-width: 2; fill: none; stroke-dasharray: 500; animation: neural-growth 4s ease-in-out infinite; filter: url(#learning-glow); }
          .synapse-node { animation: synapse-fire 2s ease-in-out infinite; fill: #21ffd7; filter: url(#learning-glow); }
          .knowledge-particle { animation: knowledge-flow 3s linear infinite; fill: #21ffd7; opacity: 0.7; }
          .brain-center { animation: brain-pulse 3s ease-in-out infinite; transform-origin: center; }
          .progress-ring { stroke: #21ffd7; stroke-width: 3; fill: none; animation: learning-progress 5s ease-out infinite; }
        `}</style>
      </defs>
      <g className="brain-center">
        <circle cx="150" cy="150" r="35" fill="url(#brain-core-gradient)" opacity="0.4" />
        <circle cx="150" cy="150" r="25" fill="none" stroke="url(#neural-path-gradient)" strokeWidth="2" opacity="0.8" />
        <circle cx="150" cy="150" r="15" fill="#21ffd7" opacity="0.6" />
        <path d="M130 140 Q150 130 170 140 Q160 150 150 145 Q140 150 130 140" stroke="url(#neural-path-gradient)" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M130 160 Q150 170 170 160 Q160 150 150 155 Q140 150 130 160" stroke="url(#neural-path-gradient)" strokeWidth="1.5" fill="none" opacity="0.7" />
      </g>
      <path d="M150 150 m-60,0 a60,60 0 0,1 120,0 a60,60 0 0,1 -120,0" className="neural-pathway" style={{ animationDelay: "0s" }} />
      <path d="M150 150 m-45,0 a45,45 0 0,0 90,0 a45,45 0 0,0 -90,0" className="neural-pathway" style={{ animationDelay: "0.8s" }} />
      <path d="M150 150 m-75,0 a75,75 0 0,1 150,0 a75,75 0 0,1 -150,0" className="neural-pathway" style={{ animationDelay: "1.6s" }} />
      <circle cx="90" cy="150" r="2" className="synapse-node" style={{ animationDelay: "0s" }} />
      <circle cx="210" cy="150" r="2" className="synapse-node" style={{ animationDelay: "0.3s" }} />
      <circle cx="150" cy="75" r="2" className="synapse-node" style={{ animationDelay: "0.6s" }} />
      <circle cx="150" cy="225" r="2" className="synapse-node" style={{ animationDelay: "0.9s" }} />
      <circle cx="120" cy="105" r="2" className="synapse-node" style={{ animationDelay: "1.2s" }} />
      <circle cx="180" cy="195" r="2" className="synapse-node" style={{ animationDelay: "1.5s" }} />
      <circle cx="180" cy="105" r="2" className="synapse-node" style={{ animationDelay: "1.8s" }} />
      <circle cx="120" cy="195" r="2" className="synapse-node" style={{ animationDelay: "2.1s" }} />
      <g>
        <circle cx="0" cy="0" r="1.5" className="knowledge-particle" style={{ animationDelay: "0s" }}>
          <animateMotion dur="4s" repeatCount="indefinite">
            <path d="M90 150 Q150 100 210 150" />
          </animateMotion>
        </circle>
        <circle cx="0" cy="0" r="1.5" className="knowledge-particle" style={{ animationDelay: "1s" }}>
          <animateMotion dur="4s" repeatCount="indefinite">
            <path d="M150 75 Q200 150 150 225" />
          </animateMotion>
        </circle>
        <circle cx="0" cy="0" r="1.5" className="knowledge-particle" style={{ animationDelay: "2s" }}>
          <animateMotion dur="4s" repeatCount="indefinite">
            <path d="M210 150 Q150 200 90 150" />
          </animateMotion>
        </circle>
      </g>
      <circle cx="150" cy="150" r="50" className="progress-ring" />
      <g opacity="0.7">
        <rect x="40" y="60" width="20" height="15" rx="2" fill="#21ffd7" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="240" y="60" width="20" height="15" rx="2" fill="#0040ff" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.7s" repeatCount="indefinite" />
        </rect>
        <rect x="40" y="225" width="20" height="15" rx="2" fill="#21ffd7" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.3s" repeatCount="indefinite" />
        </rect>
        <rect x="240" y="225" width="20" height="15" rx="2" fill="#0040ff" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.9s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="85" fill="#21ffd7" fontSize="8" opacity="0.8">
          Memory
        </text>
        <text x="250" y="85" fill="#0040ff" fontSize="8" opacity="0.8">
          Pattern
        </text>
        <text x="50" y="255" fill="#21ffd7" fontSize="8" opacity="0.8">
          Context
        </text>
        <text x="250" y="255" fill="#0040ff" fontSize="8" opacity="0.8">
          Logic
        </text>
      </g>
      <g opacity="0.6">
        <path d="M20 150 Q50 130 90 150" stroke="#21ffd7" strokeWidth="1" fill="none" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M210 150 Q250 130 280 150" stroke="#21ffd7" strokeWidth="1" fill="none" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M150 20 Q130 50 150 90" stroke="#21ffd7" strokeWidth="1" fill="none" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.8s" repeatCount="indefinite" />
        </path>
        <path d="M150 210 Q170 250 150 280" stroke="#21ffd7" strokeWidth="1" fill="none" strokeDasharray="3,3">
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="2.4s" repeatCount="indefinite" />
        </path>
      </g>
      <g>
        <text x="150" y="30" textAnchor="middle" fill="#21ffd7" fontSize="12" fontWeight="bold" opacity="0.9">
          {" "}Sürekli Öğrenme{" "}
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </text>
        <text x="30" y="150" textAnchor="middle" fill="#21ffd7" fontSize="9" opacity="0.7" transform="rotate(-90 30 150)">
          Veri Girişi
        </text>
        <text x="270" y="150" textAnchor="middle" fill="#0040ff" fontSize="9" opacity="0.7" transform="rotate(90 270 150)">
          Davranış Çıkışı
        </text>
      </g>
      <g opacity="0.8">
        <rect x="10" y="270" width="80" height="4" fill="none" stroke="#21ffd7" strokeWidth="1" />
        <rect x="10" y="270" width="64" height="4" fill="#21ffd7" opacity="0.7">
          <animate attributeName="width" values="20;64;20" dur="5s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="290" textAnchor="middle" fill="#21ffd7" fontSize="8" opacity="0.7">
          Adaptasyon: %80
        </text>
        <rect x="210" y="270" width="80" height="4" fill="none" stroke="#0040ff" strokeWidth="1" />
        <rect x="210" y="270" width="72" height="4" fill="#0040ff" opacity="0.7">
          <animate attributeName="width" values="30;72;30" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <text x="250" y="290" textAnchor="middle" fill="#0040ff" fontSize="8" opacity="0.7">
          Verimlilik: %90
        </text>
      </g>
      <g opacity="0.5">
        <line x1="150" y1="150" x2="100" y2="100" stroke="#21ffd7" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="150" y1="150" x2="200" y2="100" stroke="#21ffd7" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="150" y1="150" x2="100" y2="200" stroke="#21ffd7" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="150" y1="150" x2="200" y2="200" stroke="#21ffd7" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="100" cy="100" r="3" fill="#21ffd7" opacity="0.6" />
        <circle cx="200" cy="100" r="3" fill="#21ffd7" opacity="0.6" />
        <circle cx="100" cy="200" r="3" fill="#21ffd7" opacity="0.6" />
        <circle cx="200" cy="200" r="3" fill="#21ffd7" opacity="0.6" />
        <text x="100" y="115" textAnchor="middle" fill="#21ffd7" fontSize="7" opacity="0.6">
          Deneyim 1
        </text>
        <text x="200" y="115" textAnchor="middle" fill="#21ffd7" fontSize="7" opacity="0.6">
          Deneyim 2
        </text>
        <text x="100" y="215" textAnchor="middle" fill="#21ffd7" fontSize="7" opacity="0.6">
          Deneyim 3
        </text>
        <text x="200" y="215" textAnchor="middle" fill="#21ffd7" fontSize="7" opacity="0.6">
          Deneyim 4
        </text>
      </g>
    </svg>
  );
}

export function SecuritySVG() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-48 md:h-64">
      <defs>
        <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0040ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="energy-field" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0.3" />
          <stop offset="70%" stopColor="#0040ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0.9" />
        </radialGradient>
        <linearGradient id="data-stream" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#21ffd7" stopOpacity="0" />
          <stop offset="50%" stopColor="#21ffd7" stopOpacity="1" />
          <stop offset="100%" stopColor="#21ffd7" stopOpacity="0" />
        </linearGradient>
        <filter id="security-glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="security-grid" patternUnits="userSpaceOnUse" width="15" height="15">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#21ffd7" strokeWidth="0.5" opacity="0.4" />
        </pattern>
        <style>{`
          @keyframes shield-pulse { 0% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.02); opacity: 1; } 100% { transform: scale(1); opacity: 0.8; } }
          @keyframes energy-flow { 0% { stroke-dashoffset: 100; opacity: 0.3; } 50% { opacity: 1; } 100% { stroke-dashoffset: -100; opacity: 0.3; } }
          @keyframes data-encryption { 0% { transform: translateX(-20px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(20px); opacity: 0; } }
          @keyframes lock-secure { 0% { fill: #666; } 50% { fill: #21ffd7; } 100% { fill: #666; } }
          @keyframes barrier-activate { 0% { r: 0; opacity: 0; } 50% { r: 10; opacity: 0.8; } 100% { r: 20; opacity: 0; } }
          .main-shield { animation: shield-pulse 3s ease-in-out infinite; filter: url(#security-glow); transform-origin: center; }
          .energy-barrier { stroke: url(#shield-gradient); stroke-width: 2; fill: none; stroke-dasharray: 10 5; animation: energy-flow 2s linear infinite; }
          .encryption-particle { animation: data-encryption 4s linear infinite; fill: #21ffd7; }
          .security-lock { animation: lock-secure 3s ease-in-out infinite; }
          .threat-barrier { stroke: #ff4444; stroke-width: 2; fill: none; animation: barrier-activate 2s ease-out infinite; }
        `}</style>
      </defs>
      <g className="main-shield">
        <path d="M150 50 L110 80 V140 C110 180 150 200 150 200 C150 200 190 180 190 140 V80 Z" fill="url(#shield-gradient)" opacity="0.3" />
        <path d="M150 50 L110 80 V140 C110 180 150 200 150 200 C150 200 190 180 190 140 V80 Z" stroke="url(#shield-gradient)" strokeWidth="3" fill="none" />
        <path d="M125 90 L175 90 M125 110 L175 110 M125 130 L175 130 M125 150 L175 150" stroke="#21ffd7" strokeWidth="1" opacity="0.5" />
      </g>
      <circle cx="150" cy="125" r="60" className="energy-barrier" style={{ animationDelay: "0s" }} />
      <circle cx="150" cy="125" r="75" className="energy-barrier" style={{ animationDelay: "0.7s" }} />
      <circle cx="150" cy="125" r="90" className="energy-barrier" style={{ animationDelay: "1.4s" }} />
      <circle cx="150" cy="125" r="15" fill="url(#energy-field)" opacity="0.6" />
      <circle cx="150" cy="125" r="8" fill="#21ffd7" opacity="0.8">
        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
      </circle>
      <g transform="translate(130, 115)">
        <rect x="-5" y="-5" width="10" height="8" rx="1" className="security-lock" />
        <path d="M-3 -2 Q0 -8 3 -2" stroke="#21ffd7" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="2" fill="#21ffd7" opacity="0.8" />
      </g>
      <g transform="translate(170, 115)">
        <rect x="-5" y="-5" width="10" height="8" rx="1" className="security-lock" />
        <path d="M-3 -2 Q0 -8 3 -2" stroke="#21ffd7" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="2" fill="#21ffd7" opacity="0.8" />
      </g>
      <g>
        <rect x="0" y="0" width="4" height="4" className="encryption-particle" style={{ animationDelay: "0s" }}>
          <animateMotion dur="5s" repeatCount="indefinite">
            <path d="M80 125 Q150 100 220 125 Q150 150 80 125" />
          </animateMotion>
        </rect>
        <circle cx="0" cy="0" r="2" className="encryption-particle" style={{ animationDelay: "1s" }}>
          <animateMotion dur="4s" repeatCount="indefinite">
            <path d="M125 80 Q150 125 175 80 Q150 125 125 80" />
          </animateMotion>
        </circle>
        <rect x="0" y="0" width="3" height="3" className="encryption-particle" style={{ animationDelay: "2s" }}>
          <animateMotion dur="6s" repeatCount="indefinite">
            <path d="M200 125 Q175 100 150 125 Q125 150 100 125" />
          </animateMotion>
        </rect>
      </g>
      <g opacity="0.7">
        <circle cx="80" cy="80" r="0" className="threat-barrier" style={{ animationDelay: "0s" }} />
        <circle cx="220" cy="170" r="0" className="threat-barrier" style={{ animationDelay: "0.5s" }} />
        <circle cx="220" cy="80" r="0" className="threat-barrier" style={{ animationDelay: "1s" }} />
        <circle cx="80" cy="170" r="0" className="threat-barrier" style={{ animationDelay: "1.5s" }} />
      </g>
      <rect x="90" y="70" width="120" height="110" fill="url(#security-grid)" opacity="0.3" />
      <g opacity="0.6">
        <path d="M50 125 Q100 115 150 125" stroke="url(#data-stream)" strokeWidth="2" fill="none">
          <animate attributeName="d" values="M50 125 Q100 115 150 125;M50 125 Q100 135 150 125;M50 125 Q100 115 150 125" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M150 125 Q200 115 250 125" stroke="url(#data-stream)" strokeWidth="2" fill="none">
          <animate attributeName="d" values="M150 125 Q200 115 250 125;M150 125 Q200 135 250 125;M150 125 Q200 115 250 125" dur="3.2s" repeatCount="indefinite" />
        </path>
      </g>
      <g>
        <text x="60" y="40" fill="#21ffd7" fontSize="10" opacity="0.8">
          {" "}Güvenlik Seviyesi: MAKSIMUM{" "}
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </text>
        <rect x="60" y="45" width="100" height="6" fill="none" stroke="#21ffd7" strokeWidth="1" />
        <rect x="60" y="45" width="95" height="6" fill="#21ffd7" opacity="0.8">
          <animate attributeName="width" values="70;95;70" dur="4s" repeatCount="indefinite" />
        </rect>
      </g>
      <g opacity="0.8">
        <rect x="50" y="220" width="200" height="30" fill="none" stroke="#21ffd7" strokeWidth="1" rx="5" />
        <rect x="52" y="222" width="196" height="26" fill="url(#energy-field)" opacity="0.2" rx="4" />
        <text x="150" y="240" textAnchor="middle" fill="#21ffd7" fontSize="12" fontWeight="bold">
          FIREWALL ACTIVE
        </text>
        <circle cx="70" cy="235" r="1" fill="#21ffd7" opacity="0.8">
          <animate attributeName="cx" values="70;230;70" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="235" r="1" fill="#0040ff" opacity="0.8">
          <animate attributeName="cx" values="80;220;80" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
      <g opacity="0.7">
        <path d="M40 180 L50 180 M50 175 L55 175 M50 185 L55 185" stroke="#21ffd7" strokeWidth="2" />
        <circle cx="45" cy="180" r="3" fill="none" stroke="#21ffd7" strokeWidth="1.5" />
        <text x="40" y="200" fill="#21ffd7" fontSize="8" opacity="0.8">
          256-bit AES
        </text>
        <path d="M250 180 L260 180 M260 175 L265 175 M260 185 L265 185" stroke="#0040ff" strokeWidth="2" />
        <circle cx="255" cy="180" r="3" fill="none" stroke="#0040ff" strokeWidth="1.5" />
        <text x="245" y="200" fill="#0040ff" fontSize="8" opacity="0.8">
          RSA-2048
        </text>
      </g>
      <g opacity="0.6">
        <circle cx="150" cy="125" r="105" fill="none" stroke="#21ffd7" strokeWidth="1" strokeDasharray="5,10">
          <animateTransform attributeName="transform" type="rotate" values="0 150 125;360 150 125" dur="20s" repeatCount="indefinite" />
        </circle>
        <line x1="150" y1="125" x2="150" y2="20" stroke="#21ffd7" strokeWidth="2" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" values="0 150 125;360 150 125" dur="4s" repeatCount="indefinite" />
        </line>
      </g>
      <g>
        <circle cx="40" cy="260" r="5" fill="#00ff00" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="55" y="265" fill="#00ff00" fontSize="10" opacity="0.8">
          Sistem Güvenli
        </text>
        <circle cx="200" cy="260" r="5" fill="#21ffd7" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="215" y="265" fill="#21ffd7" fontSize="10" opacity="0.8">
          Sürekli İzleme
        </text>
      </g>
    </svg>
  );
}

/* =============================
   HERO – HOLOGRAM (Eksik olanı tamamlandı)
   ============================= */
export function HeroHologramSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor={brand.primary} stopOpacity="0.8" />
          <stop offset="70%" stopColor={brand.secondary} stopOpacity="0.4" />
          <stop offset="100%" stopColor={brand.primary} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={brand.primary} />
          <stop offset="100%" stopColor={brand.secondary} />
        </linearGradient>
        <filter id="hero-blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <style>{`
          @keyframes pulse { 0%{ opacity:.6; } 50%{ opacity:1; } 100%{ opacity:.6; } }
          @keyframes dash { 0%{ stroke-dashoffset: 200; } 100%{ stroke-dashoffset: 0; } }
          @keyframes float { 0%{ transform: translateY(0px); } 50%{ transform: translateY(-6px);} 100%{ transform: translateY(0px);} }
        `}</style>
      </defs>
      <g opacity="0.35">
        <ellipse cx="200" cy="340" rx="120" ry="26" fill="url(#hero-glow)" />
      </g>
      <g style={{ animation: "float 5s ease-in-out infinite" }}>
        <circle cx="200" cy="200" r="90" fill="none" stroke="url(#hero-stroke)" strokeWidth="2.5" strokeDasharray="6 10" style={{ animation: "dash 6s linear infinite" }} />
        <circle cx="200" cy="200" r="60" fill="none" stroke="url(#hero-stroke)" strokeWidth="1.5" strokeDasharray="4 8" style={{ animation: "dash 4s linear infinite" }} />
        <circle cx="200" cy="200" r="6" fill={brand.primary} />
        <g>
          <path d="M140 210 Q200 150 260 210" stroke={brand.primary} strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M155 225 Q200 175 245 225" stroke={brand.secondary} strokeWidth="1.5" fill="none" opacity="0.6" />
        </g>
        <g filter="url(#hero-blur)">
          <circle cx="160" cy="180" r="3" fill={brand.primary} style={{ animation: "pulse 2.2s ease-in-out infinite" }} />
          <circle cx="240" cy="180" r="3" fill={brand.primary} style={{ animation: "pulse 2.2s .3s ease-in-out infinite" }} />
          <circle cx="200" cy="240" r="3" fill={brand.secondary} style={{ animation: "pulse 2.2s .6s ease-in-out infinite" }} />
        </g>
        <text x="200" y="310" textAnchor="middle" fill={brand.primary} opacity="0.8" fontSize="12">
          Holografik Projeksiyon
        </text>
      </g>
    </svg>
  );
}


/* =====================================================
   Yardımcı Hook'lar
   ===================================================== */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
};

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);
  useEffect(() => {
    let lastScrollY = 0;
    const mainScrollContainer = document.getElementById("main-scroll-container");
    const updateScrollDirection = () => {
      if (!mainScrollContainer) return;
      const scrollY = mainScrollContainer.scrollTop;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY <= 0 ? 0 : scrollY;
    };
    mainScrollContainer?.addEventListener("scroll", updateScrollDirection);
    return () => mainScrollContainer?.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);
  return scrollDirection;
};

/* =====================================================
   Canvas 1: Yıldızlı Nöral Arka Plan
   ===================================================== */
function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const starCount = Math.floor(window.innerWidth / 4);
    const stars: { x: number; y: number; r: number; o: number }[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 0.9 + 0.2,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const particleCount = Math.floor(window.innerWidth / 20);
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.7,
        vy: (Math.random() - 0.5) * 1.7,
      });
    }

    let animationFrameId = 0;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = brand.dark;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // yıldızlar
      for (let i = 0; i < starCount; i++) {
        const s = stars[i];
        ctx.globalAlpha = s.o;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = brand.primary;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;

      // parçacıklar + bağlantılar
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        for (let j = i + 1; j < particleCount; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(33,255,215,${1 - (dist / 130) * 0.8})`;
            ctx.lineWidth = 2 - dist / 120;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.7, 0, 2 * Math.PI);
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = brand.primary;
        ctx.shadowColor = brand.primary;
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: brand.dark }}
    />
  );
}

/* =====================================================
   Canvas 2: Glow spotlight (mouse takipli)
   ===================================================== */
function SpotlightCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        600
      );
      gradient.addColorStop(0, "rgba(33,255,215,0.15)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [mouse.x, mouse.y]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden
    />
  );
}

/* =====================================================
   İçerik – Bölümler
   ===================================================== */
const features = [
  {
    title: "Yüz Tanıma",
    desc:
      "Sistemi başlatmak için şifreye gerek kalmadan yüz tanıma ile giriş yapın. Arcadia, sizi ve diğer yetkili kullanıcıları anında tanır, tekrar eden ziyaretçiler için kişiselleştirilmiş karşılama sunar ve binlerce kullanıcıyı yönetebilecek ölçeklenebilir bir altyapıya sahiptir.",
    visual: <FaceRecognitionSVG />,
  },
  {
    title: "Holografik Asistan",
    desc:
      "React + Three.js ile geliştirilmiş gerçekçi ve interaktif 3D avatar ile iletişim kurun. Duygusal ifadeler, jest ve mimiklerle daha insansı bir deneyim yaşayın. Hologram efektleri sayesinde fuar, sunum ve etkinliklerde çarpıcı bir varlık olarak öne çıkın.",
    visual: <HolographicHumanSVG />,
  },
  {
    title: "Duygu Analizi",
    desc:
      "Arcadia sadece sizi duymakla kalmaz, aynı zamanda hisseder. Kamera ve ses analizi ile duygusal durumunuzu tespit eder, yanıtlarını duygularınıza göre uyarlar ve kişiselleştirilmiş öneriler sunar.",
    visual: <EmotionDetectionSVG />,
  },
  {
    title: "Yapay Zekâ Tabanlı Chatbot",
    desc:
      "PyTorch tabanlı doğal dil işleme (NLP) motoru ve özelleştirilmiş niyet sistemi ile sıradan bir bottan çok daha fazlası. Niyetlerinizi anlar, ihtiyaçlarınıza göre fonksiyonları çağırır ve çoklu dil desteği sunar.",
    visual: <AiChatbotSVG />,
  },
  {
    title: "Cihaz Kontrolü",
    desc:
      "Akıllı evinizdeki ışıklar, klima, medya oynatıcılar gibi cihazlardan bilgisayarınızdaki uygulamalara kadar her şeyi sesli komutlarla yönetin. Arcadia, IoT entegrasyonuna açık dijital ekosisteminizin merkezidir.",
    visual: <DeviceControlSVG />,
  },
  {
    title: "Kişisel Davranış Öğrenme",
    desc:
      "Arcadia zamanla sizi tanır, günlük rutinlerinizi öğrenerek otomatik hatırlatmalar ve alışkanlıklarınıza göre proaktif öneriler sunar. Gelecekteki gelişmiş yapay zeka profillemesi için güçlü bir temel oluşturur.",
    visual: <LearningSVG />,
  },
  {
    title: "Veri Güvenliği ve Gizlilik",
    desc:
      "Gizliliğiniz önceliğimizdir. Kullanıcı verileri şifrelenmiş olarak saklanır. Yüz tanıma ve ses verileriniz yalnızca cihazda işlenir ve kullanıcı onayı olmadan hiçbir veri paylaşılmaz.",
    visual: <SecuritySVG />,
  },
];

function Header() {
  const scrollDirection = useScrollDirection();
  return (
<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur bg-[#0a0f1a]/60">
  <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
    <a href="#" className="flex items-center gap-3 group">
      <div className="relative h-9 w-9 md:h-10 md:w-10">
        <Image
          src="/cozmodynamics.png"   // public/cozmodynamics-logo.png
          alt="CozmoDynamics logo"
          fill
          priority
          className="object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 drop-shadow-[0_0_14px_rgba(33,255,215,.35)]"
        />
      </div>
      <span className="text-lg font-semibold tracking-wide">CozmoDynamics</span>
    </a>

    <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
      <a href="#features-intro" className="hover:text-white">Özellikleri</a>
      <a href="#donate" className="hover:text-white">Donate</a>
      <a href="#contact" className="hover:text-white">İletişim</a>
      <a
        href="#donate"
        className="ml-2 rounded-xl px-4 py-2 font-medium ring-1 ring-white/10 hover:ring-white/30 transition"
        style={{ background: "linear-gradient(135deg, rgba(33,255,215,0.15), rgba(0,64,255,0.15))" }}
      >
        Destek Ol
      </a>
    </nav>
  </div>
</header>
  );
}

function FeatureSlide({
  index,
  title,
  desc,
  visual,
}: {
  index: number;
  title: string;
  desc: string;
  visual: React.ReactNode;
}) {
  return (
    <section id={`feature-${index + 1}`} className="h-screen w-full flex items-center justify-center p-4 snap-start">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full rounded-3xl border border-white/10 p-8 md:p-12 text-center shadow-2xl backdrop-blur-sm hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,15,26,0.5), rgba(10,15,26,0.4))",
        }}
      >
        <div className="flex justify-center items-center mx-auto mb-6">{visual}</div>
        <div className="text-sm text-white/60">Özellik {index + 1} / 7</div>
        <h3
          className="mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, ${brand.primary}, ${brand.secondary})`,
          }}
        >
          {title}
        </h3>
        <p className="mt-4 text-white/80 md:text-lg max-w-2xl mx-auto">{desc}</p>
      </motion.div>
    </section>
  );
}

function FeatureProgress({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="pointer-events-none fixed bottom-8 left-0 right-0 z-40 flex justify-center">
      <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur px-4 py-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <a
            href={`#feature-${i + 1}`}
            key={i}
            className={`pointer-events-auto size-2.5 rounded-full transition-all duration-300 ${
              activeIndex === i + 2 ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SupportSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");
  const presetAmounts = [50, 100, 250, 500, 1000];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };
  const handleDonate = () => {
    if (status !== "idle" || (!selectedAmount && !customAmount)) return;
    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setSelectedAmount(100);
        setCustomAmount("");
      }, 3000);
    }, 1500);
  };
  const finalAmount = selectedAmount || Number(customAmount) || 0;

  return (
    <section id="support" className="h-screen w-full flex items-center justify-center p-4 snap-start relative">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -left-24 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${brand.primary}1A, ${brand.secondary}12, transparent)`,
          }}
        />
        <div
          className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(closest-side, ${brand.secondary}18, ${brand.primary}12, transparent)`,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid lg:grid-cols-[1fr,400px] gap-8 items-start"
      >
        <div
          className="rounded-3xl p-8 border border-white/10 text-left flex flex-col shadow-2xl backdrop-blur-md h-full hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300"
          style={{
            background: "linear-gradient(145deg, rgba(10, 15, 26, 0.6), rgba(10, 15, 26, 0.5))",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Projeyi Destekleyin</h2>
          <p className="mt-4 text-lg text-white/75">
            Arcadia AI, Teknofest yolculuğunda topluluğun gücüyle büyüyor. Katkılarınızla geleceğin teknolojisini birlikte inşa edelim.
          </p>
          <div className="mt-8">
            <label className="text-sm text-white/80">Destek Tutarını Seçin</label>
            <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-3">
              {presetAmounts.map((p) => (
                <button
                  key={p}
                  onClick={() => handleAmountClick(p)}
                  className={`rounded-lg py-2.5 font-semibold transition-all duration-200 border ${
                    selectedAmount === p
                      ? "bg-cyan-400 text-black border-cyan-400 scale-105"
                      : "bg-black/30 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {p} ₺
                </button>
              ))}
            </div>
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Veya özel bir tutar girin"
              className="mt-4 w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="flex-grow"></div>
          <p className="mt-4 text-xs text-white/50">* Bu bir simülasyonur. Gerçek bir ödeme işlemi yapılmamaktadır.</p>
        </div>
        <div
          className="rounded-3xl p-8 border border-white/10 text-left flex flex-col shadow-2xl backdrop-blur-md h-full hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300"
          style={{
            background: "linear-gradient(145deg, rgba(10, 15, 26, 0.6), rgba(10, 15, 26, 0.5))",
          }}
        >
          <h3 className="text-2xl font-semibold">Ödeme Onayı</h3>
          <div className="my-6 space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Proje Adı:</span>
              <span className="font-semibold">Arcadia AI</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Destek Türü:</span>
              <span className="font-semibold">Teknofest Fonu</span>
            </div>
            <div className="border-t border-white/10 my-3"></div>
            <div className="flex justify-between items-center text-xl">
              <span className="text-white/70">Toplam Tutar:</span>
              <span className="font-bold text-cyan-400">{finalAmount} ₺</span>
            </div>
          </div>
          <button
            onClick={handleDonate}
            disabled={status !== "idle" || finalAmount <= 0}
            className="w-full rounded-xl py-4 font-semibold text-lg transition-all duration-300 flex items-center justify-center text-black disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background:
                status === "success"
                  ? "linear-gradient(135deg, #21ffd7, #18dca9)"
                  : `linear-gradient(135deg, ${brand.primary}, #63f2cf)`,
            }}
          >
            {status === "processing" && "İşleniyor..."}
            {status === "success" && (
              <>
                <CheckCircle className="mr-2" /> Başarılı!
              </>
            )}
            {status === "idle" && "Şimdi Destek Ol"}
          </button>
          <div className="mt-4 flex justify-center items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="w-4 h-4" /> Güvenli Ödeme Simülasyonu
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); 
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Lütfen tüm alanları doldurun.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setStatusMessage("Mesajınız başarıyla gönderildi! Teşekkür ederiz.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("error");
          setStatusMessage("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
      );
  };

  return (
    <section id="contact" className="h-screen w-full flex items-center snap-start">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">İletişime Geçin</h2>
          <p className="mt-4 text-lg text-white/75">
            İşbirliği, mentorluk ve yatırım görüşmeleri için bize yazın. Projemize dair her türlü fikre ve desteğe açığız.
          </p>
          <div className="mt-8 space-y-4 text-white/80">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400" /> info@cozmodynamics.com
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400" /> +90 (534) 216 84 51
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400" /> İstanbul - Beykoz
            </div>
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="rounded-2xl p-6 border border-white/10 grid gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(10,15,26,0.5), rgba(10,15,26,0.4))",
          }}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Adınız Soyadınız"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="E-posta Adresiniz"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Mesajınız..."
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg py-3 font-semibold text-black shadow-lg transition-opacity disabled:opacity-60"
            style={{ background: `linear-gradient(135deg, ${brand.primary}, #63f2cf)` }}
          >
            {status === "sending" ? "Gönderiliyor..." : "Mesajı Gönder"}
          </button>
          {statusMessage && (
            <p
              className={`text-sm text-center ${
                status === "success"
                  ? "text-green-400"
                  : status === "error"
                  ? "text-red-400"
                  : "text-white/70"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

/* =====================================================
   Hero Animasyon Variantları
   ===================================================== */
const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ArcadiaLandingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "visible"; 

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const { scrollTop, clientHeight } = container;
      const index = Math.round(scrollTop / clientHeight);
      setActiveIndex(index);
    };
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = originalOverflow;
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const x = useSpring(mouse.x, { stiffness: 300, damping: 50 });
  const y = useSpring(mouse.y, { stiffness: 300, damping: 50 });
  const rotateX = useTransform(y, [0, typeof window !== "undefined" ? window.innerHeight : 1], [10, -10]);
  const rotateY = useTransform(x, [0, typeof window !== "undefined" ? window.innerWidth : 1], [-10, 10]);

  return (
    <>
      <NeuralBackground />
      <SpotlightCanvas />
      <div
        id="main-scroll-container"
        ref={scrollContainerRef}
        className="h-screen text-white scroll-smooth overflow-y-scroll no-scrollbar relative z-10 snap-y snap-mandatory"
      >
        <Header />
        <section className="h-screen w-full flex items-center snap-start">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={heroVariants} initial="hidden" animate="visible">
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                Yapay Zekânın <br />
                Yeni Yüzü<br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${brand.primary}, ${brand.secondary})` }}
                >
                  {" "}Arcadia AI{" "}
                </span>
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-6 text-lg text-white/80 max-w-xl">
                Sizi tanıyan, anlayan ve hayatınıza adapte olan holografik bir yol arkadaşı. Teknofest için geliştirilen yerli yapay zekâ projesi.
              </motion.p>
              <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
                <a
                  href="#features-intro"
                  className="rounded-xl px-6 py-3 font-semibold text-black shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${brand.primary}, #63f2cf)` }}
                >
                  Özellikleri Keşfet
                </a>
                <a className="rounded-xl px-6 py-3 font-semibold ring-1 ring-white/20 hover:ring-white/40 transition-all" href="#support">
                  Projeyi Destekle
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-80 w-80 md:h-96 md:w-96 mx-auto"
            >
              <HeroHologramSVG />
            </motion.div>
          </div>
        </section>

        <section id="features-intro" className="h-screen w-full flex items-center justify-center p-4 snap-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl"
          >
          <h2 className="text-4xl md:text-5xl font-bold">{"Arcadia'nın 7 Gücü"}</h2>
          <p className="mt-4 text-lg text-white/70">
          {"Arcadia'yı sıradan bir asistandan ayıran, onu geleceğin teknolojisi yapan temel yeteneklerini keşfetmek için aşağı kaydırın."}
            </p>
            <div className="mt-8">
              <svg width="40" height="60" viewBox="0 0 40 60" className="mx-auto">
                <path d="M20 10 V50" stroke={brand.primary} strokeWidth="2" strokeLinecap="round" />
                <path d="M10 40 L20 50 L30 40" stroke={brand.primary} strokeWidth="2" fill="none" strokeLinecap="round" />
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="1.5s" repeatCount="indefinite" />
              </svg>
            </div>
          </motion.div>
        </section>

        {features.map((f, i) => (
          <FeatureSlide key={f.title} index={i} title={f.title} desc={f.desc} visual={f.visual} />
        ))}
        <SupportSection />
        <ContactSection />

        <footer className="h-[30vh] w-full flex items-center border-t border-white/5 snap-start">
          <div className="mx-auto max-w-7xl px-6 w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div>© {new Date().getFullYear()} Arcadia AI Projesi — Tüm hakları saklıdır.</div>
            <div className="flex items-center gap-4">
              <a href="#features-intro" className="hover:text-white">
                Özellikler
              </a>
              <a href="#support" className="hover:text-white">
                Destek Ol
              </a>
              <a href="#contact" className="hover:text-white">
                İletişim
              </a>
            </div>
          </div>
        </footer>
        {activeIndex > 1 && activeIndex < 9 && <FeatureProgress activeIndex={activeIndex} />}
      </div>
    </>
  );
}