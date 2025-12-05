import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

/* SOFT ANIMATIONS */
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-7px) rotate(-1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const sparkle = keyframes`
  0% { opacity: 0; transform: scale(0.6); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.6); }
`;

const titleGlow = keyframes`
  0% { text-shadow: 0 0 5px rgba(0,255,255,0.5); }
  50% { text-shadow: 0 0 20px #00eaff, 0 0 35px #00ccff; }
  100% { text-shadow: 0 0 5px rgba(0,255,255,0.5); }
`;

const borderPulse = keyframes`
  0% { box-shadow: 0 0 15px rgba(0,255,255,0.4); }
  50% { box-shadow: 0 0 30px rgba(0,255,255,0.8); }
  100% { box-shadow: 0 0 15px rgba(0,255,255,0.4); }
`;

/* SECTION */
const Section = styled.section`
  padding: 6rem 8%;
  background: #000a12;
  color: #f0f8ff;
  text-align: center;
  margin: 4rem auto;
  position: relative;
  overflow: hidden;
  max-width: 1100px;
  border-radius: 20px;
  border: 1px solid rgba(0,255,255,0.1);
  animation: ${borderPulse} 4s infinite ease-in-out;

  @media (max-width: 480px) {
    padding: 4rem 6%;
    margin: 2rem auto;
  }
`;

/* TITLE */
const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #00eaff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${titleGlow} 3s infinite ease-in-out;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #b0e0e6;
  margin-bottom: 3.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

/* SPARKLES */
const Sparkle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #00eaff 50%, transparent);
  border-radius: 50%;
  animation: ${sparkle} 4s infinite;

  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
    opacity: 0.5;
  }

  &:nth-child(1) { top: 10%; left: 18%; }
  &:nth-child(2) { top: 60%; right: 12%; }
  &:nth-child(3) { bottom: 10%; left: 45%; }
  &:nth-child(4) { top: 75%; right: 65%; }
`;

/* CONTACT DETAILS BOXES */
const ContactDetails = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const DetailBox = styled.div`
  background: rgba(0, 0, 0, 0.65);
  padding: 1rem 1.8rem;
  border-radius: 12px;
  min-width: 280px;
  border: 1px solid rgba(0,255,255,0.2);
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    border-color: #00eaff;
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    min-width: 100%;
    padding: 0.9rem 1.2rem;
    gap: 0.8rem;
  }

  svg {
    font-size: 1.8rem;
    color: #00eaff;

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  a, span {
    font-size: 1.2rem;
    color: #dffcff;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

/* SOCIAL ICONS */
const IconGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const IconWrapper = styled.a`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid rgba(0,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  color: #00eaff;
  font-size: 2rem;
  animation: ${float} 4s infinite;

  &:hover {
    transform: scale(1.15);
    color: #ffcc00;
    border-color: #ffcc00;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
`;

/* COMPONENT */
export default function Contact() {
  return (
    <Section id="contact">
      <Sparkle /><Sparkle /><Sparkle /><Sparkle />

      <Title>Connect & Collaborate</Title>

      {/* FIXED → replaced smart apostrophe */}
      <Subtitle>Ready to start a project? Let's talk!</Subtitle>

      <ContactDetails>
        <DetailBox>
          <FaEnvelope />
          <a href="mailto:venkyaam@mail.com">venkyaam@mail.com</a>
        </DetailBox>

        <DetailBox>
          <FaPhone />
          <span>+91 8125522139</span>
        </DetailBox>

        <DetailBox>
          <FaWhatsapp />
          <a href="https://wa.me/918125522139" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </DetailBox>
      </ContactDetails>

      <IconGrid>
        <IconWrapper href="https://github.com/venkyaarm" target="_blank" rel="noreferrer"><FaGithub /></IconWrapper>
        <IconWrapper href="https://linkedin.com/in/venkatesh-kuncham-120531307" target="_blank" rel="noreferrer"><FaLinkedin /></IconWrapper>
        <IconWrapper href="https://instagram.com/venky__x8" target="_blank" rel="noreferrer"><FaInstagram /></IconWrapper>
      </IconGrid>
    </Section>
  );
}
