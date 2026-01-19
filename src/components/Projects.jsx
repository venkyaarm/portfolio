import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

/* ------------------------------------------------------------ */
/*                  BACKGROUND PARTICLE ANIMATION                */
/* ------------------------------------------------------------ */

const particleFloat = keyframes`
  0% { transform: translateY(0); opacity: 0.25; }
  50% { opacity: 0.7; }
  100% { transform: translateY(-120px); opacity: 0; }
`;

/* ------------------------------------------------------------ */
/*                     PREMIUM ANIMATIONS                        */
/* ------------------------------------------------------------ */

const shine = keyframes`
  0% { background-position: -200%; }
  100% { background-position: 200%; }
`;

/* ------------------------------------------------------------ */
/*                          SECTION                              */
/* ------------------------------------------------------------ */

const Section = styled.section`
  min-height: 100vh;
  padding: 6rem 10%;
  background: linear-gradient(135deg, #050b14, #020611);
  color: #fff;
  position: relative;
  overflow: hidden;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3.5rem;
    background: linear-gradient(90deg, #00ffff, white, #00ffff);
    -webkit-background-clip: text;
    color: transparent;
    background-size: 300%;
    animation: ${shine} 5s linear infinite;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
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
/*                   PROJECTS GRID (DESKTOP ONLY)                */
/* ------------------------------------------------------------ */

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  position: relative;
  z-index: 1;

  /* Tablet & Mobile – unchanged (1 column) */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

/* ------------------------------------------------------------ */
/*                           CARDS                               */
/* ------------------------------------------------------------ */

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  border-radius: 18px;
  backdrop-filter: blur(10px);
  background: black;
  border: 1px solid rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
  transition: 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 35px rgba(0, 255, 255, 0.4);
  }
`;

/* ------------------------------------------------------------ */
/*                        TEXT CONTENT                           */
/* ------------------------------------------------------------ */

const CardContent = styled.div`
  flex: 1;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ffcc00;
  }

  p {
    line-height: 1.75;
    font-size: 1.05rem;
    color: #e0f7ff;
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    text-align: center;

    p {
      font-size: 1rem;
      text-align: center;
    }

    .links {
      justify-content: center;
    }
  }
`;

/* ------------------------------------------------------------ */
/*                        BUTTONS & ICONS                        */
/* ------------------------------------------------------------ */

const GithubLink = styled.a`
  font-size: 2rem;
  color: #00ffff;
  transition: 0.3s ease;

  &:hover {
    color: #ffcc00;
    transform: scale(1.2);
    filter: drop-shadow(0 0 10px #00ffff);
  }
`;

const ViewButton = styled.a`
  padding: 0.7rem 1.6rem;
  background: linear-gradient(135deg, #00ffff, #00bcd4);
  color: #000;
  font-weight: 700;
  border-radius: 10px;
  transition: 0.35s ease;
  box-shadow: 0 4px 15px rgba(0,255,255,0.3);

  &:hover {
    transform: translateY(-4px) scale(1.05);
    background: linear-gradient(135deg, #ffcc00, #ffaa00);
    box-shadow: 0 6px 25px rgba(255,204,0,0.4);
  }
`;

/* ------------------------------------------------------------ */
/*                        PROJECT IMAGE                          */
/* ------------------------------------------------------------ */

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 14px;
  overflow: hidden;
  margin-top: 1.2rem;
  box-shadow: 0 0 20px rgba(0,255,255,0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
  }
`;

/* ------------------------------------------------------------ */
/*                 ANIMATION VARIANTS                           */
/* ------------------------------------------------------------ */

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------ */
/*                       COMPONENT                               */
/* ------------------------------------------------------------ */

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Creator",
      desc: "An advanced Portfolio Creator that dynamically builds fully responsive, modern portfolios from user inputs and also users can deploy their portfolios which generates the link Instently.",
      github: "https://github.com/venkyaarm/Portfolio-Creator-frontend",
      demo: "https://venkyportfoliocreator.netlify.app/",
      image: "/projects/portfolio.png",
    },
    {
      title: "PPT Generator",
      desc: "An AI-powered presentation tool that generates slides instantly based on topic input with smart formatting.",
      github: "https://github.com/venkyaarm/Venkt-PPT",
      demo: "https://venky-ppt.netlify.app/",
      image: "/projects/ppt-generator.png",
    },
    {
      title: "QR Generator",
      desc: "A customizable QR generator that allows users to create high-quality QR codes for text, URLs, and files.",
      github: "https://github.com/venkyaarm/venkyQR",
      demo: "https://venkyqr.netlify.app/",
      image: "/projects/qr-generator.png",
    },
    {
      title: "Resume App",
      desc: "A modern resume builder with AI-powered analysis, skill suggestions, instant preview, and elegant UI.",
      github: "https://github.com/venkyaarm/venky-resume",
      demo: "https://venkyresumeapp.netlify.app/",
      image: "/projects/resume-app.png",
    },
    {
      title: "Wood Interior",
      desc: "An interior furniture app with separate admin and user modules for product uploads and secure purchases.",
      github: "https://github.com/venkyaarm/wood-interior-website",
      demo: "https://woodeninterior.netlify.app/",
      image: "/projects/wood.png",
    },
    {
      title: "Image Puzzle",
      desc: "A fun puzzle game with animated tiles and random puzzle generator for unlimited gameplay.",
      github: "https://github.com/venkyaarm/Venky-puzzle",
      demo: "https://venkypuzzle.netlify.app/",
      image: "/projects/puzzle.png",
    },
    {
      title: "Life Saver",
      desc: "A QR-driven hospital app designed for fast, secure access to patient information and healthcare services.",
      github: "https://github.com/venkyaarm/LifeSaver",
      demo: "https://lifesaverdoct.netlify.app/",
      image: "/projects/lifesaver.png",
    },
  ];

  return (
    <Section id="projects">
      {/* Animated background dots */}
      {[...Array(12)].map((_, i) => (
        <Particle
          key={i}
          $size={4 + Math.random() * 6}
          $top={Math.random() * 100}
          $left={Math.random() * 100}
          $duration={6 + Math.random() * 6}
        />
      ))}

      <h2>Projects</h2>

      <ProjectsGrid>
        {projects.map((p, i) => (
          <Card
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            viewport={{ once: true, amount: 0.2 }}
          >
            <CardContent>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="links">
                <GithubLink href={p.github} target="_blank">
                  <FaGithub />
                </GithubLink>
                <ViewButton href={p.demo} target="_blank">
                  View Project
                </ViewButton>
              </div>
            </CardContent>

            <CardImage>
              <img src={p.image} alt={p.title} />
            </CardImage>
          </Card>
        ))}
      </ProjectsGrid>
    </Section>
  );
}
