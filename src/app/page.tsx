// app/page.tsx
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Clinic from "@/components/About/Clinic/Clinic";
import Founder from "@/components/About/Founder/Founder";
import Approaches from "@/components/Approaches/Approaches";
import FAQ from "@/components/FAQ/FAQ";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Reach from "@/components/Reach/Reach";
import FirstBanner from "@/components/Banners/FirstBanner/FirstBanner";
import SecondBanner from "@/components/Banners/SecondBanner/SecondBanner";
import Benefits from "@/components/Benefits/Benefits";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Clinic />
      <Founder />
      <Approaches />
      <FirstBanner />
      <Reach />
      <SecondBanner />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
