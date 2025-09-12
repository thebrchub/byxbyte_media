// src/data/servicesData.ts
import { Video, Palette, Edit3, FileText, Clapperboard, Play } from 'lucide-react';
import { Service } from "../components/type/service";

export interface ServiceItem {
  name: string;
  title?: string;
  img: string;
}



// Sample work data for moving cards
export const videoProductionWorks: ServiceItem[] = [
  { name: "Commercial01", title: "", img: "/works/works01.jpg" },
  { name: "Commercial02", title: "", img: "/works/video02.jpg" },
  { name: "Commercial03", title: "", img: "/works/video03.jpg" },
  { name: "Commercial04", title: "", img: "/works/video04.jpg" },
  { name: "Commercial05", title: "", img: "/works/video05.jpg" },
];

export const colorGradingWorks: ServiceItem[] = [
  { name: "Grade01", title: "", img: "/works/grade01.jpg" },
  { name: "Grade02", title: "", img: "/works/grade02.jpg" },
  { name: "Grade03", title: "", img: "/works/grade03.jpg" },
  { name: "Grade04", title: "", img: "/works/grade04.jpg" },
];

export const postProductionWorks: ServiceItem[] = [
  { name: "Post01", title: "", img: "/works/post01.jpg" },
  { name: "Post02", title: "", img: "/works/post02.jpg" },
  { name: "Post03", title: "", img: "/works/post03.jpg" },
];

export const scriptWritingWorks: ServiceItem[] = [
  { name: "Script01", title: "", img: "/works/script01.jpg" },
  { name: "Script02", title: "", img: "/works/script02.jpg" },
  { name: "Script03", title: "", img: "/works/script03.jpg" },
];

export const storyboardingWorks: ServiceItem[] = [
  { name: "Storyboard01", title: "", img: "/works/story01.jpg" },
  { name: "Storyboard02", title: "", img: "/works/story02.jpg" },
  { name: "Storyboard03", title: "", img: "/works/story03.jpg" },
];

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Video Production",
    description: "From concept to completion, we create compelling visual stories that captivate your audience",
    detailedDescription: "Our comprehensive video production service covers every aspect of creating professional, engaging content. From initial concept development to final delivery, we ensure your vision comes to life with the highest production values.",
    // icon: Video,
    features: [
      "Concept Development & Pre-Production Planning",
      "Professional Cinematography & Lighting",
      "Multi-Camera Setup & Direction",
      "Location Scouting & Management",
      "Talent Coordination & Direction",
      "High-End Equipment & Technology"
    ],
    process: [
      "Pre-Production: Concept, scripting, storyboarding, planning",
      "Production: Filming, directing, cinematography, sound recording",
      "Post-Production: Editing, color grading, sound design, delivery"
    ],
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    className: "md:col-span-4 lg:col-span-2 row-span-1 h-64",
    titleClassName: "justify-start items-start text-white",
    descriptionClassName: "text-gray-300",
    img: "/works/works01.jpg",
    imgClassName: "w-full h-full opacity-30",
  },
  {
    id: 2,
    title: "Color Grading & DI",
    description: "Transform your footage with professional color grading and digital intermediate services",
    detailedDescription: "Our color grading and Digital Intermediate (DI) services enhance the visual impact of your content. Using industry-standard tools and techniques, we create the perfect mood, atmosphere, and visual consistency for your project.",
    // icon: Palette,
    features: [
      "Professional Color Correction & Grading",
      "LUT Creation & Application",
      "HDR & SDR Delivery Formats",
      "Skin Tone Optimization",
      "Mood & Atmosphere Enhancement",
      "Technical Quality Control"
    ],
    beforeAfterPairs: [
      { before: "/works/grade01-before.jpg", after: "/works/grade01-after.jpg" },
      { before: "/works/grade02-before.jpg", after: "/works/grade02-after.jpg" },
      { before: "/works/grade03-before.jpg", after: "/works/grade03-after.jpg" },
      { before: "/works/grade04-before.jpg", after: "/works/grade04-after.jpg" }
    ],
    className: "md:col-span-4 lg:col-span-2 row-span-1 h-64",
    titleClassName: "justify-start items-start text-white",
    descriptionClassName: "text-gray-300",
    img: "/works/works02.jpg",
    imgClassName: "w-full h-full opacity-40",
  },

  {
    id: 3,
    title: "Post Production",
    description: "Complete post-production services to bring your vision to life",
    detailedDescription: "Our post-production services encompass the entire workflow from raw footage to final delivery. We handle editing, sound design, visual effects, and all technical aspects to ensure your content meets professional standards.",
    // icon: Edit3,
    features: [
      "Video Editing & Assembly",
      "Sound Design & Audio Mixing",
      "Visual Effects & Motion Graphics",
      "Title Design & Animation",
      "Format Conversion & Delivery",
      "Quality Control & Review"
    ],
    process: [
      "Pre-Production: Script analysis, asset organization, workflow planning",
      "Production: Editing, sound design, VFX, color correction",
      "Post-Production: Final review, mastering, delivery in multiple formats"
    ],
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    className: "md:col-span-2 lg:col-span-1 row-span-2 h-96 md:h-[32rem]",
    titleClassName: "justify-start items-start text-white",
    descriptionClassName: "text-gray-300",
    img: "/works/works03.jpg",
    imgClassName: "w-full h-full opacity-30",
  },
  {
    id: 4,
    title: "Script Writing",
    description: "Craft compelling narratives that engage and inspire",
    detailedDescription: "Professional scriptwriting services that transform ideas into compelling narratives. We create scripts that not only tell your story effectively but also consider production requirements and target audience engagement.",
    // icon: FileText,
    features: [
      "Original Script Development",
      "Adaptation & Rewrites",
      "Character Development",
      "Dialogue Crafting",
      "Structure & Pacing",
      "Genre-Specific Writing"
    ],
    className: "md:col-span-2 lg:col-span-1 row-span-1 h-64",
    titleClassName: "justify-start items-start text-white text-xl",
    descriptionClassName: "text-gray-300 text-sm",
  },
  {
    id: 5,
    title: "Storyboarding",
    description: "Visualize your story before production begins",
    detailedDescription: "Professional storyboarding services that help visualize your project before filming begins. Our detailed storyboards ensure efficient production planning and clear communication of creative vision.",
    // icon: Clapperboard,
    features: [
      "Detailed Scene Visualization",
      "Camera Angle Planning", 
      "Shot Composition",
      "Timing & Pacing",
      "Technical Annotations",
      "Digital & Traditional Methods"
    ],
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    className: "md:col-span-2 lg:col-span-1 row-span-1 h-64",
    titleClassName: "justify-start items-start text-white text-xl",
    descriptionClassName: "text-gray-300 text-sm",
  },
  {
    id: 6,
    title: "Let's Create Something Amazing",
    description: "Ready to bring your vision to life? Get in touch with us today.",
    detailedDescription: "",
    // icon: Play,
    features: [],
    className: "md:col-span-6 lg:col-span-4 row-span-1 h-48",
    titleClassName: "flex justify-center items-center text-white text-xl text-center",
    descriptionClassName: "text-gray-300 text-sm text-center"
  },
];