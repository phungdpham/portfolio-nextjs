import Image from 'next/image';
import projects from '../../constant/db';
import { FaEye, FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="bg-slate-100 py-16">
      <div className="w-11/12 md:-10/12 lg:w-8/12 mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-md shadow overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative group h-48 overflow-hidden  ">
                  <Image src={item.image} className="h-full absolute object-cover" />
                  {/* <div className="bg-amber-400/10  inset-0 absolute"></div> */}
                  <a href={item.demo} className="absolute bottom-2 right-2 " target="_blank">
                    <button className="text-white  bg-zinc-900/50  p-2 hover:bg-amber-400 w-max rounded-lg z-40">
                       {/* <FaEye className="text-4xl"/> */}View Demo
                    </button>
                  </a>
                </div>
                <div className="px-6 py-4 items-center space-y-2 relative border-t-4 border-amber-400 ">
                  <div className="flex items-end justify-between">
                    <a
                      href={item.demo}
                      target="_blank"
                      className="hover:font-bold hover:text-amber-500"
                    >
                      <p className="text-lg font-bold text-gray-600 hover:text-amber-500 hover:underline">
                        {item.name}
                      </p>
                    </a>
                    <a href={item.github} target="_blank">
                      <FaGithub className="float-right text-3xl hover:font-bold" />
                    </a>

                    {/* <FaEye className="float-right text-3xl" /> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg  text-amber-400">{item.tech}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
