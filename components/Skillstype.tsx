"use client";

import Image from "next/image";
import { useI18n } from "@/contexts/I18nContext";
import { techStack } from "@/data/tools";

const categoryLabels = {
  th: {
    design: "ออกแบบ",
    css: "CSS / UI",
    framework: "เฟรมเวิร์ก",
    runtime: "Runtime",
    database: "ฐานข้อมูล",
    orm: "ORM",
    containerization: "Container",
    library: "ไลบรารี",
    "version-control": "Version Control",
  },
  en: {
    design: "Design",
    css: "CSS / UI",
    framework: "Frameworks",
    runtime: "Runtime",
    database: "Databases",
    orm: "ORM",
    containerization: "Containers",
    library: "Libraries",
    "version-control": "Version Control",
  },
} as const;

const categoryOrder = [
  "framework",
  "library",
  "css",
  "database",
  "orm",
  "runtime",
  "containerization",
  "design",
  "version-control",
] as const;

export default function Skills() {
  const { locale, t } = useI18n();

  const groupedTechStack = categoryOrder
    .map((type) => ({
      type,
      items: techStack.filter((tech) => tech.type === type),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-black uppercase tracking-[0.2em] text-sm font-semibold mb-2">{t.skills.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] relative inline-block">
            {t.skills.title}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {groupedTechStack.map((group) => (
            <div key={group.type} className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-black/70">
                  {categoryLabels[locale][group.type]}
                </h3>
                <span className="h-px flex-1 bg-black/10" />
                <span className="text-xs text-black/40 font-medium">
                  {group.items.length} {locale === "th" ? "รายการ" : "items"}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-white border border-black/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-150 hover:bg-[#fafafa] hover:border-black/20 hover:shadow-md hover:shadow-black/10 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>

                    <div className="relative w-16 h-16 transition-transform duration-150 group-hover:scale-105 z-10">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[#4b5563] font-medium text-lg group-hover:text-[#111111] transition-colors duration-150 z-10">
                      {tech.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
