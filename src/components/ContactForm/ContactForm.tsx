"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./contact-form.module.scss";

const InstagramIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    periodo: "Manhã",
    mensagem: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({
        nome: "",
        email: "",
        celular: "",
        periodo: "Manhã",
        mensagem: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className={styles.contato}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Entre em Contato!</h2>
          <p>Será um prazer atender você (:</p>

          <div className={styles.directContact}>
            <a
              href="https://wa.me/5524999253942?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsBtn}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/clinicabenvenuti/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaBtn}
            >
              <InstagramIcon />
              clinicabenvenuti
            </a>
          </div>

          <div className={styles.separator}>
            <p>Ou se preferir, entre em contato pelo formulário abaixo: </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className={styles.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.field}>
            <div className={styles.titleArea}>
              <label>Nome Completo</label>
              <span className={styles.star}>*</span>
            </div>
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              placeholder="Seu nome completo"
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <div className={styles.titleArea}>
                <label>E-mail</label>
                <span className={styles.star}>*</span>
              </div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="seu@email.com"
              />
            </div>
            <div className={styles.field}>
              <div className={styles.titleArea}>
                <label>Celular / WhatsApp</label>
                <span className={styles.star}>*</span>
              </div>
              <input
                type="tel"
                required
                value={formData.celular}
                onChange={(e) =>
                  setFormData({ ...formData, celular: e.target.value })
                }
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.titleArea}>
              <label>Qual período fica melhor?</label>
              <span className={styles.star}>*</span>
            </div>

            <select
              value={formData.periodo}
              onChange={(e) =>
                setFormData({ ...formData, periodo: e.target.value })
              }
            >
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Mensagem específica</label>
            <textarea
              rows={4}
              value={formData.mensagem}
              onChange={(e) =>
                setFormData({ ...formData, mensagem: e.target.value })
              }
              placeholder="Um espaço acolhedor para caso você queira contar o que te traz aqui..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={styles.submitBtn}
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
          </button>

          {status === "success" && (
            <p className={styles.success}>Mensagem enviada com sucesso!</p>
          )}
          {status === "error" && (
            <p className={styles.error}>Erro ao enviar. Tente novamente.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
