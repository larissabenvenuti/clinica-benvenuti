"use client";
import { motion } from "framer-motion";
import styles from "./first-banner.module.scss";

const Wave = () => (
  <svg
    className={styles.wave}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,165.3C672,160,768,128,864,122.7C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
);

export default function FirstBanner() {
  return (
    <section className={styles.banner}>
      <Wave />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.content}
        >
          <h2>Um espaço seguro e confidencial para iniciar a sua terapia online.</h2>
          <p>
            Dê o primeiro passo para o seu bem-estar emocional com um
            acompanhamento psicológico humanizado, focado nos seus resultados e no seu tempo. 
          </p>
          <a href="#contato" className={styles.button}>
            Agende sua Primeira Sessão
          </a>
        </motion.div>
      </div>
    </section>
  );
}
