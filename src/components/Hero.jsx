import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

// Floating animation for icons
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Letter hover animation
const letterHover = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.2); }
  100% { transform: translateY(0) scale(1); }
`;

// Color-changing animation for name
const colorAnimation = keyframes`
  0% { color: #ff0000; }
  20% { color: #ffcc00; }
  40% { color: #00ffcc; }
  60% { color: #00ffff; }
  80% { color: #ff00ff; }
  100% { color: #ff0000; }
`;

const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  padding: 0 1.5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.h1`
  font-size: 3rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  color: #00ffff;
  line-height: 1.3;
  margin: 0.3rem 0;

  span {
    display: inline-block;
    margin: 0 2px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &.name-letter {
      animation: ${colorAnimation} 3s linear infinite;
    }

    &:hover {
      animation: ${letterHover} 0.6s ease forwards;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
    flex-wrap: 0; /* ensures text fits small screens nicely */
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: #fff;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: #e0f7fa;
  max-width: 650px;
  margin-top: 1.5rem;
  line-height: 1.6;
  padding: 0 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const IconLink = styled.a`
  font-size: 1.8rem;
  color: #00ffff;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;

  &:hover {
    color: #ffcc00;
    transform: scale(1.3);
  }
`;

export default function Hero() {
  const name = "Kuncham Venkatesh";

  return (
    <HeroSection id="home">
      <TitleWrapper>
        <Line>
          {"Hello, I'm".split("").map((char, i) => (
            <span key={`greet-${i}`}>{char}</span>
          ))}
        </Line>
        <Line>
          {name.split("").map((char, i) => (
            <span key={`name-${i}`} className="name-letter">{char}</span>
          ))}
        </Line>
      </TitleWrapper>

      <Subtitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        BCA Student | AI & Web Developer | Creative Innovator
      </Subtitle>

      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Passionate about building intelligent and interactive web applications. Skilled in React, Node.js, and AI integration, I love transforming ideas into visually appealing, high-performance solutions.
      </Description>

      <SocialIcons>
        <IconLink href="https://github.com/venkyaarm" target="_blank"><FaGithub /></IconLink>
        <IconLink href="https://linkedin.com/in/venkatesh-kuncham-120531307" target="_blank"><FaLinkedin /></IconLink>
        <IconLink href="https://instagram.com/venky__x8" target="_blank"><FaInstagram /></IconLink>
        <IconLink href="mailto:venkyaam@mail.com"><FaEnvelope /></IconLink>
      </SocialIcons>
    </HeroSection>
  );
}
