import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/* ------------------------------------------------------------ */
/*                      BACKGROUND ANIMATION                     */
/* ------------------------------------------------------------ */

const particleFloat = keyframes`
  0% { transform: translateY(0); opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { transform: translateY(-120px); opacity: 0; }
`;

/* ------------------------------------------------------------ */
/*                       SECTION (FULL PAGE)                     */
/* ------------------------------------------------------------ */

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

/* ------------------------------------------------------------ */
/*                     PARTICLE BACKGROUND                       */
/* ------------------------------------------------------------ */

const Particle = styled.span`
  position: absolute;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  background: rgba(0, 200, 200, 0.3);
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

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00eaff, #ffffff, #00eaff);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

/* ------------------------------------------------------------ */
/*                          GRID                                 */
/* ------------------------------------------------------------ */

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.5rem;
  justify-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/* ------------------------------------------------------------ */
/*                       SKILL CARD                              */
/* ------------------------------------------------------------ */

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const SkillCard = styled(motion.div)`
  width: 150px;
  height: 150px;
  animation: ${float} 4s ease-in-out infinite;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover img {
    transform: scale(1.2);
    filter: brightness(1.2) drop-shadow(0 0 14px #00ffff);
  }

  &:hover span {
    opacity: 1;
    transform: translateY(6px);
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.4s ease;
`;

const SkillName = styled.span`
  position: absolute;
  left: 50%;
  bottom: -28px;
  transform: translateX(-50%) translateY(18px);
  font-size: 1.15rem;
  font-weight: 700;
  color: #00ffff;
  opacity: 0;
  transition: 0.4s ease;
  text-shadow: 0 0 12px #00eaff;
`;

/* ------------------------------------------------------------ */
/*                      ANIMATION VARIANT                        */
/* ------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

/* ------------------------------------------------------------ */
/*                         COMPONENT                             */
/* ------------------------------------------------------------ */

export default function Skills() {
  const skills = [
    { name: "HTML", img: "/skills/html.png" },
    { name: "CSS", img: "/skills/css.png" },
    { name: "C", img: "/skills/c.png" },
    { name: "C++", img: "/skills/cpp.png" },
    { name: "Java", img: "/skills/java.png" },
    { name: "Python", img: "/skills/python.png" },
    { name: "SQL", img: "/skills/sql.png" },
    { name: "React.js", img: "/skills/react.png" },
    { name: "Node.js", img: "/skills/node.png" },
    { name: "GitHub", img: "/skills/github.png" },
    { name: "VS Code", img: "/skills/vscode.png" },
  ];

  return (
    <Section id="skills">
      {/* Background particles */}
      {[...Array(10)].map((_, i) => (
        <Particle
          key={i}
          $size={4 + Math.random() * 6}
          $top={Math.random() * 100}
          $left={Math.random() * 100}
          $duration={6 + Math.random() * 6}
        />
      ))}

      <Title
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </Title>

      <SkillGrid>
        {skills.map((s, i) => (
          <SkillCard
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <SkillImage src={s.img} alt={s.name} />
            <SkillName>{s.name}</SkillName>
          </SkillCard>
        ))}
      </SkillGrid>
    </Section>
  );
}
