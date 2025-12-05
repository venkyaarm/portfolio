import React from "react";
import styled, { keyframes } from "styled-components";
import { FaReact } from "react-icons/fa";

/* ------------------------------------------------------------- */
/* PREMIUM ANIMATIONS */
/* ------------------------------------------------------------- */

// Floating animation for the icon
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

// React icon spin-glow animation
const spinGlow = keyframes`
  0% { transform: rotate(0deg); filter: drop-shadow(0 0 3px #00eaff); }
  50% { transform: rotate(180deg); filter: drop-shadow(0 0 10px #00ffff); }
  100% { transform: rotate(360deg); filter: drop-shadow(0 0 3px #00eaff); }
`;

// Neon border animation
const neonBorder = keyframes`
  0% { box-shadow: 0 0 12px #00ffff80; }
  50% { box-shadow: 0 0 25px #00ffff; }
  100% { box-shadow: 0 0 12px #00ffff80; }
`;

// Soft sparkle pop animation
const sparkle = keyframes`
  0% { opacity: 0; transform: scale(0.6) translateY(0); }
  50% { opacity: 1; transform: scale(1.1) translateY(-10px); }
  100% { opacity: 0; transform: scale(0.6) translateY(0); }
`;

/* ------------------------------------------------------------- */
/* FOOTER CONTAINER */
/* ------------------------------------------------------------- */

const Foot = styled.footer`
  position: relative;
  text-align: center;
  padding: 2.2rem;
  background: #000c14;
  color: #aefaff;
  font-size: 1.1rem;
  border-top: 2px solid rgba(0, 255, 255, 0.2);
  animation: ${neonBorder} 4s infinite ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.5px;
  font-weight: 500;

  @media (max-width: 480px) {
    padding: 1.6rem;
    font-size: 0.9rem;
  }
`;

/* ------------------------------------------------------------- */
/* TEXT + ICON */
/* ------------------------------------------------------------- */

const Text = styled.p`
  margin: 0;
  opacity: 0.9;
  transition: 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    opacity: 1;
    color: #00ffff;
    text-shadow: 0 0 12px #00ffff;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ReactIcon = styled(FaReact)`
  font-size: 1.6rem;
  margin-left: 0.4rem;
  animation: ${spinGlow} 6s linear infinite, ${float} 3s ease-in-out infinite;
`;

/* ------------------------------------------------------------- */
/* SPARKLES IN BACKGROUND */
/* ------------------------------------------------------------- */

const Sparkle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, #00eaff, transparent);
  border-radius: 50%;
  opacity: 0.7;
  animation: ${sparkle} 3s infinite ease-in-out;

  &:nth-child(1) { top: 18%; left: 20%; animation-delay: 0s; }
  &:nth-child(2) { bottom: 20%; right: 15%; animation-delay: 1s; }
  &:nth-child(3) { top: 50%; right: 40%; animation-delay: 2s; }

  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
    opacity: 0.5;
  }
`;

/* ------------------------------------------------------------- */
/* COMPONENT */
/* ------------------------------------------------------------- */

export default function Footer() {
  return (
    <Foot>
      {/* Glowing sparkles */}
      <Sparkle />
      <Sparkle />
      <Sparkle />

      <Text>
        Designed & Built by <strong style={{ color: "#ffcc00" }}>Venky</strong> © 2025
        <ReactIcon />
      </Text>
    </Foot>
  );
}
