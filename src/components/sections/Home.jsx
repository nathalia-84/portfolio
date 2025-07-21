import { FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent leading-right">
          Olá, eu sou Nathalia!
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Estudante do Bacharelado de Tecnologia da Infomação da UFRN.
          Desenvolvedora Web em formação. Bem-vindo ao meu portfólio!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]"
          >
            Visualizar Projetos
          </a>

          <a
            href="https://www.linkedin.com/in/melo-nathalia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:bg-pink-500/10"
          >
            <FaLinkedin />
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
};
