import styles from "./styles/hamburger.module.css";

export default function Hamburger() {
  return (
    <div className={styles.hamburger}>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
      <div className={styles.layer}></div>
    </div>
  );
}
