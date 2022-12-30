import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-zinc-900 mx-auto">
      <div className="w-11/12 md:w-8/12 lg:w-10/12 xl:w-8/12 mx-auto  py-12">
          <div className=" text-white text-center mx-auto">{new Date().getFullYear()} © PhungPham. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
