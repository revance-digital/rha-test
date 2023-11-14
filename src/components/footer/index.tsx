import styles from "./styles/footer.module.css";
import Logo_RHA from "./media/Logo-RHA.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={Logo_RHA} alt="Logo RHA" />
      <hr />
      <div>
        <p>©2023 REVANCE AESTHETICS | ALL RIGHTS RESERVED.</p>
        <p>
          REVANCE AESTHETICS AND THE REVANCE LOGO ARE TRADEMARKS OF REVANCE
          THERAPEUTICS, INC. RHA IS A REGISTERED TRADEMARK OF TEOXANE SA. RHA
          REDENSITY IS A TRADEMARK OF TEOXANE SA. REVANCE THERAPEUTICS, INC.
          RHA00186 RHA-P-003002
        </p>
      </div>
    </footer>
  );
}
