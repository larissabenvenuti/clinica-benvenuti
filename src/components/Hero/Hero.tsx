"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Terapia Online com Psicólogas Especialistas
            <span className={styles.italicText}>
              {" "}
              Um espaço de acolhimento: seguro, ético e baseado em evidências.
            </span>
          </h1>

          <p className={styles.description}>
            Cuidado especializado para você regular emoções, lidar com a
            ansiedade e transformar padrões.
          </p>
          <div className={styles.ctaRow}>
            <a href="#contato" className={styles.primaryBtn}>
              Agendar Consulta
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.rightCol}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/clinic-notebook.jpeg"
            alt="Terapia online com psicólogas da Clínica Benvenuti"
            fill
            className={styles.bgImage}
            priority
          />
          <div className={styles.overlay} />
        </div>
      </motion.div>
    </section>
  );
}
