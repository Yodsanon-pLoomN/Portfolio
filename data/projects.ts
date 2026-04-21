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
  timeline: string;
  stack: string[];
  images?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: { th: "เว็บบล็อกและระบบค้นหา", en: "Blog & Search Platform" },
    desc: { th: "แพลตฟอร์มบล็อกและจัดการข้อมูล", en: "Blog and data management platform." },
    subtitle: {
      th: "เว็บบล็อกพร้อมระบบฐานข้อมูลแบบ Real-time",
      en: "Blog website with a real-time database system",
    },
    overview: {
      th: "ออกแบบและสร้างเว็บบล็อกและระบบฐานข้อมูล พร้อมฟีเจอร์การค้นหาและแสดงผลบทความหรือข้อมูลแบบ Real-time",
      en: "Designed and built a blog website and database system, featuring real-time data and article search and display capabilities.",
    },
    timeline: "Year 2 Sem 1",
    stack: ["Next.js", "Node.js", "PrismaORM"],
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
    title: { th: "วิเคราะห์ข้อมูล PM2.5", en: "PM2.5 Data Analysis" },
    desc: { th: "การจัดการข้อมูลด้วย Data Science", en: "Data management using Data Science" },
    subtitle: {
      th: "การทำความสะอาดและแสดงผลข้อมูลฝุ่น",
      en: "Dust data cleaning and visualization",
    },
    overview: {
      th: "วิเคราะห์ ทำความสะอาด (Data Cleaning) และแสดงผล (Visualization) ข้อมูลค่าฝุ่นละออง PM2.5 ด้วยเครื่องมือทาง Data Science",
      en: "Analyzed, cleaned, and visualized PM2.5 dust data using Data Science tools.",
    },
    timeline: "Year 2 Sem 1",
    stack: ["Python", "Pandas", "Matplotlib", "Data Science"],
  },
  {
    id: 3,
    title: { th: "เกม 2D ด้วย Godot", en: "2D Game with Godot" },
    desc: { th: "การพัฒนาเกมและกลไกเกม", en: "Game development and mechanics" },
    subtitle: {
      th: "เกมตัวอย่างจาก Godot Engine",
      en: "Prototype game from Godot Engine",
    },
    overview: {
      th: "ออกแบบและเขียนเกมตัวอย่างเพื่อศึกษา Game Mechanics และการทำงานของระบบเกม",
      en: "Designed and programmed a prototype game to study core game mechanics and engine workflows.",
    },
    timeline: "Year 2 Sem 1",
    stack: ["Godot Engine", "GDScript"],
  },
  {
    id: 4,
    title: { th: "ระบบมอนิเตอร์ Network", en: "Network Dashboard" },
    desc: { th: "Dashboard แจ้งเตือนสถานะเครือข่าย", en: "Network status dashboard" },
    subtitle: {
      th: "ระบบมอนิเตอร์อุปกรณ์ Network แบบ Real-time",
      en: "Real-time network device monitoring system",
    },
    overview: {
      th: "สร้าง Dashboard สำหรับมอนิเตอร์การทำงานและสถานะของอุปกรณ์ Network แบบ Real-time ผ่านโปรโตคอล SNMP",
      en: "Created a real-time dashboard to monitor the status and performance of network devices using the SNMP protocol.",
    },
    timeline: "Year 2 Sem 2",
    stack: ["Python", "SNMP", "Networking"],
  },
  {
    id: 5,
    title: { th: "ระบบลงเวลาทำงาน", en: "Time Attendance System" },
    desc: { th: "ลงเวลาด้วยใบหน้าและตำแหน่ง", en: "Attendance via face & location" },
    subtitle: {
      th: "ระบบตรวจสอบใบหน้าและสถานที่",
      en: "Face verification and location checking system",
    },
    overview: {
      th: "สร้างระบบลงเวลาทำงานที่สามารถตรวจสอบและยืนยันตัวตนผ่านใบหน้า พร้อมเช็คสถานที่ (Location) ปัจจุบันของผู้ใช้งาน",
      en: "Built a time attendance system capable of facial recognition for identity verification and checking the user's current physical location.",
    },
    timeline: "Year 3 Sem 1",
    stack: ["Face Recognition", "Geolocation", "Web Development"],
  },
  {
    id: 6,
    title: { th: "MailMind", en: "MailMind" },
    desc: { th: "ผู้ช่วยตอบอีเมลอัจฉริยะ", en: "Smart AI Email Assistant" },
    subtitle: {
      th: "ระบบจัดการอีเมลและปฏิทินด้วย AI",
      en: "AI-powered email and calendar management",
    },
    overview: {
      th: "พัฒนาระบบผู้ช่วยอัจฉริยะที่สามารถอ่านอีเมล สร้างร่างตอบกลับอัตโนมัติด้วย AI พร้อมบันทึกนัดหมายลง Google Calendar ได้ทันที",
      en: "Developed an intelligent assistant capable of reading emails, drafting AI-generated replies, and automatically saving appointments to Google Calendar.",
    },
    timeline: "Year 3 Sem 1",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Gmail API", "Calendar API", "AI"],
  },
  {
    id: 7,
    title: { th: "ระบบจัดการร้านกาแฟ (POS)", en: "Cafe POS System" },
    desc: { th: "ระบบขายหน้าร้านและหลังบ้าน", en: "Point of Sale and back-office" },
    subtitle: {
      th: "ระบบ POS จัดการเมนูและสต็อก",
      en: "POS system for menu and inventory management",
    },
    overview: {
      th: "พัฒนาระบบ POS และระบบจัดการร้านกาแฟ ครอบคลุมการจัดการเมนูและติดตามสต็อกสินค้าแบบ Real-time",
      en: "Developed a POS and cafe management system covering menu customization and real-time inventory tracking.",
    },
    timeline: "Year 3 Sem 1",
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Full-Stack"],
  }
];