import { time } from "console";

export type LocalizedText = {
  th: string;
  en: string;
};

export type Project = {
  id: number;
  title: LocalizedText;
  desc: LocalizedText;
  overview: LocalizedText;
  timeline: string;
  stack: string[];
  images?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: { th: "MailMind ผู้ช่วย AI อัจฉริยะ ", en: "Blog & Search Platform" },
    desc: { th: "แพลตฟอร์มบล็อกและจัดการข้อมูล", en: "Blog and data management platform." },
    overview: {
      th: "ออกแบบและสร้างเว็บบล็อกและระบบฐานข้อมูล พร้อมฟีเจอร์การค้นหาและแสดงผลบทความหรือข้อมูลแบบ Real-time",
      en: "Designed and built a blog website and database system, featuring real-time data and article search and display capabilities.",
    },
    timeline: "Year 2 Sem 1",
    stack: ["Next.js", "PostgreSQL", "PrismaORM","Uploadthing","TailwindCSS"],
    images: [
      "/assets/project1/1.png",
      "/assets/project1/2.png",
      "/assets/project1/3.png",
      "/assets/project1/4.png",
      "/assets/project1/5.png",
      "/assets/project1/6.png",
    ],
  },
  {
    id: 2,
    title: { th: "Ezy Dine App แอพจองโต๊ะ", en: "Ezy Dine App" },
    desc: { th: "แอพพลิเคชั่นสำหรับการจองโต๊ะอาหาร", en: "App for booking restaurant tables" },

    overview: {
      th: ` ระบบสำหรับผู้ใช้งานทั่วไป (Customer)
            ระบบสมัครสมาชิกและเข้าสู่ระบบ (Authentication)
            ระบบแสดงรายชื่อร้านอาหาร รวมถึงข้อมูลเบื้องต้นของร้าน (ระบบแสดงสถานะการเปิดรับคิวของร้านอาหารแบบ Real-time)
            ระบบจองคิว/จองโต๊ะล่วงหน้า โดยระบุจำนวนผู้ทาน (Party Size)
            ระบบแสดงสถานะคิวของตนเอง (Queue Status) พร้อมสร้าง QR Code สำหรับยืนยันตัวตนที่หน้าร้าน
            ระบบแสดงเมนูอาหาร และตะกร้าสินค้า (Cart) สำหรับสั่งอาหารล่วงหน้า
            ระบบสำหรับพนักงาน/ผู้จัดการร้าน (Staff / Admin)
            ระบบเข้าสู่ระบบสำหรับพนักงานตามสิทธิ์การใช้งาน
            หน้ากระดานแสดงผล (Dashboard) สำหรับจัดการและติดตามสถานะคิวทั้งหมดของร้าน
            ระบบสแกน QR Code (Scanner) เพื่อยืนยันคิวลูกค้าที่เดินทางมาถึงร้าน
            ระบบจัดการข้อมูลร้านอาหาร (Restaurant Management)
            ระบบจัดการโต๊ะอาหาร (Table Management)
            ระบบจัดการเมนูอาหาร (Menu Management)`,
      en: "Analyzed, cleaned, and visualized PM2.5 dust data using Data Science tools.",
    },
    
    timeline: "Year 3 Sem 1",
    stack: ["Ionic", "Vue.js", "Vite", "Firebase", "Data Science"],
        images: [
      "/assets/project2/1.png",
      "/assets/project2/2.jpg",
      "/assets/project2/3.jpg",
      "/assets/project2/4.jpg",
      "/assets/project2/5.jpg",
      "/assets/project2/6.jpg",
      "/assets/project2/7.jpg",
      "/assets/project2/8.jpg",
      "/assets/project2/9.jpg",
      "/assets/project2/10.jpg",
      "/assets/project2/11.jpg",
      "/assets/project2/12.jpg",
    ],
  },
  {
    id: 3,
    title: { th: "KKU BLOG ", en: "Blog & Search Platform" },
    desc: { th: "แพลตฟอร์มบล็อกและจัดการข้อมูล", en: "Blog and data management platform." },
    overview: {
      th: "ออกแบบและสร้างเว็บบล็อกและระบบฐานข้อมูล พร้อมฟีเจอร์การค้นหาและแสดงผลบทความหรือข้อมูลแบบ Real-time",
      en: "Designed and built a blog website and database system, featuring real-time data and article search and display capabilities.",
    },
    timeline: "Year 2 Sem 1",
    stack: ["Next.js", "PostgreSQL", "PrismaORM","Uploadthing","TailwindCSS"],
    images: [
      "/assets/project1/1.png",
      "/assets/project1/2.png",
      "/assets/project1/3.png",
      "/assets/project1/4.png",
      "/assets/project1/5.png",
      "/assets/project1/6.png",
    ],
  },
  {
    id: 4,
    title: { th: "เกม 2D ด้วย Godot", en: "2D Game with Godot" },
    desc: { th: "การพัฒนาเกมและกลไกเกม", en: "Game development and mechanics" },
    overview: {
      th: "ออกแบบและเขียนเกมตัวอย่างเพื่อศึกษา Game Mechanics และการทำงานของระบบเกม",
      en: "Designed and programmed a prototype game to study core game mechanics and engine workflows.",
    },
    timeline: "Year 2 Sem 1",
    stack: ["Godot Engine", "GDScript"],
  },
  {
    id: 5,
    title: { th: "ระบบมอนิเตอร์ Network", en: "Network Dashboard" },
    desc: { th: "Dashboard แจ้งเตือนสถานะเครือข่าย", en: "Network status dashboard" },
    overview: {
      th: "สร้าง Dashboard สำหรับมอนิเตอร์การทำงานและสถานะของอุปกรณ์ Network แบบ Real-time ผ่านโปรโตคอล SNMP",
      en: "Created a real-time dashboard to monitor the status and performance of network devices using the SNMP protocol.",
    },
    timeline: "Year 2 Sem 2",
    stack: ["Python", "SNMP", "Networking"],
  },
  {
    id: 6,
    title: { th: "ระบบลงเวลาทำงาน", en: "Time Attendance System" },
    desc: { th: "ลงเวลาด้วยใบหน้าและตำแหน่ง", en: "Attendance via face & location" },
    overview: {
      th: "สร้างระบบลงเวลาทำงานที่สามารถตรวจสอบและยืนยันตัวตนผ่านใบหน้า พร้อมเช็คสถานที่ (Location) ปัจจุบันของผู้ใช้งาน",
      en: "Built a time attendance system capable of facial recognition for identity verification and checking the user's current physical location.",
    },
    timeline: "Year 3 Sem 1",
    stack: ["Face Recognition", "Geolocation", "Web Development"],
  },
  {
    id: 7,
    title: { th: "MailMind", en: "MailMind" },
    desc: { th: "ผู้ช่วยตอบอีเมลอัจฉริยะ", en: "Smart AI Email Assistant" },
    overview: {
      th: "พัฒนาระบบผู้ช่วยอัจฉริยะที่สามารถอ่านอีเมล สร้างร่างตอบกลับอัตโนมัติด้วย AI พร้อมบันทึกนัดหมายลง Google Calendar ได้ทันที",
      en: "Developed an intelligent assistant capable of reading emails, drafting AI-generated replies, and automatically saving appointments to Google Calendar.",
    },
    timeline: "Year 3 Sem 1",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Gmail API", "Calendar API", "AI"],
  },
  {
    id: 8,
    title: { th: "ระบบจัดการร้านกาแฟ (POS)", en: "Cafe POS System" },
    desc: { th: "ระบบขายหน้าร้านและหลังบ้าน", en: "Point of Sale and back-office" },
    overview: {
      th: "พัฒนาระบบ POS และระบบจัดการร้านกาแฟ ครอบคลุมการจัดการเมนูและติดตามสต็อกสินค้าแบบ Real-time",
      en: "Developed a POS and cafe management system covering menu customization and real-time inventory tracking.",
    },
    timeline: "Year 3 Sem 1",
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Full-Stack"],
  }
];