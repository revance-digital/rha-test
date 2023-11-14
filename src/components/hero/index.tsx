import Image from "next/image";
import styles from "./styles/hero.module.css";
import Hero_Image from "./media/desktop-bg-scaled-1.jpeg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Designed for dynamic facial movement</h1>
        <button>Get Started</button>
      </div>
      <Image src={Hero_Image} alt="hero" className={styles.background} />
    </section>
  );
}
