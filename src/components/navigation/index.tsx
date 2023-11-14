import UniversalNav from "./universal-nav";
import SitelNav from "./site-nav";
import styles from "./styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <UniversalNav />
      <SitelNav />
    </nav>
  );
}
