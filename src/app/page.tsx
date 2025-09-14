"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

import Link from "next/link";
import Image from "next/image";
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
    icon: <Film className="w-10 h-10 text-red-400" />,
    title: "Video Production",
    desc: "High-impact video content that blends cinematic storytelling with brand identity.",
  },
  {
    icon: <Palette className="w-10 h-10 text-purple-400" />,
    title: "Color Grading",
    desc: "Professional grading to craft mood, style, and visual depth for your films.",
  },
  {
    icon: <Edit className="w-10 h-10 text-blue-400" />,
    title: "Post-production",
    desc: "Full post-production services: editing, sound design, and delivery.",
  },
  {
    icon: <FileText className="w-10 h-10 text-green-400" />,
    title: "Script Writing",
    desc: "Story-driven scripts designed to captivate audiences and inspire action.",
  },
  {
    icon: <Clapperboard className="w-10 h-10 text-orange-400" />,
    title: "Storyboarding",
    desc: "Visual roadmaps for efficient production and creative clarity.",
  },
];

function ServicesPreview() {
  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((s, i) => (
          <div
            key={i}
            className="group relative bg-gradient-to-br from-gray-900/40 to-gray-800/10 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="mb-6 p-4 bg-gray-800/40 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              {s.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all group"
        >
          View All Services
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </>
  );
}

/* ------------------ Works ------------------ */
const works = [
  {
    title: "E-commerce Ad Film",
    img: "/works/works01.jpg",
    tag: "Ad Films",
    category: "Commercial",
  },
  {
    title: "Branding Campaign",
    img: "/works/works02.jpg",
    tag: "Design",
    category: "Brand",
  },
  {
    title: "Startup Website",
    img: "/works/works03.jpg",
    tag: "Development",
    category: "Digital",
  },
  {
    title: "VFX Animation",
    img: "/works/works04.jpg",
    tag: "VFX",
    category: "Animation",
  },
];

function WorksPreview() {
  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {works.map((w, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-900/30 to-gray-800/10 backdrop-blur-md shadow-lg hover:-translate-y-2 hover:border-gray-600/50 transition-all"
          >
            <Image
              src={w.img}
              alt={w.title}
              width={500}
              height={300}
              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold text-white mb-1">{w.title}</h3>
              <p className="text-sm text-gray-300">{w.tag}</p>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm border border-white/30 group-hover:scale-110 transition">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/40 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all group"
        >
          View More Works
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </>
  );
}

/* ------------------ About ------------------ */
function AboutSection() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
        Byxbyte Media
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
        A <span className="text-white font-semibold">Mumbai-based creative studio</span> 
        blending video production, design, and VFX to help brands and creators
        craft stories that resonate.
      </p>
      <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
        From cinematic ad films to cutting-edge motion design, we create
        content that not only looks good but drives engagement and growth.
      </p>
    </section>
  );
}

/* ------------------ CTA ------------------ */
function CTASection() {
  return (
    <section className="py-32 max-w-4xl mx-auto px-6 text-center">
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
    </section>
  );
}

/* ------------------ Main ------------------ */
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-black bg-grid-white/[0.02] text-white relative">
      {/* Subtle ambient effects */}
      <div className="fixed top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <Header />
        <Hero />
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
