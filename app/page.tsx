import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import AboutTutor from "@/components/AboutTutor";
import LessonSteps from "@/components/LessonSteps";
import Benefits from "@/components/Benefits";
import Formats from "@/components/Formats";
import Tariffs from "@/components/Tariffs";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff]">
      <div className="mx-auto w-full max-w-[1500px] bg-white">
        <Header />

        <main>
          <Hero />
          <Audience />
          <AboutTutor />
          <LessonSteps />
          <Benefits />
          <Formats />
          <Tariffs />
          <Reviews />
          <FAQ />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </div>
  );
};