"use client";

import Image from "next/image";
import Link from 'next/link';
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/data/projects";

export default function Projects() {
  const { locale, t } = useI18n();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-black uppercase tracking-[0.2em] text-sm font-semibold mb-2">{t.projects.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] relative inline-block">
            {t.projects.title}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((item) => (
            <Link 
              href={`/project/${item.id}`} 
              key={item.id}
              className="group relative h-112.5 rounded-2xl overflow-hidden bg-[#fafafa] border border-black/10 transition-all duration-150 hover:scale-105 hover:shadow-xl hover:shadow-black/10 flex flex-col z-10 hover:z-20"
            >
              
              <div className="relative h-1/2 w-full overflow-hidden bg-black/5 z-0 ">
                {item.images?.[0] ? (
                  <Image
                    src={item.images[0]}
                    alt={`${item.title[locale]} preview`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover opacity-90"
                  />
                ) : null}
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/4 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-black/10 transition-colors duration-150"></div>
              </div>

              <div className="relative h-1/2 w-full p-8 flex flex-col justify-end z-20 bg-white">
                <div className="absolute inset-0 bg-linear-to-t from-white/95 via-white/70 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-150 z-0"></div>

                <div className="relative z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-150">
                  <span className="text-black font-mono text-sm mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-150">{t.projects.itemPrefix} 0{item.id}</span>
                  <h3 className="text-2xl font-bold text-[#111111] mb-2">{item.title[locale]}</h3>
                  <p className="text-[#4b5563] group-hover:text-[#1f2937] transition-colors duration-150">{item.desc[locale]}</p>
                  
                  <div className="mt-6 flex items-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <span className="text-sm font-medium">{t.projects.viewProject}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}