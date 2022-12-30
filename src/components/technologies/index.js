import Image from "next/image";
import Airtable from "../../images/airtable.png";
import Firebase from "../../images/firebase.png";
import Github from "../../images/github.png";
import Js from "../../images/javascript.png";
import NextJs from "../../images/nextjs.png";
import Node from "../../images/node.png";
import ReactJs from "../../images/react.png";
import TailwindCSS from "../../images/tailwindcss.png";

export default function Technologies() {
  const tech = [
      {name: "React", img: ReactJs},
      {name: "NextJS", img: NextJs},
      {name: "Javascript", img: Js},
      {name: "Airtable", img: Airtable},
      {name: "TailwindCSS", img: TailwindCSS},
      {name: "Firebase", img: Firebase},
      {name: "Node", img: Node},
      {name: "Github", img: Github},
      
  ]
  return (
    <div className="bg-gray-50  py-32">
    <div className="w-10/12 md:w-10/12 lg:w-8/12 mx-auto">
        <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600 mb-3">Technologies I use</p>
            {/* <p className="text-gray-600 dark:text-gray-100">Discover Places by Categories</p> */}
        </div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-gap-2 place-items-center gap-10">
              {tech.map((item,index) => (
                <a href="#" className="p-4 bg-white dark:border  w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg">
                    <Image src={item.img} alt="" className="w-32 h-32 mx-auto rounded-full"></Image>
                    <div className="space-y-2 text-center">
                        <p className="text-gray-700 text-lg font-semibold mb-3">{item.name}</p>
                    </div>
                </a>
              ))}
                
                
               
            </div>
            <div className="mt-12 text-center">
                <button className="rounded-md py-2.5 px-4 bg-amber-400 capitalize border border-gray-100 text-lg shadow hover:shadow-lg text-white hover:bg-amber-500 hover:text-white">
                    <a href="/projects">View Projects</a>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}