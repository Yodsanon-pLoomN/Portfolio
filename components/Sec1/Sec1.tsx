
import Image from "next/image";
import profilepic from '../../public/Profilepic.jpeg';
import Clientslogos from '../../public/Clients logos.svg';
import TailwindCSS from '../../public/TailwindCSS.svg';
import Figma from '../../public/Figma.svg';
import next from '../../public/next.js.svg';
import MySQL from '../../public/MySQL.svg';

const Sec1 = () => {
  return (
 
    <div id="Sec1" className="bg-[#1B1B1B] min-h-screen container mx-auto pt-1 mt-3">
    <div className="flex flex-wrap gap-20 m-10 justify-center">
    <div className="justify-items-center lg:justify-items-start mt-10">
    <h1 className="animate-typing overflow-hidden lg:whitespace-nowrap border-r-4 border-r-white text-5xl text-white font-bold lg:justify-self-start">Yodsanon Duangkhai</h1>
    
    <p className="justify-self-center text-[#9C9C9C] mt-10 max-w-96 lg:justify-self-start">
      Hello My name is Yodsanon Duangkhai Intro text: Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <button className="text-white bg-[#3F8E00] px-20 py-5 rounded-md mt-10 duration-50 hover:scale-105 ">Let’s get started {'>'}</button>
    </div>
    <div className="flex-shrink-0">
    <Image
      src={profilepic}
      alt="Picture of the author"
      width={300}
    />
    </div>
    </div>

    <div className="  mx-auto flex-col">
    <div>
    <p className="text-white ml-40">Worked with</p>
    </div>
    <div className=" grid grid-cols-2 gap-10 m-5 md:grid-cols-2 lg:grid-cols-4 justify-items-center">

    <div className="flex-col text-[#9C9C9C] p-10">
    <Image className="justify-self-center pb-5"
      src={next}
      alt="Picture of the next/js"
      width={50}
    />
    <h1 className="justify-self-center">Next.js</h1>
    </div>
      <div className="flex-col text-[#9C9C9C] p-10">
    <Image className="justify-self-center pb-5"
      src={TailwindCSS}
      alt="Picture of the TailwindCSS"
      width={50}
    />
    <h1 className="justify-self-center">Tailwind CSS</h1>
    </div>
    
  
    <div className="flex-col text-[#9C9C9C] p-10">
    <Image className="justify-self-center pb-5"
      src={MySQL}
      alt="Picture of mySQL"
      width={50}
    />
    <h1 className="justify-self-center">mySQL</h1>
    </div>
    <div className="flex-col text-[#9C9C9C] p-10">
    <Image className="justify-self-center pb-5"
      src={Figma}
      alt="Picture of Figma"
      width={50}
    />
    <h1 className="justify-self-center">Figma</h1>
    </div>


    </div>
    </div>
    </div>
  )
}
export default Sec1