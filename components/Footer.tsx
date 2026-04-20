"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from '../public/globe.svg';
import { useI18n } from "@/contexts/I18nContext";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-black/10 bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <Link href="#top" className="flex items-center gap-2 group">
            <Image src={Logo} alt="Logo" width={24} height={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-[#111111] font-bold tracking-wider">PORTFOLIO</span>
          </Link>
          
          <div className="flex gap-8 text-sm font-medium text-[#4b5563]">
            <Link href="#top" className="hover:text-[#111111] transition-colors">{t.nav.home}</Link>
            <Link href="#skills" className="hover:text-[#111111] transition-colors">{t.nav.skills}</Link>
            <Link href="#projects" className="hover:text-[#111111] transition-colors">{t.projects.label}</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6b7280] border-t border-black/10 pt-8">
          <p>© {new Date().getFullYear()} Yodsanon Duangkhai. {t.footer.rights}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
