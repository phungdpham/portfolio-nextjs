import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Linkin from "../../images/linkin.png"
import Github from "../../images/github.png"

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    sidebarOpen === true ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  return (
    <div className="h-full w-full border-solid border-b-2 border-gray-100">
      <nav className="w-full md:w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center justify-between mx-auto p-5 text-black">
          <div>
            <h2 className="text-lg font-bold text-amber-400 uppercase md:text-2xl">Phung <span className='text-zinc-900'>Pham</span></h2>
          </div>
          <div>
            <ul className="hidden md:grid md:grid-cols-4 md:gap-4">
            <li className="hover:text-amber-400 hover:font-bold hover:border-solid hover:border-b-2 hover:border-amber-400">
                <Link href="/">Home</Link>
              </li>
              {/* <li className="hover:text-amber-400 hover:font-bold hover:border-solid hover:border-b-2 hover:border-amber-400">
                <Link href="/about">About</Link>
              </li> */}
              <li className="hover:text-amber-400 hover:font-bold hover:border-solid hover:border-b-2 hover:border-amber-400">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="hover:text-amber-400 hover:font-bold hover:border-solid hover:border-b-2 hover:border-amber-400">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex md:flex-row md:items-center md:gap-3">
            <div className="hover:font-bold w-10">
              <a href='https://github.com/phungdpham'>
                <Image src={Github}/>
              </a>
            </div>
            <div className="w-10">
              <a href='https://www.linkedin.com/in/phungdpham/'>
              <Image src={Linkin}/>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
