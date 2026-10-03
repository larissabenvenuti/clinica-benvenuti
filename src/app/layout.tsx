import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import "../styles/globals.scss";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Benvenuti | Psicologia & Saúde",
  description:
    "Terapia online por psicólogas especialistas. Um cuidado humanizado com a sua saúde mental, te ajudando a lidar com suas emoções e a transformar padrões que te fazem mal, sempre de acordo com as melhores evidências científicas: TCC, ACT e DBT.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
