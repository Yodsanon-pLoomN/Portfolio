"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/data/projects"; // ปรับ path ให้ตรงกับที่เก็บไฟล์จริงของคุณ

type Props = {
  params: Promise<{ id: string }>;
};

export default function ProjectDetailPage({ params }: Props) {
  const { id } = use(params);
  const { locale } = useI18n();

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
            {locale === "th" ? "กลับไปดูโปรเจกต์ทั้งหมด" : "Back to all projects"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-16 px-6 selection:bg-black selection:text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-black mb-8 transition-colors"
        >
          <span aria-hidden>←</span>
          {locale === "th" ? "กลับไปหน้าโปรเจกต์" : "Back to projects"}
        </Link>

        {/* Main Content Card */}
        <section className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#fafafa] p-7 md:p-10 shadow-sm shadow-black/5">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-black/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            
            {/* Header Section (Title & Timeline) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 pb-8 mb-8">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-black/60 mb-3">
                  {locale === "th" ? "โปรเจกต์" : "Project"} 0{item.id}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-[#111111] mb-3">{item.title[locale]}</h1>
                <p className="text-lg text-[#374151]">{item.subtitle[locale]}</p>
              </div>
              
              <div className="md:text-right shrink-0">
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
              <p className="text-[#4b5563] leading-relaxed text-base">{item.overview[locale]}</p>
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
                    <div key={idx} className="rounded-xl overflow-hidden border border-black/10 bg-white group">
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
  );
}