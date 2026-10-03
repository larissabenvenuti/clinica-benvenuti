"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Diamond } from "lucide-react";
import styles from "./clinic.module.scss";

export default function Clinic() {
  const demandas = [
    "Terapia para Ansiedade, Estresse e Burnout",
    "Tratamento de Depressão e Regulação Emocional",
    "Apoio em Comportamento Alimentar e Emagrecimento",
    "Desenvolvimento da Autoestima e da Imagem Corporal",
    "Orientação para Relacionamentos e Processos de Luto",
    "Psicoterapia para Transtornos Alimentares",
  ];

  return (
    <section id="sobre" className={styles.clinic}>
      <div className={styles.container}>
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>A Clínica Benvenuti</h2>
          <p className={styles.lead}>
            Conheça a clínica: seu consultório de psicologia online. Um ambiente
            de psicoterapia humano, acolheador e guiado pelas melhores práticas
            clínicas.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/clinic-card.jpeg"
              alt="Cartão da Clínica"
              fill
              className={styles.img}
            />
          </motion.div>

          <motion.div
            className={styles.textWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className={styles.paragraph}>
              Oferecemos <strong>atendimento psicológico online</strong> para
              adolescentes, adultos e idosos. Onde quer que você esteja — no
              Brasil ou no exterior —, conectamos você a terapeutas altamente
              qualificadas. Também oferecemos psicoterapia bilingue (suporte em
              inglês).
            </p>
            <div className={styles.listContainer}>
              <h4>Algumas Áreas de Atuação:</h4>
              <ul>
                {demandas.map((d, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                  >
                    <Diamond
                      size={10}
                      strokeWidth={2}
                      className={styles.icon}
                    />
                    <span>{d}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
