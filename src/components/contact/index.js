export default function Contact() {
  return (
    <div className="w-full md:w-10/12 lg:8/12 mx-auto">
      <div className="my-6">
        <div className="my-8 text-start space-y-5 px-8 md:px-32">
          <p className="text-2xl text-center">
            Please send me an email at{' '}
            <a
              href="mailto: phung.contact@gmail.com"
              className="text-amber-400"
              target="_blank"
            >
              phung.contact@gmail.com
            </a>
          </p>
          <p className="text-2xl text-center">
            You can also reach me on  {' '}
            <a
              className="text-blue-800"
              href="https://www.linkedin.com/in/phungdpham/"
            >
             Linkedin at{' '} @Phungdpham
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
