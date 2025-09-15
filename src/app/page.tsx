"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Film,
  Palette,
  Edit,
  FileText,
  Clapperboard,
  ArrowRight,
  Play,
} from "lucide-react";

/* ------------------ Services ------------------ */
const services = [
  {
    img: "/works/works02.png",
    title: "Video Production",
    desc: "High-impact video content that blends cinematic storytelling with brand identity.",
  },
  {
    img: "/works/grade01.png",
    title: "Color Grading",
    desc: "Professional grading to craft mood, style, and visual depth for your films.",
  },
  {
    img: "/works/post01.png",
    title: "Post-production",
    desc: "Full post-production services: editing, sound design, and delivery.",
  },
];

function ServicesPreview() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((s, i) => (
        <motion.div
          key={i}
          className="group relative bg-gradient-to-br from-gray-900/40 to-gray-800/10 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 w-full h-40 sm:h-48 md:h-56 relative rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <Image src={s.img} alt={s.title} fill className="object-cover" />
          </div>

          <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}

      <motion.div
        className="mt-16 text-center col-span-full"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/Service"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all group"
        >
          View All Services
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* ------------------ Works ------------------ */
const works = [
  { title: "Paytm First Games Ad Film", img: "/works/ad5/4.png", tag: "Ad film" },
  { title: "Paytm Ad Film", img: "/works/ad11/4.png", tag: "Ad film" },
  { title: "Nescafe Ad Film", img: "/works/ad9/3.png", tag: "Ad film" },
  { title: "Sitaro mein hai ghar", img: "/works/mv1/3.png", tag: "Music Video" },
  { title: "Teri Jaan", img: "/works/mv2/2.png", tag: "Music Video" },
  { title: "Intezaar", img: "/works/mv3/4.png", tag: "Music Video" },
];

function WorksPreview() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {works.map((w, i) => (
        <motion.div
          key={i}
          className="group relative bg-gradient-to-br from-gray-900/40 to-gray-800/10 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 w-full h-40 sm:h-48 md:h-56 relative rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <Image src={w.img} alt={w.title} fill className="object-cover" />
          </div>

          <h3 className="text-xl font-bold mb-2 text-white">{w.title}</h3>
          <p className="text-gray-400 text-sm sm:text-base">{w.tag}</p>
        </motion.div>
      ))}

      <motion.div
        className="mt-16 text-center col-span-full"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/Work"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/40 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all group"
        >
          View More Works
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* ------------------ About ------------------ */
function AboutSection() {
  return (
    <motion.section
      className="py-32 max-w-6xl mx-auto px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
        Byxbyte Media
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
        A <span className="text-white font-semibold">Mumbai-based creative studio </span>
        blending video production, design, and VFX to help brands and creators
        craft stories that resonate.
      </p>
      <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
        From cinematic ad films to cutting-edge motion design, we create
        content that not only looks good but drives engagement and growth.
      </p>
    </motion.section>
  );
}

/* ------------------ CTA ------------------ */
function CTASection() {
  return (
    <motion.section
      className="py-32 max-w-4xl mx-auto px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
        Let’s Build Something Remarkable
      </h2>
      <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Whether it’s a brand film, a digital campaign, or full-stack development,
        we’ll bring your vision to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition group"
        >
          Start Your Project
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold rounded-2xl border border-gray-600/40 shadow-lg hover:-translate-y-1 transition group"
        >
          <Play className="w-5 h-5" />
          View Our Work
        </Link>
      </div>
    </motion.section>
  );
}

/* ------------------ Main ------------------ */
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-black bg-grid-white/[0.02] text-white relative">
      {/* Decorative blur backgrounds */}
      <div className="fixed top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <Header />
        <Hero /> {/* already animates */}
        <AboutSection />

        <section className="py-32 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <ServicesPreview />
        </section>

        <section className="py-32 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Works
          </h2>
          <WorksPreview />
        </section>

        <Testimonials />

        <CTASection />

        
      </div>
    </main>
  );
}
