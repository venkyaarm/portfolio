import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

/* ------------------------------------------------------------ */
/*                     PREMIUM ANIMATIONS                        */
/* ------------------------------------------------------------ */

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const shine = keyframes`
  0% { background-position: -200%; }
  100% { background-position: 200%; }
`;

/* ------------------------------------------------------------ */
/*                          SECTION                              */
/* ------------------------------------------------------------ */

const Section = styled.section`
  padding: 5rem 10%;
  background: linear-gradient(135deg, #061822, #0c2f3f, #154b63);
  color: #fff;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3.5rem;
    background: linear-gradient(90deg, #00ffff, white, #00ffff);
    -webkit-background-clip: text;
    color: transparent;
    background-size: 300%;
    animation: ${shine} 5s linear infinite;
  }
`;

/* ------------------------------------------------------------ */
/*                           CARDS                               */
/* ------------------------------------------------------------ */

const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem;
  margin-bottom: 2.5rem;
  border-radius: 18px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
  transition: 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 35px rgba(0, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.3rem;
  }
`;

/* ------------------------------------------------------------ */
/*                        TEXT CONTENT                           */
/* ------------------------------------------------------------ */

const CardContent = styled.div`
  flex: 1.4;
  padding-right: 2.2rem;
  max-width: 620px;

  h3 {
    font-size: 2.1rem;
    margin-bottom: 1rem;
    color: #ffcc00;
  }

  p {
    line-height: 1.85;
    font-size: 1.15rem;
    color: #e0f7ff;
    margin-bottom: 2rem;
    text-align: justify;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    max-width: 100%;
    text-align: center;

    p {
      font-size: 1rem;
      text-align: center;
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
  padding: 0.7rem 1.7rem;
  background: linear-gradient(135deg, #00ffff, #00bcd4);
  color: #000;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.35s ease;
  box-shadow: 0 4px 15px rgba(0,255,255,0.3);

  &:hover {
    transform: translateY(-4px) scale(1.05);
    background: linear-gradient(135deg, #ffcc00, #ffaa00);
    box-shadow: 0 6px 25px rgba(255,204,0,0.4);
  }
`;

/* ------------------------------------------------------------ */
/*                 PROJECT IMAGE — FIXED SIZE                    */
/* ------------------------------------------------------------ */

const CardImage = styled.div`
  flex: 1;
  width: 420px;
  height: 260px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,255,255,0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 230px;
    margin-top: 1.5rem;
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
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------ */
/*                       COMPONENT                               */
/* ------------------------------------------------------------ */

export default function Projects() {
  const projects = [
    {
      title: "AI Q&A App",
      desc: "An AI-powered real-time Q&A application built with React.js and Gemini API for intelligent responses.",
      github: "https://github.com/venkyaarm/Venky-Q-and-A-app",
      demo: "https://venky-q-and-a-app.netlify.app/",
      image: "/projects/ai-qa.png",
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
      <h2>Projects</h2>

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
    </Section>
  );
}
