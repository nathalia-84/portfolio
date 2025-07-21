import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "HTML e CSS",
    "React",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "Java",
    "Spring Boot",
    "REST API",
    "MySQL",
    "PostgreSQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-center">
          Sobre Mim
        </h2>
        <div className="glass rounded-lg p-8 border-white/10 border hover:translate-y-1 transition-all duration-200">
          <p className="text-gray-300 mb-6">
            Sou estudante do Bacharelado de Tecnologia da Informação, um curso
            onde construí uma base sólida nos pilares da computação, como lógica
            de programação, estruturas de dados, algoritmos e arquitetura de
            sistemas. Na minha primeira experiência de trabalho, atuei por mais
            de dois anos com gestão de projetos de TI.
          </p>
          <p className="text-gray-300 mb-6">
            Atualmente, atuo como Desenvolvedora de Software em projetos
            pessoais e voluntários, e estou em busca de novos desafios e
            oportunidades para aprimorar minhas habilidades. Meu objetivo é
            contribuir para projetos inovadores e impactantes na área de
            tecnologia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all duration-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MdOutlineSchool className="text-pink-400" />
              Educação
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>
                  Curso Técnico em Desenvolvimento Web - UFRN (2020)
                </strong>
              </li>
              <li>
                <strong>
                  Bacharelado em Tecnologia da Informação - UFRN (2021 - 2026)
                </strong>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all duration-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiOutlineBriefcase className="text-pink-400" />
              Experiências
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Scrum Master na Framework Digital (Fevereiro 2023 - Abril de
                  2025)
                </h4>
                <p>
                  Atuei traduzindo objetivos de negócio em requisitos de
                  software e no planejamento de sprints com Scrum e Kanban.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Desenvolvedora Frontend Voluntária na SouJuniorLabs (Maio 2025
                  - presente)
                </h4>
                <p>
                  Desenvolvimento de interfaces web responsivas com Next.js,
                  React, Typescript, Tailwind CSS, Tanstack Query e Zustand no
                  projeto ConectaBem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
