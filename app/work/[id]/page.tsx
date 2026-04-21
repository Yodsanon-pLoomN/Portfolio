"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ id: string }>;
};

export default function WorkDetailPage({ params }: Props) {
  const { id } = use(params);
  const { locale } = useI18n();

  const numericId = Number(id);
  const item = projects.find((work) => work.id === numericId);

  if (!item) {
    return (
      <main className="min-h-screen bg-white pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm tracking-[0.2em] uppercase text-black/60 mb-3">Work</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3">
            {locale === "th" ? "ไม่พบผลงานที่ต้องการ" : "Work not found"}
          </h1>
          <p className="text-[#4b5563] mb-8">
            {locale === "th"
              ? "ลิงก์ที่เปิดอาจไม่ถูกต้อง หรือผลงานนี้ยังไม่ได้เผยแพร่"
              : "The requested link may be invalid, or this work has not been published yet."}
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-md border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            {locale === "th" ? "กลับไปดูผลงานทั้งหมด" : "Back to all projects"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-16 px-6 selection:bg-black selection:text-white">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-black mb-8"
        >
          <span aria-hidden>←</span>
          {locale === "th" ? "กลับไปหน้าผลงาน" : "Back to projects"}
        </Link>

        <section className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#fafafa] p-7 md:p-10 shadow-sm shadow-black/5">
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-black/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-xs tracking-[0.2em] uppercase text-black/60 mb-3">
              {locale === "th" ? "โปรเจกต์" : "Project"} 0{item.id}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#111111] mb-3">{item.title[locale]}</h1>
            <p className="text-lg text-[#374151] mb-6">{item.subtitle[locale]}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs tracking-[0.16em] uppercase text-black/50 mb-1">
                  {locale === "th" ? "บทบาท" : "Role"}
                </p>
                <p className="text-sm text-[#111111]">{item.role[locale]}</p>
              </div>

              <div className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs tracking-[0.16em] uppercase text-black/50 mb-1">
                  {locale === "th" ? "ช่วงเวลา" : "Timeline"}
                </p>
                <p className="text-sm text-[#111111]">{item.timeline}</p>
              </div>

              <div className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs tracking-[0.16em] uppercase text-black/50 mb-1">
                  {locale === "th" ? "สแต็กหลัก" : "Core Stack"}
                </p>
                <p className="text-sm text-[#111111]">{item.stack.slice(0, 2).join(" • ")}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#111111] mb-2">
                {locale === "th" ? "ภาพรวมโปรเจกต์" : "Project Overview"}
              </h2>
              <p className="text-[#4b5563] leading-relaxed">{item.overview[locale]}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#111111] mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-black/15 bg-white px-3 py-1.5 text-xs font-medium text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {item.images && item.images.length > 0 ? (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#111111] mb-3">
                  {locale === "th" ? "รูปตัวอย่าง" : "Gallery"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.images.map((image, index) => (
                    <figure
                      key={image}
                      className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm shadow-black/5"
                    >
                      <div className="relative aspect-[16_10] w-full bg-[#f3f3f3]">
                        <Image
                          src={image}
                          alt={`${item.title[locale]} screenshot ${index + 1}`}
                          fill
                          sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">
                {locale === "th" ? "ไฮไลต์ที่ทำ" : "What I Delivered"}
              </h2>
              <ul className="space-y-2">
                {item.highlights.map((point) => (
                  <li key={point.en} className="flex items-start gap-3 text-[#374151] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" aria-hidden />
                    <span>{point[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}