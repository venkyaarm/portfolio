import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaReact, FaHeart } from "react-icons/fa";

/* ------------------------------------------------------------- */
/* BACKGROUND PARTICLES */
/* ------------------------------------------------------------- */

const particleFloat = keyframes`
  0% { transform: translateY(0); opacity: 0.25; }
  50% { opacity: 0.7; }
  100% { transform: translateY(-90px); opacity: 0; }
`;

/* ------------------------------------------------------------- */
/* SPECIAL ANIMATIONS */
/* ------------------------------------------------------------- */

const heartbeat = keyframes`
  0% { transform: scaleX(0); opacity: 0.3; }
  50% { transform: scaleX(1); opacity: 0.8; }
  100% { transform: scaleX(0); opacity: 0.3; }
`;

const spinGlow = keyframes`
  0% { transform: rotate(0deg); filter: drop-shadow(0 0 3px #00eaff); }
  50% { transform: rotate(180deg); filter: drop-shadow(0 0 10px #00ffff); }
  100% { transform: rotate(360deg); filter: drop-shadow(0 0 3px #00eaff); }
`;

/* ------------------------------------------------------------- */
/* FOOTER */
/* ------------------------------------------------------------- */

const Foot = styled.footer`
  position: relative;
  padding: 2.6rem;
  background: linear-gradient(135deg, #050b14, #020611);
  color: #aefaff;
  text-align: center;
  overflow: hidden;
`;

/* ------------------------------------------------------------- */
/* CURSOR GLOW (SPECIAL) */
/* ------------------------------------------------------------- */

const CursorGlow = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(0,200,200,0.14), transparent 65%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  filter: blur(25px);
`;

/* ------------------------------------------------------------- */
/* HEARTBEAT LINE */
/* ------------------------------------------------------------- */

const PulseLine = styled.div`
  width: 160px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  margin: 0.8rem auto 1.2rem;
  animation: ${heartbeat} 2.2s infinite ease-in-out;
`;

/* ------------------------------------------------------------- */
/* TEXT */
/* ------------------------------------------------------------- */

const Text = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;

  strong {
    color: #ffcc00;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ReactIcon = styled(FaReact)`
  margin-left: 6px;
  animation: ${spinGlow} 6s linear infinite;
`;

const Heart = styled(FaHeart)`
  color: #ff4d4d;
  margin: 0 4px;
  animation: ${heartbeat} 1.8s infinite;
`;

/* ------------------------------------------------------------- */
/* BACKGROUND PARTICLES */
/* ------------------------------------------------------------- */

const Particle = styled.span`
  position: absolute;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  background: rgba(0, 200, 200, 0.28);
  border-radius: 50%;
  top: ${(p) => p.$top}%;
  left: ${(p) => p.$left}%;
  filter: blur(2px);
  animation: ${particleFloat} ${(p) => p.$duration}s linear infinite;
`;

/* ------------------------------------------------------------- */
/* COMPONENT */
/* ------------------------------------------------------------- */

export default function Footer() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Foot>
      {/* Cursor glow */}
      <CursorGlow style={{ left: pos.x, top: pos.y }} />

      {/* Background particles */}
      {[...Array(6)].map((_, i) => (
        <Particle
          key={i}
          $size={4 + Math.random() * 5}
          $top={Math.random() * 100}
          $left={Math.random() * 100}
          $duration={5 + Math.random() * 5}
        />
      ))}

      <PulseLine />

      <Text>
        Designed & Built by <strong>Venky</strong> with <Heart /> using React
        <ReactIcon />
      </Text>
    </Foot>
  );
}
