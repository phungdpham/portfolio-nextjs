import Image from 'next/image';
// import Link from '../../../constant/link';
// import heroBanner from '../../../images/homeBanner.jpg';
// import salonDb from "../../../constant/db";

function Banner() {
  return (
    <div className=" bg-gradient-to-r from-zinc-900 bg-zinc-700 pt-12">
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto ">
        <div className="mx-6 flex flex-col gap-4 md:flex-row-reverse items-center justify-between">
          <div>
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_Yiahbq.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="my-12 text-white">
            <h2 className="text-3xl font-semibol text-white sm:text-3xl mb-8">
              Hello, I'm <span className="text-amber-400">Phung.</span>
            </h2>
            <h2 className="text-3xl font-semibol text-white sm:text-3xl capitalize">
              Welcome to my porfolio page
            </h2>
            <button className="mt-8 rounded p-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white hover:bg-amber-700">
              <a className="" href="/about">
                My Projects
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
