import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Linkin from '../../images/linkin.png';
import Github from '../../images/github.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    sidebarOpen === true ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  const pages = [
    {name: "home", url: "/"},
    {name: "projects", url: "/projects"},
    {name: "contact", url: "/contact"}

  ]

  return (
    <div className="h-full w-full border-solid border-b-2 border-gray-100">
      <nav className="w-full md:w-10/12 lg:w-8/12 mx-auto">
        <div className="flex items-center justify-between mx-auto p-5 text-black">
          <div>
            <h2 className="text-lg font-bold text-amber-400 uppercase md:text-2xl">
              Phung <span className="text-zinc-900">Pham</span>
            </h2>
          </div>
          <div className="text-center justify-center">
            <ul className="hidden md:grid md:grid-cols-3 md:gap-4 text-xl">
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
              <a href="https://github.com/phungdpham">
                <Image src={Github} />
              </a>
            </div>
            <div className="w-10">
              <a href="https://www.linkedin.com/in/phungdpham/">
                <Image src={Linkin} />
              </a>
            </div>
          </div>
          {/* Hamburger Button */}
          <button
            className={`z-50 lg:hidden focus:outline-none
            }`}
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <AiOutlineClose className="text-2xl text-white" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-amber-400" />
            )}
          </button>
        </div>
         {/* Mobile Menu */}
         <div
          className={`fixed inset-0 z-30 flex-col items-center self-end w-full h-full m-h-screen 
        px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 
        opacity-95 bg-zinc-900 lg:hidden ${
          sidebarOpen
            ? 'fixed  translate-y-0 flex transition-all ease-in duration-300'
            : 'hidden'
        }`}
        >
    
          {pages.map((page, key) => (
            <div className="w-full py-3 text-center">
              <Link key={key} href={page.url}>
                <a className="block hover:font-bold hover:text-amber-400">{page.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
