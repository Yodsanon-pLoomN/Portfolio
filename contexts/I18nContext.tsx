"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "th" | "en";

type Dictionary = {
  nav: {
    home: string;
    skills: string;
    work: string;
    contact: string;
    language: string;
  };
  hero: {
    name: string;
    intro: string;
    cta: string;
  };
  skills: {
    label: string;
    title: string;
  };
  projects: {
    label: string;
    title: string;
    viewProject: string;
    itemPrefix: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

const messages: Record<Locale, Dictionary> = {
  th: {
    nav: {
      home: "หน้าแรก",
      skills: "ทักษะ",
      work: "ผลงานล่าสุด",
      contact: "ติดต่อ",
      language: "ภาษา",
    },
    hero: {
      name: "ยศนนท์ ดวงไข",
      intro:
        "สวัสดีครับ ผมชื่อยศนนท์ ดวงไข เป็นนักพัฒนาเว็บที่ชอบสร้างประสบการณ์ดิจิทัลที่ทันสมัย ลื่นไหล และใส่ใจรายละเอียด",
      cta: "เริ่มต้นกันเลย",
    },
    skills: {
      label: "ทักษะของผม",
      title: "เทคโนโลยีที่ใช้งาน",
    },
    projects: {
      label: "ผลงาน",
      title: "งานล่าสุด",
      viewProject: "ดูโปรเจกต์",
      itemPrefix: "โปรเจกต์",
    },
    footer: {
      rights: "สงวนลิขสิทธิ์",
      builtWith: "ขอขอบคุณที่เข้าชมเว็บไซต์ของผม",
    },
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      work: "Recent Work",
      contact: "Get In Touch",
      language: "Language",
    },
    hero: {
      name: "Yodsanon Duangkhai",
      intro:
        "Hello, my name is Yodsanon Duangkhai. I build modern, interactive, and beautifully crafted web experiences.",
      cta: "Let's get started",
    },
    skills: {
      label: "My Arsenal",
      title: "Worked with",
    },
    projects: {
      label: "Portfolio",
      title: "Recent Work",
      viewProject: "View Project",
      itemPrefix: "Project",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Thanks for visiting my portfolio",
    },
  },
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio_locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "th";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "th" || stored === "en") {
    return stored;
  }

  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("th") ? "th" : "en";
}

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(() => initialLocale ?? getInitialLocale());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.cookie = `${STORAGE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}
