import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// 🔹 Main Navbar Container
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 6%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
`;

// 🔹 Brand Name
const Brand = styled.h1`
  font-size: 1.8rem;
  color: #00ffff;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

// 🔹 Desktop Links
const Links = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// 🔹 Link Styles
const Link = styled.a`
  color: white;
  font-weight: 500;
  font-size: 1.05rem;
  text-decoration: none;
  position: relative;
  transition: 0.3s ease;

  &:hover {
    color: #00ffff;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: #00ffff;
    transition: 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// 🔹 Hamburger Icon
const MenuIcon = styled.div`
  display: none;
  color: #00ffff;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// 🔹 Mobile Menu
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70%;
  background: rgba(15, 32, 39, 0.95);
  backdrop-filter: blur(15px);
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);

  a {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffff;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      {/* Left: Brand */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Brand>Kuncham Venkatesh</Brand>
      </motion.div>

      {/* Right: Desktop Links */}
      <Links>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </Links>

      {/* Hamburger Icon for Mobile */}
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
}
