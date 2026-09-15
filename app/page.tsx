import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import AboutTutor from "@/components/AboutTutor";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Header />

      <main className="w-full">
        <Hero />
        <Audience />
        <AboutTutor />
        <HowItWorks />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}