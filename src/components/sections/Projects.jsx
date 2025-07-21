export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-center">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Projeto 1 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              API REST para Sistema de Supermercado
            </h3>
            <p className="text-gray-400 mb-4">
              API REST para gerenciar um sistema de supermercado, com operações
              CRUD para produtos, clientes e pedidos. Desenvolvida para a
              disciplina de Desenvolvimento Web II (BTI - UFRN).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Java", "Spring Boot", "Maven", "MySQL"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/nathalia-84/SistemaMercado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors my-4"
              >
                Visualizar Projeto →
              </a>
            </div>
          </div>
          {/* Projeto 2 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Jogo da Velha com IA (Algoritmo Minimax)
            </h3>
            <p className="text-gray-400 mb-4">
              Jogo da Velha com interface responsiva onde o jogador enfrenta uma
              IA. O oponente é controlado pelo algoritmo Minimax, que calcula a
              melhor jogada possível a cada turno, criando um desafio imbatível.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "JavaScript", "CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/nathalia-84/TicTacToe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors my-4"
              >
                Visualizar Projeto →
              </a>
            </div>
          </div>
          {/* Projeto 3 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Loja Virtual (E-commerce) com Gerenciamento de Estado
            </h3>
            <p className="text-gray-400 mb-4">
              Front-end de um e-commerce com funcionalidades de vitrine de
              produtos e carrinho de compras.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "JavaScript", "Context API", "Bootstrap"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/nathalia-84/react-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors my-4"
              >
                Visualizar Projeto →
              </a>
            </div>
          </div>
          {/* Projeto 4 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Plataforma de Busca de Filmes
            </h3>
            <p className="text-gray-400 mb-4">
              Aplicação web para buscar e consultar filmes utilizando a API do
              The Movie Database (TMDB).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TypeScript", "Tailwind CSS", "TMDB API"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/nathalia-84/movie-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors my-4"
              >
                Visualizar Projeto →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
