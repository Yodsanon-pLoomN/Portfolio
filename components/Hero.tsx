"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import profilepic from '../public/Profilepic.png';
import { useI18n } from "@/contexts/I18nContext";

export default function Hero() {
  const { locale, t } = useI18n();

  return (
    <section id="top" className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:pl-48">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-2">
          
          {/* Text Content */}
          <div className="w-full lg:basis-[46%] lg:max-w-140 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <div className="inline-block mb-6 overflow-visible">
              <h1 className="w-max whitespace-nowrap text-4xl sm:text-5xl md:text-6xl leading-[1.2] text-[#111111] font-bold">
                <span
                  key={locale}
                  className="inline-block animate-typing overflow-hidden border-r-4 border-r-[#111111] px-1 py-1 align-bottom"
                  style={{ "--typing-steps": t.hero.name.length } as CSSProperties}
                >
                  {t.hero.name}
                </span>
              </h1>
            </div>
            
            <p className="text-[#4b5563] text-lg md:text-xl leading-relaxed max-w-xl">
              {t.hero.intro}
            </p>
            
            <div className="mt-10 flex gap-4">
              <a href="#projects" className="px-8 py-4 bg-black text-white rounded-lg font-medium shadow-sm shadow-black/15 transition-opacity duration-200 hover:opacity-90">
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.cta}
                  <span>{'>'}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:basis-[44%] lg:max-w-130 flex justify-center lg:justify-start z-10 perspective-1000">
            <div className="relative">
              <div className="relative w-90 h-115 md:w-115 md:h-150">
                <Image
                  src={profilepic}
                  alt="Yodsanon Duangkhai"
                  fill
                  sizes="(min-width: 1024px) 44vw, (min-width: 768px) 460px, 360px"
                  className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
