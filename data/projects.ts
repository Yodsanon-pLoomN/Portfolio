

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
  github?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: { th: "MailMind ผู้ช่วย AI อัจฉริยะ", en: "MailMind AI Assistant" },
    desc: { th: "แพลตฟอร์มผู้ช่วยจัดการอีเมลอัจฉริยะ", en: "Smart AI email management platform." },
    overview: {
      th: `ภาพรวมโปรเจค
โปรเจกต์นี้คือการพัฒนา "MailMind" ผู้ช่วยจัดการอีเมลอัจฉริยะขึ้นมาแบบ Full-stack ซึ่งเกิดจากความต้องการจัดการอีเมลและตารางเวลาส่วนตัวอย่างมีประสิทธิภาพ

ฟีเจอร์หลัก
• ระบบ Frontend พัฒนาด้วย Next.js และ Tailwind CSS เน้น UI/UX ที่สะอาดตา เช่น การจัดวางปุ่ม Export ข้อมูลไว้ที่มุมขวาบนของตารางในหน้า Admin เพื่อให้ผู้ใช้เข้าถึงได้รวดเร็วที่สุด
• ระบบ Backend และโครงสร้าง Database จัดการด้วย Prisma ORM และ PostgreSQL ทำให้การ Query ข้อมูลมีความแม่นยำและปลอดภัย
• มีระบบจัดการไฟล์และรูปภาพแบบ Cloud ด้วย Uploadthing
• ผสานการทำงานของ Generative AI เพื่อช่วยวิเคราะห์เนื้อหาของอีเมล สรุปใจความสำคัญ สร้างร่างคำตอบ (Draft) อัตโนมัติ พร้อมทั้งตรวจจับเวลานัดหมายเพื่อลงปฏิทิน

สิ่งที่ได้เรียนรู้จากโปรเจคนี้
โปรเจกต์นี้ช่วยให้เข้าใจการเชื่อมต่อ AI API (LLMs), การจัดการฐานข้อมูลเชิงสัมพันธ์ (Relational Database) และการออกแบบระบบที่เน้นประสบการณ์ผู้ใช้ (User-centric Design) ได้อย่างลึกซึ้ง`,
      en: `I developed "MailMind," an AI-powered email assistant, to solve the problem of inefficient email and schedule management. This is a complete full-stack application.

Key Features & Learnings:
• Built a responsive frontend using Next.js and Tailwind CSS. I focused heavily on UI/UX, such as strategically placing the data export button at the top-right of the admin table for optimal user convenience.
• Architected the backend and database using Prisma ORM and PostgreSQL, ensuring secure and efficient data querying.
• Implemented robust file and image handling using Uploadthing.
• Integrated Generative AI to analyze email content, summarize key points, and automatically generate draft replies and calendar events.

This project significantly deepened my understanding of AI API integration, relational database design, and user-centric software engineering.`
    },
    timeline: "Year 3 Sem 2",
    stack: ["Next.js", "PostgreSQL", "PrismaORM", "Uploadthing", "TailwindCSS", "Express.js"],
    images: [
      "/assets/project1/1.png",
      "/assets/project1/2.png",
      "/assets/project1/3.png",
      "/assets/project1/4.png",
      "/assets/project1/5.png",
      "/assets/project1/6.png",
      "/assets/project1/7.png",
      "/assets/project1/8.png",
      "/assets/project1/9.png",
      "/assets/project1/10.png",
      "/assets/project1/11.png",
    ],
    github: "https://github.com/Yodsanon-pLoomN/MailMind",
  },
  {
    id: 2,
    title: { th: "Ezy Dine App แอพจองโต๊ะ", en: "Ezy Dine App" },
    desc: { th: "แอพพลิเคชั่นสำหรับการจองโต๊ะอาหาร", en: "Web application for restaurant queuing and pre-ordering." },
    overview: {
      th: `ภาพรวมโปรเจค
โปรเจกต์นี้คือเว็บแอปพลิเคชัน "จองโต๊ะง่ายๆ (Ezy Dine App)" ที่สร้างขึ้นเพื่ออำนวยความสะดวกในการจองโต๊ะร้านอาหาร และช่วยลดปัญหาการรอคิวของลูกค้า

ฟีเจอร์หลัก
• ลูกค้าสามารถค้นหาร้าน จองคิว ดูสถานะคิวได้แบบเรียลไทม์พร้อมรับ QR Code ยืนยันตัวตน
• ลูกค้าสามารถสั่งอาหารล่วงหน้าลงตะกร้าได้ตั้งแต่ตอนรอคิว
• พนักงานมีระบบ Dashboard เพื่อจัดการคิวและโต๊ะ พร้อมฟังก์ชันสแกน QR Code หน้าร้านเพื่อยืนยันออเดอร์ของลูกค้า

สิ่งที่ได้เรียนรู้จากโปรเจคนี้
ได้เรียนรู้การพัฒนาแอปพลิเคชันแบบ Cross-platform ด้วย Ionic Framework และ Vue.js รวมถึงการประยุกต์ใช้สถาปัตยกรรมแบบ Backend-as-a-Service (BaaS) โดยใช้ Firebase Authentication และ Cloud Firestore`,
      en: `This project is the "Ezy Dine App", a web application designed to streamline restaurant table reservations and reduce waiting times.

Key Features & Learnings:
• Customers can search for restaurants, book queues, view real-time queue status with a generated QR code, and pre-order food via a cart system.
• Staff utilize a Dashboard to manage queues and tables, and can scan customer QR codes to confirm arrivals.
• I learned cross-platform mobile UI development using Ionic Framework and Vue.js, as well as implementing a Backend-as-a-Service (BaaS) architecture using Firebase (Cloud Firestore & Authentication).`
    },
    timeline: "Year 3 Sem 2",
    stack: ["Vue.js", "Ionic Framework", "TypeScript", "Firebase", "Node.js"],
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
    github: "https://github.com/betaRobinhood/moblie_web_Group2",
  },
  {
    id: 3,
    title: { th: "KKU BLOG เว็บบล็อก", en: "KKU Blog Platform" },
    desc: { th: "แพลตฟอร์มบล็อกและจัดการข้อมูล", en: "News blog platform for university news and articles." },
    overview: {
      th: `ภาพรวมโปรเจค
โปรเจกต์นี้คือ "KKU Blog" ซึ่งเป็นระบบเว็บบล็อกสำหรับนำเสนอข่าวสารและข้อมูลที่เชื่อถือได้ สำหรับบุคลากรและนักศึกษา

ฟีเจอร์หลัก
• ระบบรองรับผู้ใช้งานหลายระดับ ผู้ใช้ทั่วไปสามารถอ่านข่าวได้ ในขณะที่สมาชิกสามารถตั้งโพสต์ กดถูกใจ และคอมเมนต์ได้
• โพสต์ของผู้ใช้ทุกคนจะต้องผ่านการคัดกรองและอนุมัติจากผู้ดูแลระบบ (Admin) ก่อนเผยแพร่ เพื่อรักษาความถูกต้องของข้อมูล

สิ่งที่ได้เรียนรู้จากโปรเจคนี้
ได้เรียนรู้การออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ (Database Schema), การทำงานกับ PostgreSQL แบบ Cloud (Supabase) ผ่าน Prisma ORM และการจำลอง-ทดสอบ API ด้วย Postman`,
      en: `This project is "KKU Blog", a reliable news and blogging platform built for university students and staff.

Key Features & Learnings:
• Supports role-based access where guests can read articles, while registered members can create posts, like, and leave comments.
• User-submitted posts require admin approval prior to publication to maintain information accuracy and reliability.
• I learned relational database schema design, how to connect Next.js to Cloud PostgreSQL (Supabase) via Prisma ORM, and how to test APIs effectively using Postman.`
    },
    timeline: "Year 2 Sem 2",
    stack: ["Next.js", "JavaScript", "Prisma ORM", "PostgreSQL", "Supabase", "Postman"],
    images: [
      "/assets/project3/1.png",
      "/assets/project3/2.png",
      "/assets/project3/3.png",
      "/assets/project3/4.png",
      "/assets/project3/5.png",
      "/assets/project3/6.png",
    ],
    github: "https://github.com/koeproject/KKU_BLOGv2",
  },
  {
    id: 4,
    title: { th: "Stock Management System", en: "GangBung Kafae Management System" },
    desc: { th: "ระบบจัดการสต็อกสินค้าและ POS(gangbung kafae)", en: "Coffee shop inventory and point-of-sale management system." },
    overview: {
      th: `ภาพรวมโปรเจค
โปรเจกต์นี้คือเว็บแอปพลิเคชันสำหรับบริหารจัดการสต๊อกวัตถุดิบและการขายหน้าร้านของร้านกาแฟ GangBung Kafae

ฟีเจอร์หลัก
• มีฟังก์ชันจัดการคลังสินค้า (เพิ่ม, เติมสต๊อก, ลบ) และการสร้างสูตรเมนูที่ผูกติดกับวัตถุดิบ
• มีระบบขายหน้าร้าน (POS) ที่เมื่อรับออเดอร์ ระบบจะทำการคำนวณและหักลดปริมาณวัตถุดิบในสต๊อกแบบอัตโนมัติตามสูตรที่ตั้งไว้

สิ่งที่ได้เรียนรู้จากโปรเจคนี้
ได้เรียนรู้การใช้สถาปัตยกรรมแบบแยกส่วนอย่างชัดเจน โดยพัฒนา Backend API ด้วย Spring Boot และพัฒนา Frontend ด้วย Next.js รวมถึงได้ประยุกต์ใช้แนวคิด S.O.L.I.D. Principles, การทำ Containerization ด้วย Docker และการ Deploy ระบบผ่าน Vercel และ Ngrok`,
      en: `This project is a web application designed for point-of-sale (POS) and inventory management at GangBung Kafae coffee shop.

Key Features & Learnings:
• Features comprehensive inventory management (add, refill, delete ingredients) and menu creation linked directly to recipe proportions.
• A POS system that automatically calculates and deducts stock ingredients based on the selected recipe whenever an order is placed.
• I learned to implement a decoupled architecture by building a RESTful Backend with Spring Boot and a Frontend with Next.js. I also gained experience with S.O.L.I.D. principles, Docker containerization, and deploying the app using Vercel and Ngrok.`
    },
    timeline: "Year 2 Sem 2",
    stack: ["Spring Boot", "Java", "Next.js", "PostgreSQL", "Docker", "Vercel", "Ngrok"],
    images: [
      "/assets/project4/1.png",
      "/assets/project4/2.png",
      "/assets/project4/3.png",
      "/assets/project4/4.png",
      "/assets/project4/5.png",
      "/assets/project4/6.png",
      "/assets/project4/7.png",
      "/assets/project4/8.png",
      "/assets/project4/9.png",
      "/assets/project4/10.png",
      "/assets/project4/11.png",
      "/assets/project4/12.png",
      "/assets/project4/13.png",
      "/assets/project4/14.png",
    ],
    github: "https://github.com/Yodsanon-pLoomN/GangBung-Kafae",
  },
  {
    id: 5,
    title: { th: "ระบบลงเวลาทำงาน", en: "Time Attendance System" },
    desc: { th: "ระบบลงเวลาทำงานผ่านการสแกนใบหน้าและพิกัดตำแหน่ง", en: "Face scanning and GPS-based time attendance system." },
    overview: {
      th: `ภาพรวมโปรเจค
โปรเจกต์นี้คือระบบลงเวลาทำงาน ที่พัฒนาขึ้นมาเพื่อใช้ในการบันทึกเวลาเข้า-ออกงานของพนักงานอย่างรัดกุม

ฟีเจอร์หลัก
• ระบบฝั่งผู้ใช้ (User) รองรับการสมัครสมาชิกด้วยภาพถ่ายใบหน้า และสามารถลงเวลาทำงานด้วยการสแกนใบหน้าร่วมกับการดึงพิกัดตำแหน่ง (GPS)
• ระบบฝั่งผู้ดูแลระบบ (Admin) สามารถตั้งค่าพิกัดสถานที่ทำงานหลัก กำหนดรัศมีที่อนุญาตให้ลงเวลา และดูบันทึกการลงเวลาทั้งหมดได้

สิ่งที่ได้เรียนรู้จากโปรเจคนี้
ได้เรียนรู้การประยุกต์ใช้ไลบรารี face-api.js เพื่อประมวลผลและจดจำใบหน้า, การจัดการข้อมูล Geolocation, และการพัฒนาระบบ Full-stack ด้วย Next.js และ Prisma ORM`,
      en: `This project is a Time Attendance System developed to track employee clock-ins and clock-outs securely.

Key Features & Learnings:
• The user module supports registration with face capture and handles time attendance via facial recognition combined with GPS location fetching.
• The admin module allows configuring the main workplace coordinates (latitude, longitude, radius) and viewing all attendance logs.
• I learned how to integrate face-api.js for facial recognition, process geolocation data, and build a full-stack app using Next.js and Prisma ORM.`
    },
    timeline: "2568",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "face-api.js", "Prisma ORM", "PostgreSQL"],
    images: [
      "/assets/project5/1.jpg",
      "/assets/project5/2.png",
      "/assets/project5/3.png",
      "/assets/project5/4.png",
      "/assets/project5/5.png",
      "/assets/project5/6.jpg",
      "/assets/project5/7.jpg",
      "/assets/project5/8.jpg",
    ],
    github: "https://github.com/Yodsanon-pLoomN/Time-attendance",
  },
  {
    id: 6,
    title: { th: "Game", en: "Escape from Skibidi Game" },
    desc: { th: "เกม 3D แนวสยองขวัญแบบผู้เล่นหลายคน", en: "3D multiplayer horror survival game." },
    overview: {
      th: `ภาพรวมโปรเจค
โปรเจกต์นี้คือการพัฒนาเกม 3D แนวสยองขวัญ (Horror) ที่มีชื่อว่า "Escape from Skibidi" ซึ่งรองรับการเล่นแบบผู้เล่นหลายคน

ฟีเจอร์หลัก
• ผู้เล่นจะสวมบทบาทเป็นมนุษย์หัวกล้อง (Camera Head) ที่ต้องออกสำรวจด่านเพื่อเก็บรวบรวมโน้ตให้ครบ 8 อัน เพื่อเอาชนะปีศาจโถส้วม
• ระบบเกมรองรับการเล่นแบบผู้เล่นหลายคน (Multiplayer) ผ่านระบบเครือข่าย
• มีระบบบังคับทิศทางและมีปัญญาประดิษฐ์ (AI) ควบคุมพฤติกรรมศัตรูที่คอยไล่ล่า

สิ่งที่ได้เรียนรู้จากโปรเจคนี้
ได้เรียนรู้พื้นฐานการพัฒนาเกม 3D, การผสาน Assets ตัวละคร, การพัฒนาระบบเครือข่ายผู้เล่นหลายคน และการวิเคราะห์อารมณ์ของผู้เล่นตามหลัก AGE Analysis เช่น การสร้างความกลัว ความตื่นเต้น และการกระตุ้นสัญชาตญาณ`,
      en: `This project is a 3D horror game titled "Escape from Skibidi".

Key Features & Learnings:
• Players take on the role of 'Camera Head' and must explore the map to collect 8 hidden notes to defeat the Skibidi toilet monster.
• The game features a multiplayer mode over a network, character movement controls, and enemy AI mechanics that actively hunt the players.
• I learned the fundamentals of 3D game development, integrating 3D assets, implementing multiplayer networking, and applying AGE Analysis to design emotions like fear, excitement, and survival instincts.`
    },
    timeline: "Year 2 Sem 1",
    stack: ["Godot Engine", "3D Modeling"],
    images: [
      "/assets/project6/1.png",
      "/assets/project6/2.png",
      "/assets/project6/3.png",
      "/assets/project6/4.png",
      "/assets/project6/5.png",
      "/assets/project6/6.png",
      "/assets/project6/7.png",
    ],
    github: "https://github.com/Yodsanon-pLoomN/GameProject-Escape-from-skibidi",
  }
];