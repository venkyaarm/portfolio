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

/* ------------------------------------------------------------ */
/*                    BACKGROUND ANIMATION                       */
/* ------------------------------------------------------------ */

const particleFloat = keyframes`
  0% { transform: translateY(0); opacity: 0.25; }
  50% { opacity: 0.7; }
  100% { transform: translateY(-120px); opacity: 0; }
`;

/* ------------------------------------------------------------ */
/*                     SOFT UI ANIMATIONS                        */
/* ------------------------------------------------------------ */

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const titleGlow = keyframes`
  0% { text-shadow: 0 0 5px rgba(0,255,255,0.5); }
  50% { text-shadow: 0 0 20px #00eaff, 0 0 35px #00ccff; }
  100% { text-shadow: 0 0 5px rgba(0,255,255,0.5); }
`;

/* ------------------------------------------------------------ */
/*                          SECTION                              */
/* ------------------------------------------------------------ */

const Section = styled.section`
  min-height: 10vh;
  padding: 6rem 10%;
  background: linear-gradient(135deg, #050b14, #020611);
  color: #f0f8ff;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 4rem 6%;
  }
`;

/* ------------------------------------------------------------ */
/*                    BACKGROUND PARTICLES                       */
/* ------------------------------------------------------------ */

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
  pointer-events: none;
`;

/* ------------------------------------------------------------ */
/*                          TITLE                                */
/* ------------------------------------------------------------ */

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  color: #00eaff;
  margin-bottom: 0.6rem;
  letter-spacing: 2px;
  animation: ${titleGlow} 3s infinite;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #b0e0e6;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

/* ------------------------------------------------------------ */
/*                     CONTACT DETAILS                           */
/* ------------------------------------------------------------ */

const ContactDetails = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  position: relative;
  z-index: 1;
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
  transition: 0.3s ease;
  cursor: pointer;

  svg {
    font-size: 1.8rem;
    transition: 0.3s ease;
  }

  a, span {
    font-size: 1.2rem;
    color: #dffcff;
    transition: 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
  }

  /* ---------------- PLATFORM COLORS ---------------- */

  &[data-platform="email"]:hover {
    border-color: #ffd700;

    svg {
      color: #ffd700;
    }

    a {
      color: #ffd700;
    }
  }

  &[data-platform="phone"]:hover {
    border-color: blue;

    svg {
      color: blue;
    }

    span {
      color: blue;
    }
  }

  &[data-platform="whatsapp"]:hover {
    border-color: #25d366;

    svg {
      color: #25d366;
    }

    a {
      color: #86efac;
    }
  }



  @media (max-width: 480px) {
    min-width: 100%;
    padding: 0.9rem 1.2rem;
    a, span {
      font-size: 1rem;
    }
  }
`;

/* ------------------------------------------------------------ */
/*                       SOCIAL ICONS                            */
/* ------------------------------------------------------------ */

const IconGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
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
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }

  &[data-brand="github"]:hover {
    color: #ffffff;
    border-color: #ffffff;
  }

  &[data-brand="linkedin"]:hover {
    color: #0a66c2;
    border-color: #0a66c2;
  }

  &[data-brand="instagram"]:hover {
    color: #c13584;
    border-color: #c13584;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
`;

/* ------------------------------------------------------------ */
/*                         COMPONENT                             */
/* ------------------------------------------------------------ */

export default function Contact() {
  return (
    <Section id="contact">
      {/* Background particles */}
      {[...Array(12)].map((_, i) => (
        <Particle
          key={i}
          $size={4 + Math.random() * 6}
          $top={Math.random() * 100}
          $left={Math.random() * 100}
          $duration={6 + Math.random() * 6}
        />
      ))}

      <Title>Connect & Collaborate</Title>
      <Subtitle>Ready to start a project? Let's talk!</Subtitle>

      <ContactDetails>
        <DetailBox data-platform="email">
  <FaEnvelope />
  <a href="mailto:venkyaam@mail.com">venkyaam@mail.com</a>
</DetailBox>

<DetailBox data-platform="phone">
  <FaPhone />
  <span>+91 8125522139</span>
</DetailBox>

<DetailBox data-platform="whatsapp">
  <FaWhatsapp />
  <a
    href="https://wa.me/918125522139"
    target="_blank"
    rel="noreferrer"
  >
    Chat on WhatsApp
  </a>
</DetailBox>

      </ContactDetails>

      <IconGrid>
        <IconWrapper
          data-brand="github"
          href="https://github.com/venkyaarm"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </IconWrapper>

        <IconWrapper
          data-brand="linkedin"
          href="https://linkedin.com/in/venkatesh-kuncham-120531307"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </IconWrapper>

        <IconWrapper
          data-brand="instagram"
          href="https://instagram.com/venky__x8"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </IconWrapper>
      </IconGrid>
    </Section>
  );
}
