"use client"
import Image from 'next/image';
import linkedin from '../../public/LinkedIn.svg';
import instragram from '../../public/instagram.svg';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    }



  return (
   <nav className="sticky top-0">
    <div className=' flex-1 gap-20 bg-[#1B1B1B] p-4 md:rounded-b-lg md:container flex mx-auto shadow-lg'>

    {/* Toggle */}
    <div className='md:hidden'>
      <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
        <svg 
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        className='w-6 h-6'
        >
          <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </button>
    </div>

    <ul className="hidden md:flex gap-20  text-[#9C9C9C] text-sm ml-20 justify-self-start">
      
    <li className="hover:text-white duration-50 hover:scale-125"><Link href="#top" scroll={true}>Home</Link></li>
    <li className="hover:text-white duration-50 hover:scale-125"><a>Background</a></li>
    <li className="hover:text-white duration-50 hover:scale-125"><Link href="#MyWork" scroll={true}>Recent work</Link></li>
    <li className="hover:text-white duration-50 hover:scale-125"><a>Get In Touch</a></li>
    </ul>

    {/* Social media */}
    <div className="flex gap-5 ml-auto flex-shrink-0">
    <a className="duration-50 hover:scale-125 " href='https://www.linkedin.com/in/loom-pl-173a8a314/' target="_blank">
    <Image
      src={linkedin}
      alt="Picture of the author"
      width={15}
    /></a>
    <a className="duration-50 hover:scale-125" href='https://www.instagram.com/yod_non/' target="_blank">
    <Image
      src={instragram}
      alt="Picture of the author"
      width={20}
    /></a>
    </div>
    </div>


    {/* Mobile menu */}
    {isMenuOpen ?(

    
    <ul className="flex-col md:hidden  text-gray-200 bg-[#1B1B1B] px-4">
    <li className="hover:text-white py-2"><a>Home</a></li>
    <li className="hover:text-white py-2"><a>Background</a></li>
    <li className="hover:text-white py-2"><a>Recent work</a></li>
    <li className="hover:text-white py-2"><a>Get In Touch</a></li>
    </ul>
    ) : null}


   </nav>
  )
}
export default Navbar