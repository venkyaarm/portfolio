import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; // GitHub icon

const Section = styled.section`
  padding: 5rem 10%;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;

  h2 {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 3rem;
    color: #00ffff;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  flex: 1;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #ffcc00;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const GithubLink = styled.a`
  font-size: 1.8rem;
  color: #00ffff;
  transition: color 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    color: #ffcc00;
  }
`;

const ViewButton = styled.a`
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #00ffff, #00bcd4);
  color: #000;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,255,255,0.3);

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #ffcc00, #ffaa00);
    color: #000;
    box-shadow: 0 6px 20px rgba(255,204,0,0.4);
  }
`;

const CardImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-left: 2px solid rgba(0, 255, 255, 0.2);

    @media (max-width: 768px) {
      border-left: none;
      border-top: 2px solid rgba(0, 255, 255, 0.2);
      margin-top: 1rem;
      height: 220px;
    }
  }
`;

export default function Projects() {
  const projects = [
    {
      title: "AI Q&A App",
      desc: "An AI-powered real-time Q&A application built with React.js. Users can ask questions and receive accurate AI-generated answers instantly. Integrated with Gemini API for intelligent responses and dynamic content rendering, making it highly interactive and user-friendly.",
      github: "https://github.com/venkyaarm/Venky-Q-and-A-app",
      demo: "https://venky-q-and-a-app.netlify.app/",
      image: "/projects/ai-qa.png",
    },
    {
      title: "PPT Generator",
      desc: "AI-assisted presentation tool that allows users to quickly generate slides based on input topics. It leverages smart algorithms to automatically design slides with relevant content, images, and themes. Ideal for students and professionals seeking efficient presentation creation.",
      github: "https://github.com/venkyaarm/Venkt-PPT",
      demo: "https://venky-ppt.netlify.app/",
      image: "/projects/ppt-generator.png",
    },
    {
      title: "QR Generator",
      desc: "A robust QR code generator capable of producing codes for URLs, text, and images. Provides customizable designs and high-quality output suitable for personal, business, and marketing needs. Users can download or share QR codes seamlessly.",
      github: "https://github.com/venkyaarm/venkyQR",
      demo: "https://venkyqr.netlify.app/",
      image: "/projects/qr-generator.png",
    },
    {
      title: "Resume App",
      desc: "A comprehensive Resume App combining resume building and AI-powered smart analysis. Users can create professional resumes, get feedback, and receive tailored job suggestions based on their skills and experience. Integrated with interactive UI for an enhanced experience.",
      github: "https://github.com/venkyaarm/venky-resume",
      demo: "https://venkyresumeapp.netlify.app/",
      image: "/projects/resume-app.png",
    },
    {
      title: "Wood Interior",
      desc: "Developed a Wooden Interior App with separate admin and user modules for product management and purchasing. Enabled admins to upload products with prices and users to browse and buy through a secure, responsive interface.",
      github: "https://github.com/venkyaarm/wood-interior-website",
      demo: "https://woodeninterior.netlify.app/",
      image: "/projects/wood.png",
    },
    {
      title: "Image Puzzle",
      desc: "Created an interactive Puzzle App that lets users design their own puzzles or play random generated ones. Built with an engaging interface, smooth animations, and responsive design to deliver a fun and dynamic user experience.",
      github: "https://github.com/venkyaarm/Venky-puzzle",
      demo: "https://venkypuzzle.netlify.app/",
      image: "/projects/puzzle.png",
    },
  ];

  return (
    <Section id="projects">
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <Card key={i} whileHover={{ scale: 1.02 }}>
          <CardContent>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="links">
              <GithubLink href={p.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </GithubLink>
              <ViewButton href={p.demo} target="_blank" rel="noopener noreferrer">
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
