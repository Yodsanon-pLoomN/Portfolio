"use client";

import { useI18n } from "@/contexts/I18nContext";

export default function Contact() {
  const { locale } = useI18n();

  const content = {
  th: {
    label: "ติดต่อ",
    title: "ช่องทางการติดต่อ",
    desc: "สนใจร่วมงาน มีโปรเจกต์ที่อยากให้ช่วยพัฒนา หรือต้องการพูดคุยแลกเปลี่ยนความคิดเห็น สามารถติดต่อผมได้ตามช่องทางด้านล่างเลยครับ",
    primaryCta: "ส่งอีเมล",
    secondaryCta: "โทร",
    nameLabel: "ชื่อ",
    emailLabel: "อีเมล",
    tellLabel: "เบอร์โทร",
  },
  en: {
    label: "Contact",
    title: "Let's Connect",
    desc: "Whether you have a project in mind, an opportunity to discuss, or just want to say hi, feel free to reach out through any of the channels below.",
    primaryCta: "Send Email",
    secondaryCta: "Call Me",
    nameLabel: "Name",
    emailLabel: "Email",
    tellLabel: "Phone",
  },
}[locale];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-black/10 bg-[linear-gradient(140deg,#fafafa_0%,#ffffff_48%,#f5f5f5_100%)] p-8 md:p-12 shadow-sm shadow-black/5">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/60 mb-3">
                {content.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">{content.title}</h2>
              <p className="text-[#4b5563] text-base md:text-lg leading-relaxed max-w-2xl">{content.desc}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:yodsanon.dev@gmail.com"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
                >
                  {content.primaryCta}
                </a>

              </div>
            </div>

            <div className="space-y-3">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-black/55 mb-1">{content.nameLabel}</p>
                <a
                  className="text-sm md:text-base font-medium text-[#111111]"
                >
                  นายยศนนท์ ดวงไข
                </a>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-black/55 mb-1">{content.emailLabel}</p>
                <a
                  href="mailto:YodsanonDK@gmail.com"
                  className="text-sm md:text-base font-medium text-[#111111] hover:underline"
                >
                  YodsanonDK@gmail.com
                </a>
              </div>


              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-black/55 mb-1">{content.tellLabel}</p>
                 <a
                  href="tel:+66956207069"
                  className="text-sm md:text-base font-medium text-[#111111] hover:underline"
                >
                  095-620-7069
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
