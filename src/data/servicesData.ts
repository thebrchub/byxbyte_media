// src/data/servicesData.ts
import { Video, Palette, Edit3, FileText, Clapperboard, Play } from 'lucide-react';
import { Service } from "../components/type/service";

/* ---------- Work Items ---------- */
export interface ServiceItem {
  name: string;
  title?: string;
  img: string;
}

export const videoProductionWorks: ServiceItem[] = [
  { name: "Commercial01", title: "", img: "/works/works01.png" },
  { name: "Commercial02", title: "", img: "/works/works02.png" },
  { name: "Commercial03", title: "", img: "/works/works03.png" },
  { name: "Commercial04", title: "", img: "/works/works04.png" },
  { name: "Commercial05", title: "", img: "/works/works05.png" },
];

export const colorGradingWorks: ServiceItem[] = [
  { name: "Grade01", title: "", img: "/works/grade01.png" },
  { name: "Grade02", title: "", img: "/works/grade02.png" },
  { name: "Grade03", title: "", img: "/works/grade03.png" },
  { name: "Grade04", title: "", img: "/works/grade04.png" },
];

export const postProductionWorks: ServiceItem[] = [
  { name: "Post01", title: "", img: "/works/post01.png" },
  { name: "Post02", title: "", img: "/works/post02.png" },
  { name: "Post03", title: "", img: "/works/post03.png" },
];

export const scriptWritingWorks: ServiceItem[] = [
  { name: "Script01", title: "", img: "/works/script01.png" },
  // { name: "Script02", title: "", img: "/works/script02.png" },
  // { name: "Script03", title: "", img: "/works/script03.png" },
];

export const storyboardingWorks: ServiceItem[] = [
  { name: "Storyboard01", title: "", img: "/works/story01.png" },
  { name: "Storyboard02", title: "", img: "/works/story02.png" },
  { name: "Storyboard03", title: "", img: "/works/story03.png" },
  { name: "Storyboard04", title: "", img: "/works/story04.png" },
];

