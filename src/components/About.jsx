import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";

/* ------------------ GLOBAL ANIMATIONS ------------------ */

// 1. Neon border animation
const neonBorder = keyframes`
  0% { box-shadow: 0 0 10px #00eaff, 0 0 20px #00eaff; }
  50% { box-shadow: 0 0 20px #ff00aa, 0 0 40px #ff00aa; }
  100% { box-shadow: 0 0 10px #00eaff, 0 0 20px #00eaff; }
`;

// 2. Floating particles
const floatParticle = keyframes`
  0% { transform: translateY(0px) scale(1); opacity: 0.6; }
  50% { transform: translateY(-20px) scale(1.3); opacity: 1; }
  100% { transform: translateY(0px) scale(1); opacity: 0.6; }
`;

// 3. Image breathing
const breathe = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// 4. Wave Background
const waveMove = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

/* ------------------ SECTION STYLES ------------------ */

const Section = styled.section`
  padding: 7rem 12%;
  background: linear-gradient(135deg, #09131c, #0c1e2c);
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  margin-top: 5rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.15);

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
  }
`;

/* Animated Background Wave */
const Wave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 320px;
  width: 200%;
  background: radial-gradient(circle, rgba(0,255,255,0.15), transparent 70%);
  animation: ${waveMove} 12s linear infinite;

  @media (max-width: 480px) {
    height: 220px;
  }
`;

/* Floating particles */
const Particle = styled.div`
  position: absolute;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  background: rgba(0,255,255,0.5);
  border-radius: 50%;
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;
  filter: blur(2px);
  animation: ${floatParticle} ${(p) => 3 + Math.random() * 3}s ease-in-out infinite;
`;

/* Content Layout */
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

/* ------------------ LEFT CONTENT ------------------ */

const Content = styled.div`
  flex: 1.3;
  color: #fff;
  max-width: 650px;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00eaff, #ffffff, #00eaff);
  -webkit-background-clip: text;
  color: transparent;
  position: relative;

  &::before, &::after {
    content: "<>";
    position: absolute;
    font-size: 2rem;
    top: 0;
    opacity: 0.6;
  }
  &::before { left: -40px; }
  &::after { right: -40px; }

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Description = styled(motion.p)`
  margin-top: 1.5rem;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #d8f8ff;

  strong {
    color: #00ffff;
    text-shadow: 0 0 5px #00eaff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

/* Buttons */
const ResumeButton = styled(motion.a)`
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-weight: 700;
  background: linear-gradient(135deg, #00ffff, #ffcc00);
  color: #000;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.07);
    background: linear-gradient(135deg, #ffcc00, #00ffff);
    color: #fff;
  }
`;

const DownloadButton = styled(motion.a)`
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-weight: 700;
  background: linear-gradient(135deg, #ff007f, #00ccff);
  color: #000;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  transition: 0.3s;
  animation: ${neonBorder} 3s infinite;

  &:hover {
    transform: scale(1.07);
    color: #fff;
  }
`;

/* ------------------ RIGHT IMAGE ------------------ */

const ProfileWrapper = styled(motion.div)`
  flex: 1;
  max-width: 380px;
  perspective: 1000px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 18px;
  overflow: hidden;
  border: 4px solid transparent;
  animation: ${neonBorder} 4s linear infinite;
  transition: 0.4s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(12deg) rotateX(8deg) scale(1.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${breathe} 4s infinite ease-in-out;
`;

/* ------------------ ANIMATION VARIANTS ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

/* ------------------ COMPONENT ------------------ */

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView]);

  return (
    <Section id="about" ref={ref}>
      <Wave />

      {/* Random Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <Particle
          key={i}
          size={6 + Math.random() * 10}
          top={Math.random() * 100}
          left={Math.random() * 100}
        />
      ))}

      <Container>
        {/* LEFT SECTION */}
        <Content>
          <Title initial="hidden" animate={controls} variants={fadeUp}>
            About Me
          </Title>

          <Description initial="hidden" animate={controls} variants={fadeUp}>
            I'm <strong>Kuncham Venkatesh</strong>, a passionate <strong>BCA student</strong> specializing in 
            <strong> AI-powered and API-driven web applications</strong>.
            My focus is on developing visually stunning, intelligent, and interactive experiences using 
            <strong> React.js</strong>, <strong>Node.js</strong>, and modern UI/UX workflows.
            <br /><br />
            I build next-gen tools like **AI Resume Analyzers**, **Q&A Systems**, **Interactive Web Apps**, and high-quality,
            futuristic interfaces that blend creativity with precision.
            <br /><br />
            I'm constantly improving my skill set, exploring new technologies, and pushing boundaries to create 
            meaningful, powerful, and user-inspired digital products.
          </Description>

          <ButtonContainer>
            <ResumeButton href="/resume.pdf" target="_blank">
              <FaFilePdf /> View Resume
            </ResumeButton>

            <DownloadButton href="/resume.pdf" download>
              <FaDownload /> Download Resume
            </DownloadButton>
          </ButtonContainer>
        </Content>

        {/* RIGHT PROFILE IMAGE */}
        <ProfileWrapper initial="hidden" animate={controls} variants={fadeUp}>
          <ImageBox>
            <ProfileImage src="/profile.jpg" alt="Profile" />
          </ImageBox>
        </ProfileWrapper>
      </Container>
    </Section>
  );
}
