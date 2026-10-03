"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import styles from "./founder.module.scss";

export default function Founder() {
  const [isOpen, setIsOpen] = useState(false);

  const principaisFormacoes = [
    "Especialista em Psicoterapias Baseadas em Evidências: Terapias Cognitivo-Comportamentais pelo Grupo PBE/Faculdade Focus",
    "Especializada em Transtornos Alimentares e Comportamento Alimentar pelo Ambulim IPqHCFM da Universidade de São Paulo (USP)",
    "Formação completa em Terapia Cognitivo-Comportamental para Transtornos Alimentares (CBT-E) pela Universidade de Oxford",
  ];

  const outrasFormacoes = [
    "Formação completa em Terapia Cognitivo-Comportamental pelo Grupo PBE/Faculdade FaCiência",
    "Formação completa em Transtornos de Ansiedade e de Estresse por Harvard",
    "Mais de 300 horas de formação complementar certificada, incluindo estudos em Análise do Comportamento Aplicada (ABA) pelo CBI of Miami",
  ];

  return (
    <section id="fundadora" className={styles.founder}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={styles.title}>Sobre a Fundadora</h2>

            <p className={styles.intro}>
              Sou <strong>Eduarda Benvenuti</strong>, psicóloga clínica e
              fundadora da Clínica Benvenuti. Meu propósito é guiar o seu
              processo terapêutico através de uma abordagem que une acolhimento
              genuíno e conhecimento científico. Se procura um acompanhamento
              psicológico online seguro, estou aqui com a minha equipe para
              oferecer um olhar individualizado para a sua história e a sua
              saúde mental.
            </p>

            <div className={styles.formacoesContainer}>
              <ul className={styles.list}>
                {principaisFormacoes.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <span className={styles.bullet}></span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className={styles.accordionContainer}>
              <button
                className={styles.accordionTrigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                <span>Mais Formações</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={styles.icon}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.accordionContentWrapper}
                  >
                    <div className={styles.accordionContent}>
                      <ul className={styles.list}>
                        {outrasFormacoes.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.05 + 0.1,
                              duration: 0.4,
                            }}
                          >
                            <span className={styles.bullet}></span> {item}
                          </motion.li>
                        ))}
                      </ul>
                      <p className={styles.conclusion}>
                        Busco aprimoramento constante para oferecer o melhor
                        tratamento psicológico e acompanhar os avanços da
                        psicoterapia baseada em evidências científicas.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className={styles.imgBox}>
              <Image
                src="/clinic-founder.jpeg"
                alt="Eduarda Benvenuti - Psicóloga Clínica"
                fill
                className={styles.img}
              />
            </div>
            <motion.div
              className={styles.crpBadge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              CRP 05/81279
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
