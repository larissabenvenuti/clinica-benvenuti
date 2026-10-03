"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./second-banner.module.scss";

const WaveTop = () => (
  <svg
    className={styles.waveTop}
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

export default function SecondBanner() {
  return (
    <section className={styles.banner}>
      <WaveTop />
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.textBlock}
          >
            <h2>
              Priorizar a sua saúde mental não é egoísmo, é o primeiro passo
              para uma vida mais leve.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={styles.actionBlock}
          >
            <p>
              O processo psicoterapêutico é um espaço seguro e livre de
              julgamentos, desenhado exclusivamente para as suas necessidades.
              Agende seu acompanhamento psicológico online e comece hoje a
              cuidar de si.
            </p>
            <a href="#contato" className={styles.button}>
              <span>Fale com a Clínica</span>
              <ArrowRight size={18} strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
