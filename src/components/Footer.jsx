import React from "react";
import styled, { keyframes } from "styled-components";
import { FaReact } from "react-icons/fa";

// Subtle floating/glow animation for the icon
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const Foot = styled.footer`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #00ffff;
  font-size: 1rem;
  position: relative;
  border-top: 2px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 -5px 15px rgba(0, 255, 255, 0.1);

  a {
    color: #ffcc00;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffff;
    }
  }

  .icon {
    margin-left: 0.5rem;
    vertical-align: middle;
    animation: ${float} 3s ease-in-out infinite;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <Foot>
      Designed & Built by <span style={{ fontWeight: "700" }}>Venky</span> © 2025
      <FaReact className="icon" />
    </Foot>
  );
}
