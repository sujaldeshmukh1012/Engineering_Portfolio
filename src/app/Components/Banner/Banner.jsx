"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Banner.module.css";
import useMousePosition from "@/app/utils/useMousePosition";
import { motion } from "framer-motion";
import headshot from "../../../assets/images/headshot.png";
import India from "../../../assets/images/india.png";
import UB from "../../../assets/images/ub.png";
function Banner() {
  const { x, y } = useMousePosition();
  const [Hovered, SetHovered] = useState(false);
  const size = Hovered ? 200 : 5;

  return (
    <div className={styles.BannerContainer}>
      <div className={styles.mainContainer} back>
        <div className={styles.TitleContainer}>
          <h1 className={styles.TitleH1}>INNOVATOR. GRIT.</h1>
          <div className={styles.MiddleSection}>
            <h4 className={styles.SubTitle}>SUJAL D. BHAKARE</h4>
            <h4 className={styles.SubTitle}>COMPUTER ENGINEER</h4>
          </div>
          <div className={styles.BottomTitleContainer}>
            <h1 className={styles.TitleH1}>PROBLEM SOLVER.</h1>
          </div>
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
            onMouseEnter={() => {
              SetHovered(true);
            }}
            onMouseLeave={() => SetHovered(false)}
          >
            PASSIONATE. BOLD.
          </h1>
          <div
            onMouseEnter={() => {
              SetHovered(true);
            }}
            onMouseLeave={() => SetHovered(false)}
            className={styles.MiddleSection}
          >
            <h4 className={styles.SubTitle}>LEADER</h4>
            <h4 className={styles.SubTitle}>STUDENT</h4>
          </div>
          <div
            onMouseEnter={() => {
              SetHovered(true);
            }}
            onMouseLeave={() => SetHovered(false)}
            className={styles.BottomTitleContainer}
          >
            <h1 className={styles.TitleH1}>HUNGRY. FOOLISH.</h1>
          </div>
        </motion.div>
      </div>
      {/* <Image
        src={headshot}
        width={500}
        height={500}
        className={styles.BannerImage}
        alt="Picture of the author"
      /> */}
      <BottomBanner />
      <ScrollButton />
    </div>
  );
}

export default Banner;

//Building intelligent solutions, from code to hardware.

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
    window.scrollBy({
      top: window.innerHeight, // 100vh
      left: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
      //   initial={{ opacity: 0, y: 10 }}
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
