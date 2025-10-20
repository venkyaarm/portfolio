import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

// 🔹 Section Layout
const Section = styled.section`
  padding: 6rem 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  margin: 3rem auto;
  box-shadow: 0px 0px 35px rgba(0, 255, 255, 0.15);

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

// 🔹 Text Section
const Content = styled.div`
  flex: 1.4;
  color: #fff;
  text-align: left;
  max-width: 650px;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #00ffff;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: #ffcc00;
    margin-top: 10px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #d8e3e7;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(135deg, #00ffff, #ffcc00);
  color: #000;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(135deg, #ffcc00, #00ffff);
    transform: scale(1.05);
    color: #fff;
  }
`;

// 🔹 Profile Section
const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 400px;

  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

const GlowBox = styled(motion.div)`
  width: 380px;
  height: 380px;
  border-radius: 15px;
  border: 4px solid transparent;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    border-color: #00ffff;
    box-shadow: 0 0 30px #00ffff, 0 0 70px #00ffff;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

// ✨ Variants for smooth scroll animation
// ✨ Variants for smooth scroll animation
const fadeUp = {
  hidden: { opacity: 0, y: 60 }, // slightly more y offset for smoother entrance
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, // slower duration
      ease: "easeOut" 
    } 
  },
};


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // 👈 Replay animation when scrolled back
    }
  }, [isInView, controls]);

  return (
    <Section id="about" ref={ref}>
      {/* Left Side — Description */}
      <Content>
        <Title initial="hidden" animate={controls} variants={fadeUp}>
          About Me
        </Title>
        <Description initial="hidden" animate={controls} variants={fadeUp}>
          I'm <strong>Kuncham Venkatesh</strong>, a passionate <strong>BCA student</strong> with a deep interest in
          <strong> AI-driven and API-integrated web applications</strong>. I specialize in building modern, visually engaging,
          and intelligent digital experiences using <strong>React.js</strong> and <strong>Node.js</strong>.
          <br /><br />
          My work blends creativity with technical precision — transforming complex ideas into elegant,
          user-focused interfaces. I enjoy crafting AI-powered applications such as Q&A Systems, Resume Analyzers,
          and Interactive Web Tools that solve real-world challenges.
          <br /><br />
          Beyond development, I’m continuously exploring emerging technologies, improving UI aesthetics,
          and pushing the boundaries of web interactivity. My goal is to innovate with purpose and create
          products that inspire and empower users.
        </Description>
        <ResumeButton
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <FaFilePdf /> View Resume
        </ResumeButton>
      </Content>

      {/* Right Side — Profile Picture */}
      <ProfileContainer>
        <GlowBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={fadeUp}
        >
          <ProfileImage src="/profile.jpg" alt="Kuncham Venkatesh" />
        </GlowBox>
      </ProfileContainer>
    </Section>
  );
}
