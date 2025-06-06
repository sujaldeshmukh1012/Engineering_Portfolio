import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/NavBar/Navbar";
import Intro from "./Components/Intro/Intro";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      {/* <SocialLinks/> */}
      <Banner />
      <Intro />
      {/* <Work/> */}
      {/* <Projects/> */}
      {/* <About/> */}
      {/* <Footer/> */}
    </div>
  );
}
