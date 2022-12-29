import Image from 'next/image';
import projects from '../../constant/db';

export default function Projects() {
  return (
    <div className="bg-slate-100 py-32">
      <div className="w-8/12 md:-10/12 lg:w-8/12 mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={item.image} className="w-full object-cover" />
                  {/* <div className="bg-gradient-to-t from-zinc-900 via-transparent inset-0 absolute rounded"></div> */}
                </div>
                <div className="px-6 py-4 space-y-2 relative ">
                  <p className="text-lg font-bold text-gray-600"></p>
                  <p className="text-lg font-bold text-gray-600">{item.name}</p>
                  <p className="text-lg  text-gray-600">{item.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
