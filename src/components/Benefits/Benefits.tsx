"use client";
import { motion } from "framer-motion";
import { Brain, Lightbulb, Heart, Sunrise, Users, Compass } from "lucide-react";
import styles from "./benefits.module.scss";

const benefits = [
  {
    icon: Brain,
    title: "Aliviar a ansiedade",
    text: "Aprender a regular suas emoções e lidar de forma mais saudável com o stress e as pressões do dia a dia.",
  },
  {
    icon: Lightbulb,
    title: "Quebrar padrões",
    text: "Identificar e modificar pensamentos ou comportamentos limitantes que impactam negativamente a sua rotina.",
  },
  {
    icon: Heart,
    title: "Fortalecer a autoestima",
    text: "Construir uma relação mais equilibrada e saudável com você, seu corpo e a alimentação.",
  },
  {
    icon: Compass,
    title: "Ressignificar traumas",
    text: "Dar um novo significado a vivências difíceis e reduzir a autocrítica, olhando para sua história com mais compaixão.",
  },
  {
    icon: Users,
    title: "Melhorar relacionamentos",
    text: "Desenvolver uma comunicação assertiva, aprender a impor limites e trabalhar a culpa e o luto.",
  },
  {
    icon: Sunrise,
    title: "Consolidar o autoconhecimento",
    text: "Fortalecer a sua identidade para tomar decisões com clareza e alinhada aos seus valores.",
  },
];

export default function Benefits() {
  return (
    <section className={styles.benefits} id="beneficios">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className={styles.leadText}>
            Oferecemos um espaço seguro, sigiloso e que respeita o seu tempo e
            sua singularidade. Como a terapia pode te ajudar:
          </p>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                </div>
                <p>{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
