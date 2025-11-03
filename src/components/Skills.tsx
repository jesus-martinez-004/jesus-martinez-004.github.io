import { Code, Database, Cloud, Shield, Languages, Braces } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: 'Lenguajes',
      icon: Code,
      items: [
        { name: 'JavaScript', level: 'Avanzado' },
        { name: 'TypeScript', level: 'Avanzado' },
        { name: 'Java', level: 'Básico-Medio' },
        { name: 'Python', level: 'Básico' },
        { name: 'SQL', level: 'Intermedio' }
      ]
    },
    {
      category: 'Frameworks',
      icon: Braces,
      items: [
        { name: 'NestJS', level: 'Intermedio' },
        { name: 'Express', level: 'Avanzado' },
        { name: 'Fastify', level: 'Intermedio' }
      ]
    },
    {
      category: 'Bases de Datos',
      icon: Database,
      items: [
        { name: 'PostgreSQL', level: 'Intermedio' },
        { name: 'SQL Server', level: 'Intermedio' },
        { name: 'Firebase', level: 'Básico' },
        { name: 'MongoDB', level: 'Básico' }
      ]
    },
    {
      category: 'Despliegue',
      icon: Cloud,
      items: [
        { name: 'Render', level: 'Intermedio' },
        { name: 'GitHub Pages', level: 'Básico' },
        { name: 'Vercel', level: 'Básico' },
        { name: 'Netlify', level: 'Básico' },
        { name: 'Firebase Hosting', level: 'Básico' }
      ]
    },
    {
      category: 'Seguridad',
      icon: Shield,
      items: [
        { name: 'Autenticación/Autorización', level: 'Intermedio' },
        { name: 'Manejo seguro de contraseñas', level: 'Intermedio' },
        { name: 'Tokens JWT', level: 'Intermedio' },
        { name: 'HTTPS', level: 'Básico' },
        { name: 'Prevención XSS', level: 'Básico' },
        { name: 'SQL Injection Prevention', level: 'Básico' },
        { name: 'CSRF Protection', level: 'Básico' },
        { name: 'Seguridad en APIs', level: 'Intermedio' }
      ]
    },
    {
      category: 'Idiomas',
      icon: Languages,
      items: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Básico' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'avanzado':
      case 'nativo':
        return 'bg-green-500';
      case 'intermedio':
        return 'bg-yellow-500';
      case 'básico':
      case 'básico-medio':
        return 'bg-orange-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      itemScope
      itemType="https://schema.org/DefinedTermSet"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2
            id="skills-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            itemProp="name"
          >
            Tecnologías & <span className="text-[#E50914]">Skills</span>
          </h2>
          <div
            className="w-24 h-1 bg-[#E50914] mx-auto"
            aria-hidden="true"
          ></div>
        </header>

        {/* Listado de categorías */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Categorías de habilidades"
        >
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <article
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-[#E50914] transition-all duration-300 hover:shadow-lg hover:shadow-red-200/40 dark:hover:shadow-red-900/20 hover:scale-105"
                itemScope
                itemType="https://schema.org/DefinedTerm"
              >
                <header className="flex items-center gap-3 mb-4">
                  <Icon className="text-[#E50914]" size={28} aria-hidden="true" />
                  <h3
                    className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                    itemProp="name"
                  >
                    {skillGroup.category}
                  </h3>
                </header>

                <ul className="space-y-3" itemProp="hasDefinedTerm">
                  {skillGroup.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-2"
                      itemScope
                      itemType="https://schema.org/DefinedTerm"
                    >
                      <span
                        className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300"
                        itemProp="name"
                      >
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`}
                          aria-hidden="true"
                        ></div>
                        <span
                          className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300"
                          itemProp="description"
                        >
                          {skill.level}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <footer className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
            En constante aprendizaje y mejora continua.
          </p>
        </footer>
      </div>
    </section>
  );
}