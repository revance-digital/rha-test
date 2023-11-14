import Image from "next/image";
import styles from "./styles/navigation.module.css";
import RA_Logo from "./media/RA_Logo.png";
import Hamburger from "./hamburger";

export default function UniversalNav() {
  return (
    <section className={styles.universal_navigation}>
      <div className={styles.container}>
        <Hamburger />
        <Image src={RA_Logo} alt="RA Logo" className={styles.rha_logo} />
        <div className={styles.navigation_list}>
          <p>For U.S. Patients</p>
          <p>Directions For Use</p>
          <p>Patient Safety Information</p>
        </div>
      </div>
    </section>
  );
}
