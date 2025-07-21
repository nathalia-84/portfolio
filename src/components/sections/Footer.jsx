import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-6 mt-16">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-semibold text-lg">Nathalia Melo</span>
          <p className="text-sm text-white/80">Desenvolvedora de Software</p>
        </div>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://github.com/nathalia-84"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/melo-nathalia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:nathaliaazmelo@gmail.com"
            className="hover:text-gray-200 transition"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
