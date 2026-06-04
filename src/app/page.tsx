import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection"; 
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatAgent from "@/components/ChatAgent";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StorySection />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <ChatAgent />
    </>
  );
}
