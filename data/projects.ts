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
    timeline: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    images: [
      "/assets/project1/1.png",
      "/assets/project1/2.png",
      "/assets/project1/3.png",
      "/assets/project1/4.png",
      "/assets/project1/5.png",
      "/assets/project1/6.png",
    ],
  },
 
];
