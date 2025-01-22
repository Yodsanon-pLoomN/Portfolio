import Image from 'next/image';
import behance from '../../public/behance.svg';
import linkedin from '../../public/linkedin.svg';
import twitter from '../../public/twitter.svg';
import instragram from '../../public/instagram.svg';

const Navbar = () => {
  return (
   <nav className="bg-[#1B1B1B] text-white  mx-20  rounded-b-lg flex p-5 justify-between">
    <div className="gap-20 mr-56 flex justify-self-center text-[#9C9C9C] text-sm ml-20">
    <button className="">Home</button>
    <button>Case Studies</button>
    <button>Testimonials</button>
    <button>Recent work</button>
    <button>Get In Touch</button>
    </div>
    <div className="flex gap-5">
    <button>
    <Image
      src={linkedin}
      alt="Picture of the author"
      width={15}
    /></button>
    <button>
    <Image
      src={instragram}
      alt="Picture of the author"
      width={20}
    /></button>
    </div>
   </nav>
  )
}
export default Navbar