/* ---------- Services Data ---------- */
export const servicesData: Service[] = [
  {
    id: 1,
    title: "Video Production",
    description: "From concept to completion, we create compelling visual stories that captivate your audience",
    detailedDescription: "Our comprehensive video production service covers every aspect of creating professional, engaging content. From initial concept development to final delivery, we ensure your vision comes to life with the highest production values.",
    features: [
      "Concept Development & Pre-Production Planning",
      "Professional Cinematography & Lighting",
      "Multi-Camera Setup & Direction",
      "Location Scouting & Management",
      "Talent Coordination & Direction",
      "High-End Equipment & Technology"
    ],
    process: [
      {
        title: "Pre-Production",
        steps: [
  {
    title: "Script Writing",
    description: "Our experienced scriptwriters craft compelling scripts...",
    img: "/works/steps/script01.png"
  },
  {
    title: "Storyboarding",
    description: "Visual storyboards to outline shots, angles, key elements...",
    img: "/works/steps/script02.png"
  }
],

      },
      {
        title: "Production",
        steps: [
          {
            title: "Filming",
            description: "High-quality footage with professional cameras and crew",
            img: "/works/steps/production-1.jpg",
          },
          {
            title: "Lighting Setup",
            description: "Professional techniques for mood and clarity",
            img: "/works/steps/production-2.jpg",
          },
          {
            title: "Audio Recording",
            description: "Clear dialogue, ambient sound, and effects",
            img: "/works/steps/production-3.jpg",
          },
          {
            title: "Direction",
            description: "Guiding talent to deliver authentic performances",
            img: "/works/steps/production-4.jpg",
          },
        ],
      },
  {
    title: "Post-Production",
    steps: [
      {
        title: "Video Editing",
        description: "Seamless transitions, VFX, motion graphics",
        img: "/works/steps/postproduction-1.jpg",
      },
      {
        title: "Color Grading",
        description: "Create mood and align with brand identity",
        img: "/works/steps/postproduction-2.png",
      },
      {
        title: "Sound Design & Mixing",
        description: "Enhance audio with music, VO, effects",
        img: "/works/steps/postproduction-3.jpg",
      },
      {
        title: "Final Delivery",
        description: "Optimized formats for TV, web, and social media",
        img: "/works/steps/postproduction-4.jpg",
      },
    ],
  },

    ],
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    className: "md:col-span-4 lg:col-span-2 row-span-1 h-64",
    titleClassName: "justify-start items-start text-white",
    descriptionClassName: "text-gray-300",
    img: "/works/works01.png",
    imgClassName: "w-full h-full object-cover opacity-30",
    spareImg: "/works/works02.jpg", // ✅ added alternate
  },
  {
    id: 2,
    title: "Color Grading & DI",
    description: "Transform your footage with professional color grading and digital intermediate services",
    detailedDescription: "Our color grading and Digital Intermediate (DI) services enhance the visual impact of your content. Using industry-standard tools and techniques, we create the perfect mood, atmosphere, and visual consistency for your project.",
    features: [
      "Professional Color Correction & Grading",
      "LUT Creation & Application",
      "HDR & SDR Delivery Formats",
      "Skin Tone Optimization",
      "Mood & Atmosphere Enhancement",
      "Technical Quality Control"
    ],
    beforeAfterPairs: [
      { before: "/works/colorgrading/grade01-before.png", after: "/works/colorgrading/grade01-after.png" },
      { before: "/works/colorgrading/grade02-before.png", after: "/works/colorgrading/grade02-after.png" },
      { before: "/works/colorgrading/grade03-before.png", after: "/works/colorgrading/grade03-after.png" },
      { before: "/works/colorgrading/grade04-before.png", after: "/works/colorgrading/grade04-after.png" },
      { before: "/works/colorgrading/grade05-before.png", after: "/works/colorgrading/grade05-after.png" },
      { before: "/works/colorgrading/grade06-before.png", after: "/works/colorgrading/grade06-after.png" },
      { before: "/works/colorgrading/grade07-before.png", after: "/works/colorgrading/grade07-after.png" },
      { before: "/works/colorgrading/grade08-before.png", after: "/works/colorgrading/grade08-after.png" },
      { before: "/works/colorgrading/grade09-before.png", after: "/works/colorgrading/grade09-after.png" },
      { before: "/works/colorgrading/grade10-before.png", after: "/works/colorgrading/grade10-after.png" },
      { before: "/works/colorgrading/grade11-before.png", after: "/works/colorgrading/grade11-after.png" },
      { before: "/works/colorgrading/grade12-before.png", after: "/works/colorgrading/grade12-after.png" },
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
    features: [
      "Video Editing & Assembly",
      "Sound Design & Audio Mixing",
      "Visual Effects & Motion Graphics",
      "Title Design & Animation",
      "Format Conversion & Delivery",
      "Quality Control & Review"
    ],
    process: [
      {
        title: "Pre-Production",
        steps: [
  {
    title: "Script Writing",
    description: "Our experienced scriptwriters craft compelling scripts...",
    img: "/works/steps/script01.png"
  },
  {
    title: "Storyboarding",
    description: "Visual storyboards to outline shots, angles, key elements...",
    img: "/works/steps/script02.png"
  }
],

      },
      {
        title: "Production",
        steps: [
          {
            title: "Filming",
            description: "High-quality footage with professional cameras and crew",
            img: "/works/steps/production-1.jpg",
          },
          {
            title: "Lighting Setup",
            description: "Professional techniques for mood and clarity",
            img: "/works/steps/production-2.jpg",
          },
          {
            title: "Audio Recording",
            description: "Clear dialogue, ambient sound, and effects",
            img: "/works/steps/production-3.jpg",
          },
          {
            title: "Direction",
            description: "Guiding talent to deliver authentic performances",
            img: "/works/steps/production-4.jpg",
          },
        ],
      },
  {
    title: "Post-Production",
    steps: [
      {
        title: "Video Editing",
        description: "Seamless transitions, VFX, motion graphics",
        img: "/works/steps/postproduction-1.jpg",
      },
      {
        title: "Color Grading",
        description: "Create mood and align with brand identity",
        img: "/works/steps/postproduction-2.png",
      },
      {
        title: "Sound Design & Mixing",
        description: "Enhance audio with music, VO, effects",
        img: "/works/steps/postproduction-3.jpg",
      },
      {
        title: "Final Delivery",
        description: "Optimized formats for TV, web, and social media",
        img: "/works/steps/postproduction-4.jpg",
      },
    ],
  },

    ],
    gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
    className: "md:col-span-2 lg:col-span-1 row-span-2 h-96 md:h-[32rem]",
    titleClassName: "justify-start items-start text-white",
    descriptionClassName: "text-gray-300",
    img: "/works/works03.jpg",
    imgClassName: "w-full h-full opacity-30",
    spareImg: "/works/post02.jpg", // ✅ added alternate
  },
  {
    id: 4,
    title: "Script Writing",
    description: "Craft compelling narratives that engage and inspire",
    detailedDescription: "Professional scriptwriting services that transform ideas into compelling narratives...",
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
    detailedDescription: "Professional storyboarding services that help visualize your project before filming begins...",
    features: [
      "Detailed Scene Visualization",
      "Camera Angle Planning",
      "Shot Composition",
      "Timing & Pacing",
      "Technical Annotations",
      "Digital & Traditional Methods"
    ],
    gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
    className: "md:col-span-2 lg:col-span-1 row-span-1 h-64",
    titleClassName: "justify-start items-start text-white text-xl",
    descriptionClassName: "text-gray-300 text-sm",
  },
  {
    id: 6,
    title: "Let&apos;s Create Something Amazing",
    description: "Ready to bring your vision to life? Get in touch with us today.",
    detailedDescription: "",
    features: [],
    className: "md:col-span-6 lg:col-span-4 row-span-1 h-48",
    titleClassName: "flex justify-center items-center text-white text-xl text-center",
    descriptionClassName: "text-gray-300 text-sm text-center",
  },
];
