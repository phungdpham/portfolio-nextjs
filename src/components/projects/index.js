import Image from 'next/image';
import projects from '../../constant/db';
import { FaEye, FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="bg-slate-100 py-32">
      <div className="w-11/12 md:-10/12 lg:w-8/12 mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded-md shadow overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden hover:block ">
                  <Image
                    src={item.image}
                    className="h-full absolute bg-transparent object-cover"
                  />
                  <div className=" hover:bg-amber-400/70 inset-0 absolute"></div>
                    <button className="absolute top-2 p-2 bg-transparent border-solid border-2 border-white">
                      <a className="text-white">View Demo</a>
                    </button>
                </div>
                <div className="px-6 py-4 items-center space-y-2 relative border-t-4 border-amber-400 ">
                  <div className="flex items-end justify-between">
                    <a
                      href={item.demo}
                      className="hover:font-bold hover:text-amber-500"
                    >
                      <p className="text-lg font-bold text-gray-600 hover:text-gray-800">
                        {item.name}
                      </p>
                    </a>
                    <FaGithub className="float-right text-3xl" />

                    {/* <FaEye className="float-right text-3xl" /> */}
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-lg  text-amber-400">{item.tech}</p>
                    <a href={item.github} target="_blank">
                      {/* <FaGithub className="float-right text-3xl" /> */}
                    </a>
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
