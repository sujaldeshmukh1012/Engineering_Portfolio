"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Banner.module.css";
import useMousePosition from "@/app/utils/useMousePosition";
import { motion } from "framer-motion";
import headshot from "../../../assets/images/headshot.png";
import India from "../../../assets/images/india.png";
import UB from "../../../assets/images/ub.png";

const ArrowLeft01Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 24"
    width={40}
    height={20}
    color={"#fff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M27 6L21 12L27 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M15 6L9 12L15 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

const ArrowRight01Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 24"
    width={40}
    height={20}
    color={"#fff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M21 6L27 12L21 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

function Banner() {
  const [revealWidth, setRevealWidth] = useState(200);
  const [isDesktop, setIsDesktop] = useState(true);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startDrag = () => (isDragging.current = true);
  const stopDrag = () => (isDragging.current = false);
  const onDrag = (e) => {
    if (!isDragging.current) return;
    const newWidth = Math.max(0, Math.min(window.innerWidth, e.clientX));
    setRevealWidth(newWidth);
  };

  return (
    <div
      className={styles.BannerContainer}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      <div className={styles.SecondBanner}>
        <p className={styles.SECONDARYTitleP}>I AM</p>
        <h1 className={styles.SECONDARYTitleH1}>SUJAL BHAKARE</h1>
      </div>

      {isDesktop && (
        <>
          <motion.div
            className={styles.mainContainer}
            style={{
              clipPath: `inset(0 ${window.innerWidth - revealWidth}px 0 0)`,
            }}
          >
            <TitleMaskLayer />
          </motion.div>

          <div
            className={styles.ZipHandle}
            onMouseDown={startDrag}
            style={{ left: `${revealWidth}px` }}
          >
            <div className={styles.ZipLine}>
              <motion.button
                className={styles.zipindicatopbuttonOpposite}
                animate={{ x: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <ArrowLeft01Icon />
              </motion.button>
            </div>

            <div className={styles.ZipLine}>
              <motion.button
                className={styles.zipindicatopbutton}
                animate={{ x: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight01Icon />
              </motion.button>
            </div>
          </div>
        </>
      )}

      <BottomBanner />
      <ScrollButton />
    </div>
  );
}

export default Banner;

function TitleMaskLayer() {
  const { x, y } = useMousePosition();
  const [Hovered, SetHovered] = useState(false);
  const size = Hovered ? 300 : 5;

  return (
    <div className={styles.TitleContainer}>
      <h1 className={styles.TitleH1}>INNOVATOR. GRIT.</h1>
      <div className={styles.MiddleSection}>
        <h4 className={styles.SubTitle}>SUJAL D. BHAKARE</h4>
        <h4 className={styles.SubTitle}>COMPUTER ENGINEER</h4>
      </div>
      <div className={styles.BottomTitleContainer}>
        <h1 className={styles.TitleH1}>PROBLEM SOLVER.</h1>
      </div>

      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        className={styles.TitleContainerMask}
      >
        <h1
          className={styles.TitleH1}
          onMouseEnter={() => SetHovered(true)}
          onMouseLeave={() => SetHovered(false)}
        >
          PASSIONATE. BOLD.
        </h1>
        <div
          className={styles.MiddleSection}
          onMouseEnter={() => SetHovered(true)}
          onMouseLeave={() => SetHovered(false)}
        >
          <h4 className={styles.SubTitle}>LEADER</h4>
          <h4 className={styles.SubTitle}>STUDENT</h4>
        </div>
        <div
          className={styles.BottomTitleContainer}
          onMouseEnter={() => SetHovered(true)}
          onMouseLeave={() => SetHovered(false)}
        >
          <h1 className={styles.TitleH1}>HUNGRY. FOOLISH.</h1>
        </div>
      </motion.div>
    </div>
  );
}

function BottomBanner() {
  return (
    <div className={styles.BottomBanner}>
      <div className={styles.LocationInfo}>
        <div className={styles.LocationInfoDetails}>
          <h4>BASED IN INDIA</h4>
          <p>studying in USA</p>
        </div>
        <Image
          src={India}
          className={styles.locationImage}
          alt="Picture of the author"
        />
      </div>
      <div className={styles.EducationInfo}>
        <Image
          src={UB}
          className={styles.eduImage}
          alt="Picture of the author"
        />
        <div className={styles.LocationInfoDetails}>
          <h4>SUNY AT BUFFALO</h4>
          <p>Buffalo, New York</p>
        </div>
      </div>
    </div>
  );
}

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(true);
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ArrowDown01Icon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#fff"}
      fill={"none"}
      {...props}
    >
      <path
        d="M18 9L12 15L6 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );

  return (
    <motion.div
      className={styles.scrollButtonContainer}
      transition={{ duration: 0.5 }}
      onClick={handleScroll}
    >
      Scroll
      <motion.button
        className={styles.scrollButton}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown01Icon />
      </motion.button>
    </motion.div>
  );
}
