import Image from "next/image";
import styles from "./styles/navigation.module.css";
import RHA_Logo from "./media/RHA_Logo.svg";

export default function SitelNav() {
  return (
    <section className={styles.site_navigation}>
      <div className={styles.container}>
        <Image src={RHA_Logo} alt="RHA Logo" className={styles.rha_logo} />
        <div className={styles.navigation_list}>
          <p>Products</p>
          <p>Results</p>
          <p>Science</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}
