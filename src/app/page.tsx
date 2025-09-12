import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Testimonials/>
      {/* <Footer /> */}
    </main>
  );
}
