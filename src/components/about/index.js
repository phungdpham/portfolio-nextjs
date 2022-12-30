export default function About() {
  return (
    <div className="w-full md:w-10/12 lg:8/12 mx-auto">
      <div className="my-12 items-center mx-auto">
        <div className="text-4xl font-bold text-gray-600 mb-3 text-center">
          About Me
        </div>
        <div className="my-8 text-start mx-auto space-y-3 px-8 md:px-16 lg:px-32">
          <p className="text-lg">
            Are you looking for a{' '}
            <span className="text-amber-400">
              Digital Marketing Web Developer
            </span>{' '}
            who have skill sets and experience in Digital Marketing and Web
            Development for your organization? Let see below how my skill sets
            and experience fit to your hiring requirement.
          </p>
          <ul className="text-lg list-disc mx-4 space-y-2">
            <li>
              Having 3 years exprience in Front-End Develoment with{' '}
              <span className="text-amber-400">
                React, Gatsby, NextJS and TailwindCSS
              </span>
              .{' '}
            </li>
            <li>
              Having taken a{' '}
              <span className="text-amber-400 capitalize">
                6-month fullstack development coding bootcampt
              </span>{' '}
              at Unversity of Central Florida (UCF). <br /> View{' '}
              <a
                href="https://www.credly.com/preserved-badge/15307068"
                className="text-amber-400 underline"
              >
                My Certificate
              </a>
              .
            </li>
            <li>
              Having 4 years experience in running digital ads (Facebook and
              Google Advertising) for lead generations, from which I have obtained
              ability to develop effectively landing pages for right audience.
            </li>
            <li>
              Having 7 years experience in sales enables me to easily understand
              clients and transfer their needs into solutions for their
              business.
            </li>
          </ul>
          {/* <p className="py-4">
            Seeking employment in a digital marketing web developer where I can
            apply and improve upon the skills again during my 7 years of sales &
            marketing and 3 years of front-end development.{' '}
          </p> */}
          {/* <button className="text-center mt-8 rounded p-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white hover:bg-amber-700">
            <a className="items-center text-center" href="https://www.linkedin.com/in/phungdpham/">
              My linkedin
            </a>
          </button> */}
        </div>
      </div>
    </div>
  );
}
