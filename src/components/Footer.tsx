import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Información principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            className="text-center md:text-left"
            itemScope
            itemType="https://schema.org/Person"
            itemProp="author"
          >
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <span
                className="text-[#E50914] font-semibold"
                itemProp="name"
              >
                © {currentYear} Jesús Daniel Martínez Pérez
              </span>{' '}
              — <span itemProp="jobTitle">Backend Developer</span>
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-300" itemProp="worksFor">
              Hecho con <span itemProp="knowsAbout">Vite</span> y{' '}
              <span itemProp="knowsAbout">TypeScript</span>
            </p>
          </div>

          {/* Redes sociales */}
          <nav
            className="flex gap-6"
            aria-label="Redes sociales de Jesús Daniel Martínez Pérez"
          >
            <a
              href="https://github.com/jesus-martinez-004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#E50914] transition-colors duration-300"
              aria-label="Perfil de GitHub de Jesús Daniel Martínez Pérez"
              itemProp="sameAs"
            >
              <Github size={24} aria-hidden="true" />
            </a>

            <a
              href="https://mx.linkedin.com/in/jesus-martinez004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[#E50914] transition-colors duration-300"
              aria-label="Perfil de LinkedIn de Jesús Daniel Martínez Pérez"
              itemProp="sameAs"
            >
              <Linkedin size={24} aria-hidden="true" />
            </a>

            <a
              href="mailto:jesusmartinez70717@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-[#E50914] transition-colors duration-300"
              aria-label="Enviar correo electrónico a Jesús Daniel Martínez Pérez"
              itemProp="email"
            >
              <Mail size={24} aria-hidden="true" />
            </a>
          </nav>
        </div>

        {/* Lema personal */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
          <p
            className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300"
            itemProp="description"
          >
            Diseño minimalista • Enfocado en backend • Siempre aprendiendo
          </p>
        </div>
      </div>
    </footer>
  );
}