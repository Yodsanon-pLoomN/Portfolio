import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import profilepic from '../public/Profilepic.png';
import Clientslogos from '../public/Clients logos.svg';

export default function Home() {
  return (
    <>
    <Navbar />


    <div className="flex flex-wrap gap-60 m-10 justify-center mt-40">
    <div className="">
    <h1 className="text-5xl font-bold text-white">Yodsanon Duangkhai</h1>
    <p className="text-[#9C9C9C] mt-10 text-balance  max-w-96">Hello My name is Yodsanon Duangkhai Intro text: Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <button className="text-white bg-[#3F8E00] px-20 py-5 rounded-md mt-10">Let’s get started {'>'}</button>
    </div>
    <div className="">
    <Image
      src={profilepic}
      alt="Picture of the author"
      width={300}
    />
    </div>
    </div>

    <div className="mt-40 container mx-auto flex-col">
    <div>
    <p className="text-white mb-10 ml-40">Worked with</p>
    </div>
    <div className="flex justify-center">
    <Image
      src={Clientslogos}
      alt="Picture of the author"
      width={1000}
    />
    </div>
    </div>




    <div className="bg-red-500 container mx-auto">test</div>
    </>
  );
}
