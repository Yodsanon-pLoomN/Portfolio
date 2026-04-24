"use client";

import Image from "next/image";
import { useI18n } from "@/contexts/I18nContext";
import { techStack } from "@/data/tools";


export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-black uppercase tracking-[0.2em] text-sm font-semibold mb-2">{t.skills.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] relative inline-block">
            {t.skills.title}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {techStack.map((tech) => (
            <div 
              key={tech.name} 
              className="group relative bg-white border border-black/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-150 hover:bg-[#fafafa] hover:border-black/20 hover:shadow-md hover:shadow-black/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
              
              <div className="relative w-16 h-16 transition-transform duration-150 group-hover:scale-105 z-10">
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  fill 
                  className="object-contain" 
                />
              </div>
              <h3 className="text-[#4b5563] font-medium text-lg group-hover:text-[#111111] transition-colors duration-150 z-10">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
