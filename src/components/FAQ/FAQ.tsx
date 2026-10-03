"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./faq.module.scss";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como funciona a terapia online?",
      a: (
        <>
          As sessões ocorrem por videochamada (pelo Google Meet) e têm duração
          de aproximadamente 50 minutos. É um espaço{" "}
          <strong>100% sigiloso e seguro</strong>, garantindo o mesmo
          acolhimento do atendimento presencial, mas com a praticidade de ser
          atendido no conforto e na privacidade da sua casa.
        </>
      ),
    },
    {
      q: "A terapia online é indicada para o meu caso?",
      a: (
        <>
          Sim. Acolhemos pessoas que buscam lidar com{" "}
          <strong>
            ansiedade, comportamento alimentar, depressão, estresse, burnout, processos de luto, questões
            de autoestima e conflitos em relacionamentos
          </strong>, dentre outras demandas. 
          Mesmo que você não saiba exatamente nomear o que está sentindo no
          momento, a terapia é o lugar seguro para descobrir e organizar essas
          emoções.
        </>
      ),
    },
    {
      q: "A psicoterapia online tem a mesma eficácia da presencial?",
      a: (
        <>
          Com certeza. Inúmeros estudos científicos já comprovam que a{" "}
          <strong>terapia online é tão eficaz quanto a presencial</strong>.
          Nossas psicólogas utilizam abordagens baseadas em evidências para
          garantir que você tenha resultados reais e consistentes no seu
          tratamento, independente da distância.
        </>
      ),
    },
    {
      q: "Estou com receio. Como é a primeira sessão?",
      a: (
        <>
          É muito normal sentir um "friozinho na barriga" antes de começar! A
          primeira sessão é, antes de tudo, uma{" "}
          <strong>conversa de acolhimento</strong>. A psicóloga vai ouvir a sua
          história no seu tempo e entender o que te trouxe à clínica. Você não
          precisa se preparar, saber o que dizer ou ter um roteiro; nós
          guiaremos você com todo cuidado.
        </>
      ),
    },
    {
      q: "Vocês atendem por convênio ou plano de saúde?",
      a: (
        <>
          Os nossos atendimentos são particulares, mas{" "}
          <strong>
            emitimos Nota Fiscal para que você solicite o reembolso
          </strong>{" "}
          (integral ou parcial) junto ao seu plano de saúde. A maioria dos
          planos oferece esse direito por lei. Recomendamos apenas que você
          consulte a sua operadora para verificar os valores e as condições do
          seu contrato.
        </>
      ),
    },
    {
      q: "Como funciona o processo de reembolso pelo convênio?",
      a: (
        <>
          É um processo simples:
          <br />
          <br />
          <strong>1.</strong> Você realiza as sessões particulares conosco.
          <br />
          <strong>2.</strong> Ao final do mês, enviamos a Nota Fiscal para você.
          <br />
          <strong>3.</strong> Você confere com a operadora do seu convênio como prosseguir
          e o valor tende a ser depositado diretamente na sua conta (geralmente
          entre 15 e 30 dias).
        </>
      ),
    },
    {
      q: "Qual é a duração do tratamento e a frequência das sessões?",
      a: (
        <>
          Geralmente, iniciamos com <strong>sessões semanais</strong> para criar
          um vínculo de confiança e entender a sua demanda de forma profunda.
          Com a sua evolução, os encontros podem passar a ser quinzenais. O
          tempo total de acompanhamento varia de pessoa para pessoa, sempre
          respeitando o seu ritmo e os seus objetivos terapêuticos.
        </>
      ),
    },
    {
      q: "Qual é o valor da sessão e as formas de pagamento?",
      a: (
        <>
          Seguindo o Código de Ética do Conselho Regional de Psicologia (CRP),{" "}
          <strong>não podemos divulgar valores publicamente</strong>. Mas basta
          nos chamar no WhatsApp! Lá, explicamos os valores de sessões avulsas e
          dos pacotes mensais. Aceitamos pagamentos via Pix ou transferência
          bancária.
        </>
      ),
    },
    {
      q: "Como faço para agendar o meu horário?",
      a: (
        <>
          É muito simples! Entre em contato conosco pelo nosso{" "}
          <strong>formulário de contato</strong> aqui no site ou nos chame
          diretamente no WhatsApp. Vamos entender melhor a sua necessidade e te
          ajudar a encontrar o melhor horário para darmos início à sua jornada.
        </>
      ),
    },
  ];

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Dúvidas Frequentes
        </motion.h2>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.item} ${isOpen ? styles.active : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={styles.question}
                >
                  <span>{item.q}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={styles.answerWrapper}
                    >
                      <div className={styles.answer}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
