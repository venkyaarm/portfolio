import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

/* ========================================================= */
/*                     MAIN NAV STYLES                        */
/* ========================================================= */
const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${(props) => (props.$shrink ? "0.5rem 5%" : "1rem 5%")};
  backdrop-filter: blur(14px);
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 900;
  transition: 0.35s ease;
  border-bottom: 1px solid rgba(0, 255, 255, 0.15);
`;

/* ========================================================= */
/*                        BRAND                               */
/* ========================================================= */
const Brand = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #00eaff;
  user-select: none;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

/* ========================================================= */
/*                   DESKTOP LINK AREA                        */
/* ========================================================= */
const Links = styled.div`
  display: flex;
  gap: 2.8rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.1rem;
  color: ${(p) => (p.$active ? "#00eaff" : "#ffffff")};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: 0.25s;

  &:hover {
    color: #00eaff;
  }
`;

/* ========================================================= */
/*                  Sliding Neon Underline                    */
/* ========================================================= */
const Underline = styled(motion.div)`
  position: absolute;
  bottom: -8px;
  height: 3px;
  border-radius: 5px;
  background: #00eaff;
  box-shadow: 0 0 10px #00eaff;
`;

/* ========================================================= */
/*                Glow Bubble Behind Active Link              */
/* ========================================================= */
const GlowBubble = styled(motion.div)`
  position: absolute;
  top: -6px;
  height: 34px;
  border-radius: 10px;
  background: rgba(0, 255, 255, 0.22);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
  z-index: -1;
`;

/* ========================================================= */
/*                    MOBILE MENU ICON                        */
/* ========================================================= */
const MenuIcon = styled.div`
  font-size: 1.8rem;
  color: #00eaff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

/* ========================================================= */
/*                        MOBILE MENU                         */
/* ========================================================= */
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 72%;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: center;

  background: rgba(5, 18, 25, 0.95);
  backdrop-filter: blur(18px);
  z-index: 1000;

  a {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    transition: 0.25s;

    &:hover {
      color: #00eaff;
      transform: translateX(8px);
    }
  }

  @media (max-width: 480px) {
    width: 78%;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  z-index: 999;
`;

/* ========================================================= */
/*                       COMPONENT                            */
/* ========================================================= */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [shrink, setShrink] = useState(false);

  const linkRefs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const [underlinePos, setUnderlinePos] = useState({
    width: 0,
    left: 0,
  });

  /* ACTIVE UNDERLINE POSITION UPDATE */
  useEffect(() => {
    const el = linkRefs[active].current;
    if (el) {
      setUnderlinePos({
        width: el.offsetWidth,
        left: el.offsetLeft,
      });
    }
  }, [active]);

  /* SCROLL SHRINK */
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL ACTIVE SECTION SET */
  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const scrollHandler = () => {
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) setActive(id);
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <NavWrapper $shrink={shrink}>
        <Brand>Kuncham Venkatesh</Brand>

        {/* DESKTOP LINKS */}
        <Links>
          <GlowBubble
            layout
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            style={{ width: underlinePos.width + 20, left: underlinePos.left - 10 }}
          />

          <Underline
            layout
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            style={{ width: underlinePos.width, left: underlinePos.left }}
          />

          {["about", "skills", "projects", "contact"].map((item) => (
            <NavLink
              key={item}
              ref={linkRefs[item]}
              href={`#${item}`}
              $active={active === item}
              onClick={() => setActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </Links>

        {/* MOBILE ICON */}
        <MenuIcon onClick={() => setIsOpen(true)}>
          <FaBars />
        </MenuIcon>
      </NavWrapper>

      {/* MOBILE MENU */}
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
                  top: 20,
                  right: 20,
                  fontSize: "1.8rem",
                  color: "#00eaff",
                  cursor: "pointer",
                }}
              />

              {["about", "skills", "projects", "contact"].map((item) => (
                <a href={`#${item}`} key={item} onClick={() => setIsOpen(false)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
