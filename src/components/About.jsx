import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";

/* ------------------ ANIMATIONS ------------------ */

const floatParticle = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.4; }
  50% { transform: translateY(-18px) scale(1.3); opacity: 0.9; }
  100% { transform: translateY(0) scale(1); opacity: 0.4; }
`;

const breathe = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const neonGlow = keyframes`
  0% { box-shadow: 0 0 12px #00eaff; }
  50% { box-shadow: 0 0 30px #ff00aa; }
  100% { box-shadow: 0 0 12px #00eaff; }
`;

/* ------------------ SECTION (HERO STYLE) ------------------ */

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 6rem 12%;
  background: linear-gradient(135deg, #050b14, #020611);
  position: relative;
  overflow: hidden;
  color: #fff;


  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(0,200,200,0.14), transparent 70%);
  border-radius: 50%;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(75px);
  pointer-events: none;

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
    top: 25%;
  }
`;

/* ------------------ PARTICLES ------------------ */

const Particle = styled.div`
  position: absolute;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  background: rgba(0,200,200,0.25);
  border-radius: 50%;
  top: ${(p) => p.$top}%;
  left: ${(p) => p.$left}%;
  filter: blur(3px);
  animation: ${floatParticle} ${(p) => 3 + Math.random() * 3}s ease-in-out infinite;
`;

/* ------------------ LAYOUT ------------------ */

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1.3;
  max-width: 650px;
`;

/* ------------------ TEXT ------------------ */

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00eaff, #ffffff);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled(motion.p)`
  margin-top: 1.4rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #dffbff;

  strong {
    color: #00ffff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/* ------------------ BUTTONS ------------------ */

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

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
  animation: ${neonGlow} 3s infinite;

  &:hover {
    transform: scale(1.07);
    color: #fff;
  }
`;

/* ------------------ IMAGE ------------------ */

const ProfileWrapper = styled(motion.div)`
  flex: 1;
  max-width: 380px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 18px;
  overflow: hidden;
  animation: ${neonGlow} 4s infinite;
  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
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

/* ------------------ ANIMATION VARIANT ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

/* ------------------ COMPONENT ------------------ */

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView]);

  return (
    <Section id="about" ref={ref}>
      <Glow />

      {[...Array(14)].map((_, i) => (
        <Particle
          key={i}
          $size={6 + Math.random() * 10}
          $top={Math.random() * 100}
          $left={Math.random() * 100}
        />
      ))}

      <Container>
        <Content>
          <Title initial="hidden" animate={controls} variants={fadeUp}>
            About Me
          </Title>

          <Description initial="hidden" animate={controls} variants={fadeUp}>
            I'm <strong>Kuncham Venkatesh</strong>, a passionate <strong>BCA student</strong> specializing in
            <strong> AI-powered and API-driven web applications</strong>.
            <br /><br />
            I focus on crafting intelligent, visually stunning, and interactive digital experiences using
            <strong> React.js</strong>, <strong> Node.js</strong>, and modern UI/UX workflows.
            <br /><br />
            I build next-generation tools like AI Resume Analyzers, Q&A systems, and futuristic web platforms
            that blend creativity with performance.
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

        <ProfileWrapper initial="hidden" animate={controls} variants={fadeUp}>
          <ImageBox>
            <ProfileImage src="/profile.jpg" alt="Profile" />
          </ImageBox>
        </ProfileWrapper>
      </Container>
    </Section>
  );
}
