// Services.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Service } from "../components/type/service";
import { useRouter } from "next/navigation";
import ServiceModal from "./ui/ServiceModal";

import { 
  servicesData, 
  videoProductionWorks, 
  colorGradingWorks, 
  postProductionWorks,
  scriptWritingWorks,
  storyboardingWorks,
  
} from "../data/servicesData";
// Remove the old service type import if it exists
// import { Service } from "../components/type/service";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getMovingItemsForService = (serviceId: number) => {
    switch (serviceId) {
      case 1: // Video Production
        return videoProductionWorks;
      case 2: // Color Grading
        return colorGradingWorks;
      case 3: // Post Production
        return postProductionWorks;
      case 4: // Script Writing
        return scriptWritingWorks;
      case 5: // Storyboarding
        return storyboardingWorks;
      default:
        return [];
    }
  };

  const getScrollDirectionForService = (
    serviceId: number
  ): "horizontal" | "vertical" | undefined => {
    switch (serviceId) {
      case 1: // Video Production
      case 2: // Color Grading
      case 4: // Script Writing
      case 5: // Storyboarding
        return "horizontal";
      case 3: // Post Production
        return "horizontal";
      default:
        return undefined;
    }
  };


  const getScrollSpeedForService = (serviceId: number): "fast" | "normal" | "slow" => {
    switch (serviceId) {
      case 1: // Video Production
        return "normal";
      case 2: // Color Grading
        return "slow";
      case 3: // Post Production
        return "slow";
      case 4: // Script Writing
        return "normal";
      case 5: // Storyboarding
        return "normal";
      default:
        return "normal";
    }
  };

  const router = useRouter();

  const handleServiceClick = (service: Service) => {
    if (service.id === 6) {
      // Redirect to Contact page
      router.push("/Contact"); 
    } else {
      setSelectedService(service);
    }
  };

  return (
    <section
      id="services"
      className="w-full flex flex-col relative bg-grid-white/[0.05] py-20 min-h-screen"
    >
      {/* Background styling */}
      <div className="absolute pointer-events-none inset-0 top-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div
        className="h-[50vh] absolute w-full top-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(22,26,66,0) 0%, rgba(0,0,0,1) 85%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            From concept to completion, we deliver professional video services that bring your vision to life
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="max-w-10xl mx-auto">
            {servicesData.map((service) => {
              // const IconComponent = service.icon;
              return (
                <BentoGridItem
                  key={service.id}
                  id={service.id}
                  title={
                    <div className="flex items-center space-x-3 z-10 relative">
                      {/* <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover/bento:from-blue-500/30 group-hover/bento:to-purple-500/30 transition-all duration-500">
                        <IconComponent className="w-6 h-6" />
                      </div> */}
                      <span>{service.title}</span>
                    </div>
                  }
                  description={service.description}
                  className={service.className}
                  titleClassName={service.titleClassName}
                  descriptionClassName={service.descriptionClassName}
                  img={service.img}
                  imgClassName={service.imgClassName}
                  spareImg={service.spareImg}
                  movingItems={getMovingItemsForService(service.id)}
                  scrollDirection={getScrollDirectionForService(service.id)}   // ✅ now "horizontal" | "vertical"
                  scrollSpeed={getScrollSpeedForService(service.id)}
                  onClick={() => handleServiceClick(service)}
                />
              );
            })}
          </BentoGrid>
        </motion.div>
      </div>

      {/* Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}