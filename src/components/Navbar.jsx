import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// ===================== NAVBAR WRAPPER =====================
const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${(props) => (props.shrink ? "0.6rem 6%" : "1.4rem 6%")};
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 500;

  transition: padding 0.35s ease, background 0.3s ease;

  border-bottom: 1px solid rgba(0, 255, 255, 0.15);
  box-shadow: ${(props) =>
    props.shrink ? "0 4px 25px rgba(0, 255, 255, 0.15)" : "none"};
`;

// ===================== BRAND =====================
const Brand = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 800;
  color: #00eaff;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ffe066;
    text-shadow: 0 0 10px #ffe066;
  }
`;

// ===================== DESKTOP LINKS =====================
const Links = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.15rem;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => (props.active ? "#00eaff" : "#ffffff")};
  transition: 0.3s ease;
  position: relative;

  &:hover {
    color: #00eaff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    height: 2px;
    width: ${(props) => (props.active ? "100%" : "0%")};
    background: #00eaff;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

// ===================== MOBILE MENU ICON =====================
const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: #00eaff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// ===================== OVERLAY =====================
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  z-index: 400;
`;

// ===================== MOBILE MENU =====================
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 78%;
  height: 100vh;
  background: rgba(10, 25, 35, 0.95);
  backdrop-filter: blur(18px);
  padding-top: 7rem;
  z-index: 450;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  border-left: 1px solid rgba(0, 255, 255, 0.25);
  box-shadow: -5px 0 25px rgba(0, 255, 255, 0.3);

  a {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.3s;

    &:hover {
      color: #00eaff;
      transform: translateX(10px);
    }
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [shrink, setShrink] = useState(false);

  // Scroll Listener for Shrink Effect
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link on scroll
  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const onScroll = () => {
      sections.forEach((id) => {
        const s = document.getElementById(id);
        if (s) {
          const rect = s.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <NavWrapper shrink={shrink}>
        <Brand>Kuncham Venkatesh</Brand>

        {/* Desktop Links */}
        <Links>
          <NavLink href="#about" active={active === "about"}>About</NavLink>
          <NavLink href="#skills" active={active === "skills"}>Skills</NavLink>
          <NavLink href="#projects" active={active === "projects"}>Projects</NavLink>
          <NavLink href="#contact" active={active === "contact"}>Contact</NavLink>
        </Links>

        {/* Mobile Icon */}
        <MenuIcon onClick={() => setIsOpen(true)}>
          <FaBars />
        </MenuIcon>
      </NavWrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <MobileMenu
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <FaTimes
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "1.9rem",
                  color: "#00eaff",
                  cursor: "pointer",
                }}
              />

              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
