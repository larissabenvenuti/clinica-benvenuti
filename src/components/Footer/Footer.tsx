import { Phone } from "lucide-react";
import styles from "./footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <span className={styles.brandName}>Clínica Benvenuti</span>
            <span className={styles.brandSub}>Psicologia & Saúde</span>
          </div>

          <div className={styles.warningBox}>
            <Phone size={20} className={styles.warningIcon} strokeWidth={2} />
            <p>
              Este site não oferece tratamento ou aconselhamento imediato para
              pessoas em crise suicida. Em caso de crise, ligue para{" "}
              <strong>188</strong> (Centro de Valorização da Vida) ou acesse{" "}
              <a
                href="https://www.cvv.org.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cvv.org.br
              </a>
              .
            </p>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            Clínica Benvenuti Psicologia & Saúde &copy; {currentYear} – Todos os
            Direitos Reservados
          </p>
          <p className={styles.developer}>
            Desenvolvido por:{" "}
            <a
              href="https://github.com/larissabenvenuti"
              target="_blank"
              rel="noopener noreferrer"
            >
              Larissa Benvenuti
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
