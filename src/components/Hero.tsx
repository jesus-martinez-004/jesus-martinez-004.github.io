import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> creando el futuro';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewCV = () => {
    window.open('https://jesus-martinez-004.github.io/recursos/cv.pdf', '_blank');
  };

  return (
    <section
      id="hero"
      aria-label="Sección principal de presentación de Jesús Daniel Martínez Pérez"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Imagen o logotipo accesible */}
        <div className="mb-8 inline-block" aria-hidden="true">
          <div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#E50914] to-red-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg shadow-red-300/70 dark:shadow-red-900/50 transition-colors duration-300"
            role="img"
            aria-label="Logo con iniciales JD"
          >
            JD
          </div>
        </div>

        {/* Texto tipo terminal */}
        <div className="mb-6 font-mono text-[#E50914] text-sm md:text-base" aria-live="polite">
          {terminalText}
          <span className="animate-pulse">|</span>
        </div>

        {/* Encabezado principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
          Hola, soy{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">
            Jesús Daniel Martínez Pérez
          </span>
        </h1>

        {/* Subtítulo descriptivo */}
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
          Estudiante de Ingeniería en Software en la <span className="text-[#E50914] font-semibold">Universidad Politécnica del Centro</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-300">
          Apasionado por el desarrollo{' '}
          <strong className="text-[#E50914] font-semibold">Backend</strong>
        </p>

        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
          Desarrollo APIs escalables y eficientes con TypeScript, JavaScript y bases de datos SQL y NoSQL.
        </p>

        {/* Botones principales */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-[#E50914] text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-300/70 dark:shadow-red-900/30 hover:shadow-red-400/80 dark:hover:shadow-red-800/50 hover:scale-105 focus:ring-4 focus:ring-red-400"
          >
            Ver mis proyectos
          </button>
          <button
            onClick={viewCV}
            className="px-8 py-4 bg-transparent border-2 border-[#E50914] text-[#E50914] dark:text-white rounded-lg font-semibold hover:bg-[#E50914] hover:text-white transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-red-400"
          >
            Descargar CV
          </button>
        </div>

        {/* Iconos de redes sociales */}
        <nav
          className="flex gap-6 justify-center text-gray-600 dark:text-gray-400 transition-colors duration-300"
          aria-label="Enlaces a redes sociales"
        >
          <a
            href="https://github.com/jesus-martinez-004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Jesús Daniel Martínez Pérez"
            className="hover:text-[#E50914] transition-colors duration-300 hover:scale-110 transform focus:ring-4 focus:ring-red-400 rounded-full"
          >
            <Github size={28} aria-hidden="true" />
          </a>
          <a
            href="https://mx.linkedin.com/in/jesus-martinez004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de Jesús Daniel Martínez Pérez"
            className="hover:text-[#E50914] transition-colors duration-300 hover:scale-110 transform focus:ring-4 focus:ring-red-400 rounded-full"
          >
            <Linkedin size={28} aria-hidden="true" />
          </a>
          <a
            href="mailto:jesusmartinez70717@gmail.com"
            aria-label="Enviar correo a Jesús Daniel Martínez Pérez"
            className="hover:text-[#E50914] transition-colors duration-300 hover:scale-110 transform focus:ring-4 focus:ring-red-400 rounded-full"
          >
            <Mail size={28} aria-hidden="true" />
          </a>
        </nav>
      </div>

      {/* Indicador de desplazamiento */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown size={32} className="text-[#E50914]" />
      </div>
    </section>
  );
}