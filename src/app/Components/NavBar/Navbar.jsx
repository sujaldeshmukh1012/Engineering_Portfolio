import React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import LOGO from "../../../assets/images/logo/logo_white.png";
import Link from "next/link";
function Navbar() {
  return (
    <nav className={styles.NavbarContainer}>
      {/* SUJAL. */}
      <Link href="/">
        <Image
          src={LOGO}
          width={"auto"}
          height={50}
          className={styles.LogoImage}
          alt="Picture of the author"
        />
      </Link>
      <NavLinks />
    </nav>
  );
}

export default Navbar;

function NavLinks() {
  return (
    <div className={styles.NavbarLinksContainer}>
      <Link href={"/"} className={styles.NavbarLinks}>
        <p>01</p>
        <h4>Projects</h4>
      </Link>
      <Link href={"/"} className={styles.NavbarLinks}>
        <p>02</p>
        <h4>Experience</h4>
      </Link>
      <Link href={"/"} className={styles.NavbarLinks}>
        <p>03</p>
        <h4>About</h4>
      </Link>
    </div>
  );
}
//  projects
//  experience
//  about
