"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/data/projects"; // ปรับ path ให้ตรงกับที่เก็บไฟล์จริงของคุณ

type Props = {
  params: Promise<{ id: string }>;
};

export default function ProjectDetailPage({ params }: Props) {
  const { id } = use(params);
  const { locale, t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const numericId = Number(id);
  const item = projects.find((project) => project.id === numericId);

  if (!item) {
    return (
      <main className="min-h-screen bg-white pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm tracking-[0.2em] uppercase text-black/60 mb-3">Project</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3">
            {locale === "th" ? "ไม่พบโปรเจกต์ที่ต้องการ" : "Project not found"}
          </h1>
          <p className="text-[#4b5563] mb-8">
            {locale === "th"
              ? "ลิงก์ที่เปิดอาจไม่ถูกต้อง หรือผลงานนี้ยังไม่ได้เผยแพร่"
              : "The requested link may be invalid, or this project has not been published yet."}
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-md border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            {locale === "th" ? "กลับ" : "Back"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#fafafa] pt-28 pb-16 px-6 selection:bg-black selection:text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-black mb-8 transition-colors"
        >
          <span aria-hidden>←</span>
          {locale === "th" ? "กลับ" : "Back"}
        </Link>

        {/* Main Content Card */}
        <section className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 md:p-10 shadow-sm shadow-black/5">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-black/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            
            {/* Header Section (Title & Timeline) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 pb-8 mb-8">
              <div className="flex-1">
                <p className="text-xs tracking-[0.2em] uppercase text-black/60 mb-3">
                  {locale === "th" ? "โปรเจกต์" : "Project"} 0{item.id}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-[#111111] mb-3">{item.title[locale]}</h1>
                <p className="text-lg text-[#374151] mb-6">{item.desc[locale]}</p>
                
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-2.5 text-sm font-medium text-white hover:bg-black/80 transition-all duration-300 shadow-md shadow-black/10"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    {t.projects.viewGithub}
                  </a>
                )}
              </div>
              
              <div className="md:text-right shrink-0 self-start md:self-end">
                <p className="text-xs tracking-[0.16em] uppercase text-black/50 mb-2">
                  {locale === "th" ? "ช่วงเวลา" : "Timeline"}
                </p>
                <p className="text-sm font-medium text-[#111111] bg-black/5 inline-flex px-3 py-1.5 rounded-md">
                  {item.timeline}
                </p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-[#111111] mb-3">
                {locale === "th" ? "ภาพรวมโปรเจกต์" : "Project Overview"}
              </h2>
              <p className="text-[#4b5563] leading-relaxed text-base whitespace-pre-line">{item.overview[locale]}</p>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-[#111111] mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-medium text-[#111111] hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery Section (Images) */}
            {item.images && item.images.length > 0 && (
              <div className="mt-12 pt-8 border-t border-black/5">
                <h2 className="text-xl font-semibold text-[#111111] mb-6">
                  {locale === "th" ? "ภาพประกอบ" : "Gallery"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="rounded-xl overflow-hidden border border-black/10 bg-white group cursor-zoom-in"
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image 
                        src={img} 
                        alt={`${item.title[locale]} preview ${idx + 1}`} 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        width={500}
                        height={300}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </section>
      </div>
    </main>

    {/* Lightbox Modal */}
    {selectedImage && (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 transition-all duration-300"
        onClick={() => setSelectedImage(null)}
      >
        <button 
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
          onClick={() => setSelectedImage(null)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
          <Image
            src={selectedImage}
            alt="Full size preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            width={1200}
            height={800}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}
  </>
);
}