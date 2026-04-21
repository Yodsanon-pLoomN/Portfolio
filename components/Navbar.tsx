"use client"
import Image from 'next/image';
import linkedin from '../public/LinkedIn.svg';
import instragram from '../public/instagram.svg';
import github from '../public/Github.svg';
import Logo from '../public/Logo.svg';
import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/contexts/I18nContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm shadow-black/5">
      <div className='flex items-center justify-between container mx-auto px-6 py-4'>
        {/* Logo */}
        <Link href="#top" scroll={true} className="flex items-center gap-2 group">
          <Image
            src={Logo}
            alt="Logo"
            width={30}
            height={30}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-[#111111] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">YODSANON DUANGKHAI</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-[#4b5563] text-xs lg:text-sm font-medium">
          <li><Link href="#top" scroll={true} className="hover:text-[#111111] transition-colors duration-200">{t.nav.home}</Link></li>
          <li><Link href="#skills" scroll={true} className="hover:text-[#111111] transition-colors duration-200">{t.nav.skills}</Link></li>
          <li><Link href="#projects" scroll={true} className="hover:text-[#111111] transition-colors duration-200">{t.nav.work}</Link></li>
          <li><Link href="#contact" scroll={true} className="hover:text-[#111111] transition-colors duration-200">{t.nav.contact}</Link></li>
        </ul>

        {/* Social media & Toggle */}
        <div className="flex items-center gap-3 lg:gap-6">
          <div className="hidden sm:flex items-center gap-2 rounded-md border border-black/15 p-1 text-xs">
            <button
              type="button"
              onClick={() => setLocale('th')}
              className={`px-2 py-1 rounded ${locale === 'th' ? 'bg-black text-white' : 'text-[#4b5563] hover:text-black'}`}
              aria-label="Switch to Thai"
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-black text-white' : 'text-[#4b5563] hover:text-black'}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href='https://www.linkedin.com/in/loom-pl-173a8a314/' target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 hover:scale-110 transition-all duration-300 opacity-75">
              <Image src={linkedin} alt="LinkedIn" width={22} height={22} />
            </a>
            <a href='https://www.instagram.com/yod_non/' target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 hover:scale-110 transition-all duration-300">
              <Image src={instragram} alt="Instagram" width={22} height={22} />
            </a>
             <a href='https://github.com/Yodsanon-pLoomN' target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 hover:scale-110 transition-all duration-300 opacity-75" >
              <Image src={github} alt="GitHub" width={22} height={22} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className='md:hidden text-[#111111] hover:text-black transition-colors' 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' className='w-7 h-7'>
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-black/10 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-90 py-4' : 'max-h-0 py-0'}`}>
        <ul className="flex flex-col items-center gap-6 text-[#4b5563] font-medium">
          <li><Link href="#top" scroll={true} onClick={() => setIsMenuOpen(false)} className="hover:text-[#111111] transition-colors">{t.nav.home}</Link></li>
          <li><Link href="#skills" scroll={true} onClick={() => setIsMenuOpen(false)} className="hover:text-[#111111] transition-colors">{t.nav.skills}</Link></li>
          <li><Link href="#projects" scroll={true} onClick={() => setIsMenuOpen(false)} className="hover:text-[#111111] transition-colors">{t.nav.work}</Link></li>
          <li><Link href="#contact" scroll={true} onClick={() => setIsMenuOpen(false)} className="hover:text-[#111111] transition-colors">{t.nav.contact}</Link></li>

          <div className="flex items-center gap-2 rounded-md border border-black/15 p-1 text-xs">
            <button
              type="button"
              onClick={() => setLocale('th')}
              className={`px-2 py-1 rounded ${locale === 'th' ? 'bg-black text-white' : 'text-[#4b5563] hover:text-black'}`}
              aria-label="Switch to Thai"
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-black text-white' : 'text-[#4b5563] hover:text-black'}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
          
          <div className="flex gap-6 mt-2 pt-4 border-t border-black/10 w-1/2 justify-center">
            <a href='https://www.linkedin.com/in/loom-pl-173a8a314/' target="_blank" rel="noopener noreferrer" className='opacity-75'>
              <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
            </a>
            <a href='https://www.instagram.com/yod_non/' target="_blank" rel="noopener noreferrer">
              <Image src={instragram} alt="Instagram" width={24} height={24} />
            </a>
            <a href='https://github.com/Yodsanon-pLoomN' target="_blank" rel="noopener noreferrer" className='opacity-75'>
              <Image src={github} alt="GitHub" width={24} height={24} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}
