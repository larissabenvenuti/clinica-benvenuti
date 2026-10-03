"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import styles from "./reach.module.scss";

export default function Reach() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 10, { duration: 2.5, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, count]);

  return (
    <section className={styles.reach} id="alcance" ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.counterWrapper}>
              <span className={styles.plus}>+</span>
              <motion.span className={styles.number}>{rounded}</motion.span>
            </div>
            <h3 className={styles.subtitle}>países alcançados</h3>
            <p className={styles.text}>
              Levamos psicoterapia online baseada em evidências e acolhimento
              humano a brasileiros em todo o mundo. Não importa onde esteja, a
              sua psicóloga online está à distância de um clique.
            </p>
          </motion.div>

          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className={styles.textContent}>
              <h3 className={styles.subtitle}>Sessões 100% Online</h3>
              <p className={styles.text}>
                Atendimento psicológico por videochamada com total sigilo e flexibilidade, adaptado à sua rotina e ao seu fuso horário no conforto da sua casa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}