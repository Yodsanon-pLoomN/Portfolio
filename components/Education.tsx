"use client";

import { useI18n } from "@/contexts/I18nContext";
import { educationList } from "@/data/educations";


export default function Education() {
  const { locale } = useI18n();

  const text = {
    th: {
      label: "การศึกษา",
      title: "ประวัติการศึกษา",
    },
    en: {
      label: "Education",
      title: "Academic Background",
    },
  }[locale];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-14">
          <span className="text-black uppercase tracking-[0.2em] text-sm font-semibold mb-2">{text.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] relative inline-block">
            {text.title}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {educationList.map((item) => (
            <article
              key={`${item.school.en}-${item.period}`}
              className="rounded-2xl border border-black/10 bg-[#fafafa] p-6 md:p-7 transition-all duration-150 hover:border-black/20 hover:shadow-md hover:shadow-black/10"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#111111]">{item.school[locale]}</h3>
                  <p className="text-sm md:text-base text-[#374151] mt-1">{item.degree[locale]}</p>
                </div>
                <span className="inline-flex items-center self-start rounded-full border border-black/15 bg-white px-3 py-1 text-xs font-medium text-[#111111]">
                  {item.period}
                </span>
              </div>
              <p className="text-[#4b5563] mt-3 leading-relaxed">{item.detail[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
