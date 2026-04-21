"use client";

import Link from "next/link";
import { use } from "react";
import { useI18n } from "@/contexts/I18nContext";

type WorkItem = {
  id: number;
  title: { th: string; en: string };
  subtitle: { th: string; en: string };
  overview: { th: string; en: string };
  role: { th: string; en: string };
  timeline: string;
  stack: string[];
  highlights: { th: string; en: string }[];
};

const works: WorkItem[] = [
  {
    id: 1,
    title: { th: "E-Commerce Platform", en: "E-Commerce Platform" },
    subtitle: {
      th: "แพลตฟอร์มขายสินค้าออนไลน์ครบวงจร",
      en: "A complete online shopping platform",
    },
    overview: {
      th: "พัฒนาแพลตฟอร์มซื้อขายสินค้าแบบ Full-stack ตั้งแต่หน้าแสดงสินค้า ตะกร้า ไปจนถึงระบบชำระเงิน พร้อมแดชบอร์ดจัดการออเดอร์",
      en: "Built a full-stack shopping experience from product discovery and cart to checkout, with an operations dashboard for order management.",
    },
    role: {
      th: "ออกแบบระบบและพัฒนาทั้งฝั่ง Frontend/Backend",
      en: "Designed system architecture and implemented both frontend and backend",
    },
    timeline: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      {
        th: "ลดเวลาโหลดหน้าแรกด้วยการจัดการภาพและแยกโหลดข้อมูล",
        en: "Improved initial load performance with image and data loading optimizations",
      },
      {
        th: "รองรับการใช้งานบนมือถือและแท็บเล็ตอย่างสมบูรณ์",
        en: "Delivered a fully responsive experience across mobile and tablet",
      },
      {
        th: "วางโครงสร้างโค้ดให้ขยายระบบโปรโมชั่นในอนาคตได้ง่าย",
        en: "Structured codebase for easier future expansion, including promotions",
      },
    ],
  },
  {
    id: 2,
    title: { th: "Finance Dashboard", en: "Finance Dashboard" },
    subtitle: {
      th: "แดชบอร์ดวิเคราะห์ตัวเลขธุรกิจแบบเรียลไทม์",
      en: "Real-time business analytics dashboard",
    },
    overview: {
      th: "สร้างแดชบอร์ดสำหรับติดตามรายรับรายจ่ายและ KPI หลักของธุรกิจ พร้อมกราฟเชิงโต้ตอบและตัวกรองตามช่วงเวลา",
      en: "Created an analytics dashboard for revenue, expenses, and business KPIs with interactive charts and time-based filters.",
    },
    role: {
      th: "พัฒนาหน้าจอข้อมูลเชิงลึกและระบบดึงข้อมูล",
      en: "Built insights UI and data aggregation workflows",
    },
    timeline: "2025",
    stack: ["Next.js", "TypeScript", "Chart.js", "REST API"],
    highlights: [
      {
        th: "ทำให้ผู้ใช้เข้าถึงข้อมูลหลักได้ภายในไม่กี่คลิก",
        en: "Enabled users to reach key metrics in just a few clicks",
      },
      {
        th: "ปรับโครงสร้างข้อมูลเพื่อให้กราฟโหลดได้เร็วขึ้น",
        en: "Refactored data flow for faster chart rendering",
      },
      {
        th: "เพิ่มมุมมองรายวัน รายสัปดาห์ และรายเดือนในชุดเดียว",
        en: "Introduced daily, weekly, and monthly views in a unified experience",
      },
    ],
  },
  {
    id: 3,
    title: { th: "Portfolio Concept", en: "Portfolio Concept" },
    subtitle: {
      th: "คอนเซปต์เว็บไซต์พอร์ตโฟลิโอเชิงโต้ตอบ",
      en: "An interactive portfolio web concept",
    },
    overview: {
      th: "ออกแบบและพัฒนาเว็บไซต์พอร์ตโฟลิโอที่เน้นการเล่าเรื่อง ความลื่นไหลของแอนิเมชัน และประสบการณ์ผู้ใช้ที่ชัดเจน",
      en: "Designed and developed a portfolio focused on storytelling, fluid motion, and clear user journeys.",
    },
    role: {
      th: "กำหนดทิศทาง Visual และลงมือพัฒนาเองทั้งหมด",
      en: "Led visual direction and implemented the full experience",
    },
    timeline: "2026",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
    highlights: [
      {
        th: "สร้างระบบคอมโพเนนต์ที่ปรับใช้กับหลายหน้าได้",
        en: "Built a reusable component system for multiple page patterns",
      },
      {
        th: "ปรับจังหวะแอนิเมชันให้รู้สึกนุ่มนวลและอ่านง่าย",
        en: "Fine-tuned motion timing for smoother readability",
      },
      {
        th: "รองรับทั้งภาษาไทยและอังกฤษในโครงเดียวกัน",
        en: "Supported both Thai and English in one structure",
      },
    ],
  },
  {
    id: 4,
    title: { th: "Task Management App", en: "Task Management App" },
    subtitle: {
      th: "แอปจัดการงานพร้อมระบบลากและวาง",
      en: "Task planner with drag-and-drop workflow",
    },
    overview: {
      th: "พัฒนาแอปบริหารงานแบบ Kanban ที่ช่วยทีมติดตามความคืบหน้า กำหนดลำดับความสำคัญ และลดงานที่ตกหล่น",
      en: "Developed a Kanban-style task app to help teams track progress, prioritize work, and reduce task loss.",
    },
    role: {
      th: "พัฒนาโครงสร้างสถานะและประสบการณ์การใช้งาน",
      en: "Implemented state architecture and interaction UX",
    },
    timeline: "2024",
    stack: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
    highlights: [
      {
        th: "ลดขั้นตอนการจัดลำดับงานด้วย drag-and-drop",
        en: "Simplified prioritization with drag-and-drop interactions",
      },
      {
        th: "ออกแบบให้ใช้งานได้ดีทั้งเมาส์และทัชสกรีน",
        en: "Designed for both mouse and touch interactions",
      },
      {
        th: "จัดการสถานะข้อมูลแบบแยก concern เพื่อดูแลง่าย",
        en: "Separated state concerns for maintainability",
      },
    ],
  },
  {
    id: 5,
    title: { th: "Social Media Clone", en: "Social Media Clone" },
    subtitle: {
      th: "ระบบโพสต์และโต้ตอบแบบโซเชียลมีเดีย",
      en: "A social feed with posting and interactions",
    },
    overview: {
      th: "จำลองฟีเจอร์หลักของแพลตฟอร์มโซเชียล เช่น ฟีดโพสต์ โปรไฟล์ผู้ใช้ การกดถูกใจ และระบบคอมเมนต์",
      en: "Recreated core social features such as feed, profiles, likes, and comments.",
    },
    role: {
      th: "พัฒนาฟังก์ชันหลักของผลิตภัณฑ์และโฟลว์ผู้ใช้",
      en: "Implemented core product features and user flows",
    },
    timeline: "2024",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    highlights: [
      {
        th: "ออกแบบโฟลว์การใช้งานให้ใกล้เคียงแพลตฟอร์มจริง",
        en: "Designed interaction flows close to real social products",
      },
      {
        th: "วาง schema ฐานข้อมูลให้รองรับความสัมพันธ์ของผู้ใช้",
        en: "Created database schema for rich user relationships",
      },
      {
        th: "เพิ่มการป้องกันฟอร์มและตรวจสอบข้อมูลก่อนส่ง",
        en: "Added form guards and input validation before submission",
      },
    ],
  },
  {
    id: 6,
    title: { th: "AI Image Generator", en: "AI Image Generator" },
    subtitle: {
      th: "เว็บสร้างภาพจากข้อความด้วย AI",
      en: "Text-to-image web experience powered by AI",
    },
    overview: {
      th: "สร้างระบบรับ prompt จากผู้ใช้แล้วแสดงผลภาพที่สร้างโดยโมเดล AI พร้อมหน้าจัดการประวัติการสร้าง",
      en: "Built a prompt-driven image generation flow with AI output previews and generation history.",
    },
    role: {
      th: "เชื่อม API และออกแบบประสบการณ์ผู้ใช้ตั้งแต่ต้นจนจบ",
      en: "Integrated API services and designed end-to-end UX",
    },
    timeline: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI API"],
    highlights: [
      {
        th: "ลดเวลารอด้วยสถานะแจ้งความคืบหน้าระหว่างสร้างภาพ",
        en: "Reduced perceived waiting time with generation progress states",
      },
      {
        th: "ปรับโครงสร้างคำสั่งเพื่อเพิ่มคุณภาพผลลัพธ์",
        en: "Improved output quality through prompt structuring",
      },
      {
        th: "แยกส่วน UI/logic เพื่อให้ต่อยอดฟีเจอร์ได้ง่าย",
        en: "Separated UI and logic for easier feature iteration",
      },
    ],
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

export default function WorkDetailPage({ params }: Props) {
  const { id } = use(params);
  const { locale } = useI18n();

  const numericId = Number(id);
  const item = works.find((work) => work.id === numericId);

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