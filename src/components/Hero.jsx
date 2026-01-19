import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

/* ------------------ ANIMATIONS ------------------ */

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

const nameColorCycle = keyframes`
  0% { color: #ff0040; }
  15% { color: #ff8c00; }
  30% { color: #ffee00; }
  50% { color: #32ff7e; }
  70% { color: #00eaff; }
  85% { color: #8f00ff; }
  100% { color: #ff0040; }
`;

const particleFloat = keyframes`
  0% { transform: translateY(0) rotate(0); opacity: 0.2; }
  50% { opacity: 0.8; }
  100% { transform: translateY(-120px) rotate(360deg); opacity: 0; }
`;

const glowWave = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 0.5; }
  50% { transform: scale(1.1) rotate(180deg); opacity: 0.9; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.5; }
`;

/* ------------------ HERO SECTION ------------------ */

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #050b14, #020611);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;


const Spotlight = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(0, 200, 200, 0.15), transparent);
  border-radius: 50%;
  top: 35%;
  filter: blur(70px);
  z-index: 0;

  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
    top: 45%;
  }
`;

/* ------------------ PARTICLES ------------------ */

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 200, 200, 0.3);
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  top: ${(p) => p.$top}%;
  left: ${(p) => p.$left}%;
  animation: ${particleFloat} ${(p) => p.$duration}s linear infinite;

  @media (max-width: 480px) {
    width: ${(p) => p.$size * 0.55}px;
    height: ${(p) => p.$size * 0.55}px;
  }
`;

/* ------------------ NAME LETTER ------------------ */

const NameLetter = styled.span`
  display: inline-block;
  animation: ${nameColorCycle} 2s linear infinite;
  animation-delay: ${(p) => p.$delay}s;
  margin: 0 3px;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.25);
    transition: 0.3s;
  }

  @media (max-width: 480px) {
    margin: 0 1px;
    font-size: 1.6rem;
  }
`;

/* ------------------ TITLE AREA ------------------ */

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const Line = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 0.15rem 0;
  display: flex;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  &.plain span {
    color: white;
  }
`;

const GlowWaveDiv = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  animation: ${glowWave} 6s linear infinite;

  @media (max-width: 480px) {
    width: 130px;
    height: 130px;
    top: -10px;
  }
`;

/* ------------------ SUBTITLE ------------------ */

const Subtitle = styled(motion.h2)`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  background: linear-gradient(90deg, #00eaff, #ffffff);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 0.3rem;
  }
`;

/* ------------------ DESCRIPTION ------------------ */

const Description = styled(motion.p)`
  font-size: 1rem;
  max-width: 650px;
  margin-top: 0.6rem;
  color: #dffbff;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0 4px;
  }
`;

/* ------------------ SOCIAL ICONS ------------------ */

const SocialContainer = styled.div`
  margin-top: 1.2rem;
  display: flex;
  gap: 1.3rem;
  animation: ${float} 5s ease-in-out infinite;

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
`;

const IconLink = styled.a`
  font-size: 2rem;
  color: #00ffff;
  transition: 0.3s;
  display: flex;

  &:hover {
    transform: scale(1.25);
  }

  &[data-platform="linkedin"]:hover {
    color: #0a66c2;
  }

  &[data-platform="instagram"]:hover {
    color: #b1184eff;
  }

  &[data-platform="whatsapp"]:hover {
    color: #25d366;
  }

  &[data-platform="github"]:hover {
    color: #ffffff;
  }

  &[data-platform="email"]:hover {
    color: #ffd700;
  }

  @media (max-width: 480px) {
    font-size: 1.45rem;
  }
`;


/* ------------------ COMPONENT ------------------ */

export default function Hero() {
  const name = "Kuncham Venkatesh";

  return (
    <HeroSection id="home">
      <Spotlight />

      {[...Array(18)].map((_, i) => (
        <Particle
          key={i}
          $size={6 + Math.random() * 9}
          $top={Math.random() * 100}
          $left={Math.random() * 100}
          $duration={3 + Math.random() * 4}
        />
      ))}

      <TitleWrapper>
        <GlowWaveDiv />

        <Line className="plain">
          {"Hello, I'm".split("").map((ch, i) => (
            <span key={i}>{ch}</span>
          ))}
        </Line>

        <Line className="name">
          {name.split("").map((ch, i) => (
            <NameLetter key={i} $delay={i * 0.12}>
              {ch}
            </NameLetter>
          ))}
        </Line>
      </TitleWrapper>

      <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        BCA Student | AI & Web Developer | Creative Innovator
      </Subtitle>

      <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        Passionate about building intelligent and interactive web applications.
        Skilled in React, Node.js, and AI integration.
      </Description>

      <SocialContainer>
  <IconLink
    data-platform="github"
    href="https://github.com/venkyaarm"
    target="_blank"
  >
    <FaGithub />
  </IconLink>

  <IconLink
    data-platform="linkedin"
    href="https://linkedin.com/in/venkatesh-kuncham-120531307"
    target="_blank"
  >
    <FaLinkedin />
  </IconLink>

  <IconLink
    data-platform="instagram"
    href="https://instagram.com/venky__x8"
    target="_blank"
  >
    <FaInstagram />
  </IconLink>

  <IconLink
    data-platform="email"
    href="mailto:venkyaarm@gmail.com"
  >
    <FaEnvelope />
  </IconLink>

  <IconLink
    data-platform="whatsapp"
    href="https://wa.me/918125522139"
    target="_blank"
  >
    <FaWhatsapp />
  </IconLink>
</SocialContainer>

    </HeroSection>
  );
}
