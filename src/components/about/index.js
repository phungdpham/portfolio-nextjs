export default function About() {
  return (
    <div className="w-full md:w-10/12 lg:8/12 mx-auto">
      <div className="my-12">
        <h2 className="text-3xl text-center">About Me</h2>
        <div className="my-8 text-start  px-8 md:px-32">
          <p className="py-4">
            Are you hiring a position of Digital Marketing Web Developer? If so,
            my skill sets and experiences in 7 years of sale and marketing and 3
            years of Front-End development would be a great fit for your
            business's need.
          </p>
          {/* <p className="py-4">
            Seeking employment in a digital marketing web developer where I can
            apply and improve upon the skills again during my 7 years of sales &
            marketing and 3 years of front-end development.{' '}
          </p> */}
          <button className="mt-8 rounded p-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white hover:bg-amber-700">
            <a className="" href="https://www.linkedin.com/in/phungdpham/">
              My linkedin
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
