"use client";
import { motion } from "framer-motion";
import { CheckCircle2, HeartHandshake } from "lucide-react";
import styles from "./approaches.module.scss";

const therapies = [
  {
    tag: "TCC",
    title: "Terapia Cognitivo-Comportamental",
    desc: "Prática focada no presente, que ajuda a identificar e modificar padrões de pensamento e comportamento disfuncionais, que geram sofrimento. É a abordagem mais indicada para o tratamento da ansiedade, depressão e transtornos alimentares, dentre outros.",
  },
  {
    tag: "ACT",
    title: "Terapia de Aceitação e Compromisso",
    desc: 'Ajuda a desenvolver flexibilidade psicológica. O objetivo é mudar a forma como você se relaciona com os seus pensamentos difíceis, permitindo-lhe agir em direção ao que realmente importa e aos seus valores. É a abordagem "padrão-ouro" para dores crônicas, sendo também muito eficaz para várias outras demandas.',
  },
  {
    tag: "DBT",
    title: "Terapia Comportamental Dialética",
    desc: "Especializada no Treino de regulação emocional. Ensina habilidades práticas para tolerar o mal-estar, gerir emoções intensas e melhorar relacionamentos, sem recorrer a comportamentos impulsivos. É altamente indicada para o Transtorno de Personalidade Borderline.",
  },
];

const demands = [
  {
    title: "Ansiedade e Estresse",
    desc: "Ansiedade generalizada, social, fobias, pânico, TOC, estresse crônico e dificuldade de relaxar.",
  },
  {
    title: "Humor e Depressão",
    desc: "Desânimo persistente, apatia, tristeza profunda, falta de energia e ausência de prazer.",
  },
  {
    title: "Desafios Profissionais",
    desc: "Síndrome de burnout, esgotamento mental, estresse no trabalho e transições de carreira.",
  },
  {
    title: "Relacionamentos",
    desc: "Conflitos, dependência emocional, medo da rejeição e do abandono, necessidade de validação e limites.",
  },
  {
    title: "Traumas e Luto",
    desc: "Ressiginificação de experiências traumáticas, perdas significativas e adaptação a mudanças.",
  },
  {
    title: "Hábitos e Vícios",
    desc: "Comportamentos impulsivos, vícios, dependências e quebra de ciclos prejudiciais.",
  },
  {
    title: "Autoestima e Imagem",
    desc: "Insegurança, autocrítica severa, comparação excessiva e insatisfação com a autoimagem.",
  },
  {
    title: "Comportamento Alimentar",
    desc: "Relação conflituosa com comida, comer emocional ou exagerado, emagrecimento e obesidade, apoio à bariátrica e transtornos alimentares como: anorexia, bulimia e transtorno de compulsão alimentar.",
  },
];

export default function Approaches() {
  return (
    <section id="abordagens" className={styles.approaches}>
      <div className={styles.container}>
        <div className={styles.stickyPanel}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.introBlock}
          >
            <span className={styles.label}>Nossas Abordagens</span>
            <h2>Psicoterapias Baseadas em Evidências (PBE)</h2>
            <p className={styles.leadText}>
              O cuidado com a sua saúde mental merece o que há de mais seguro,
              ético e eficaz na psicologia atual. Em nossa clínica, unimos um
              acolhimento profundamente humano a métodos terapêuticos validados
              cientificamente. Este compromisso garante que o seu acompanhamento
              psicológico seja direcionado para resultados reais, com foco na
              melhoria da sua qualidade de vida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.commitmentCard}
          >
            <div className={styles.cardHeader}>
              <HeartHandshake size={24} />
              <h3>Nosso compromisso com você</h3>
            </div>
            <p>
              Se você sente que está preso(a) em ciclos de pensamentos que te
              impedem de avançar, a psicoterapia online é o primeiro passo para
              uma mudança profunda. O nosso objetivo é promover o seu equilíbrio
              emocional através de um atendimento humanizado, focado na
              resolução dos seus problemas e no resgate da sua autonomia.
            </p>
          </motion.div>
        </div>

        <div className={styles.contentPanel}>
          <motion.div
            className={styles.therapiesSection}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Principais Linhas de Atuação:</h3>
            <div className={styles.therapiesList}>
              {therapies.map((item, index) => (
                <div key={index} className={styles.therapyItem}>
                  <div className={styles.therapyHeader}>
                    <span className={styles.tag}>{item.tag}</span>
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.demandsSection}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Demandas que acolhemos</h3>
            <p className={styles.subText}>
              Algumas das principais áreas em que os nossos especialistas podem
              te ajudar através da psicoterapia online:
            </p>
            <div className={styles.demandsGrid}>
              {demands.map((demand, index) => (
                <div key={index} className={styles.demandCard}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <div>
                    <h4>{demand.title}</h4>
                    <p>{demand.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
