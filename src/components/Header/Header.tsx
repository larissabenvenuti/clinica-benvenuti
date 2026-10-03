"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import styles from "./header.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className={styles.container}>
        <a href="#" className={styles.logoWrapper}>
          <Image
            src="/clinic-logo.png"
            alt="Logo Clínica Benvenuti"
            width={50}
            height={50}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brand}>Clínica Benvenuti</span>
            <span className={styles.subBrand}>Psicologia & Saúde</span>
          </div>
        </a>

        <nav className={styles.nav}>
          <a href="#sobre">A Clínica</a>
          <a href="#fundadora">Fundadora</a>
          <a href="#abordagens">Abordagens</a>
          <a href="#faq">Dúvidas Frequentes</a>
        </nav>

        <div className={styles.action}>
          <a href="#contato" className={styles.contactBtn}>
            <Mail size={16} strokeWidth={2.5} />
            <span>Contato</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}