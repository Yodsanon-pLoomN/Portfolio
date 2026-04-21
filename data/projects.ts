export type LocalizedText = {
  th: string;
  en: string;
};

export type Project = {
  id: number;
  title: LocalizedText;
  desc: LocalizedText;
  subtitle: LocalizedText;
  overview: LocalizedText;
  role: LocalizedText;
  timeline: string;
  stack: string[];
  highlights: LocalizedText[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: { th: "แพลตฟอร์มอีคอมเมิร์ซ", en: "E-Commerce Platform" },
    desc: { th: "ประสบการณ์ชอปปิงแบบ Full-stack", en: "A full-stack shopping experience." },
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
    title: { th: "แดชบอร์ดการเงิน", en: "Finance Dashboard" },
    desc: { th: "วิเคราะห์และติดตามข้อมูลแบบเรียลไทม์", en: "Real-time analytics and tracking." },
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
    title: { th: "คอนเซปต์พอร์ตโฟลิโอ", en: "Portfolio Concept" },
    desc: { th: "งานออกแบบเว็บโมเดิร์นแบบอินเทอร์แอคทีฟ", en: "Interactive modern web design." },
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
    title: { th: "แอปจัดการงาน", en: "Task Management App" },
    desc: { th: "เครื่องมือเพิ่มประสิทธิภาพพร้อมระบบลากและวาง", en: "Productivity tool with drag and drop." },
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
    title: { th: "โซเชียลมีเดียโคลน", en: "Social Media Clone" },
    desc: { th: "เชื่อมต่อผู้คนทั่วโลก", en: "Connecting people worldwide." },
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
    title: { th: "เครื่องมือสร้างภาพด้วย AI", en: "AI Image Generator" },
    desc: { th: "ยกระดับการสร้างสรรค์ด้วยพลังของ AI", en: "Harnessing the power of AI." },
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
