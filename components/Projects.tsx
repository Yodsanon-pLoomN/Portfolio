"use client";

import Image from "next/image";
import Link from 'next/link';
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/data/projects";

export default function Projects() {
  const { locale, t } = useI18n();

  return (
    <section id="projects" className="py-12 bg-white">
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

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/Yodsanon-pLoomN"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#111111] px-8 py-4 text-sm font-semibold text-white hover:bg-black transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>{t.projects.viewMoreOnGithub}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}