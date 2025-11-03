import { Code2, Database, Shield, MapPin, Languages } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [age, setAge] = useState<number>(19);

  useEffect(() => {
    const birthDate = new Date('2006-04-20');
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado de sección */}
        <header className="text-center mb-12">
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
          >
            Sobre <span className="text-[#E50914]">Mí</span>
          </h2>
          <div
            className="w-24 h-1 bg-[#E50914] mx-auto"
            aria-hidden="true"
          ></div>
        </header>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Descripción personal */}
          <article
            aria-label="Descripción personal y objetivos profesionales"
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              Tengo{' '}
              <strong className="text-[#E50914] font-semibold">{age} años</strong> y actualmente curso el{' '}
              <strong className="text-[#E50914] font-semibold">
                4° cuatrimestre
              </strong>{' '}
              de Ingeniería en Software.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              Me apasiona el{' '}
              <strong className="text-[#E50914] font-semibold">backend</strong>, las bases de datos y las buenas prácticas de desarrollo.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              Busco seguir aprendiendo y mejorar mi nivel en{' '}
              <strong className="text-[#E50914] font-semibold">
                Java, Python e inglés
              </strong>, mientras desarrollo proyectos que me permitan crecer como ingeniero de software.
            </p>
          </article>

          {/* Tarjetas de habilidades */}
          <div className="space-y-4">
            <ul className="space-y-4" aria-label="Habilidades principales">
              <li className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-[#E50914] transition-all duration-300 hover:shadow-lg hover:shadow-red-200/40 dark:hover:shadow-red-900/20">
                <div className="flex items-center gap-4 mb-2">
                  <Code2 className="text-[#E50914]" size={24} aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    Desarrollo Backend
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Especializado en APIs RESTful con Node.js y TypeScript.
                </p>
              </li>

              <li className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-[#E50914] transition-all duration-300 hover:shadow-lg hover:shadow-red-200/40 dark:hover:shadow-red-900/20">
                <div className="flex items-center gap-4 mb-2">
                  <Database className="text-[#E50914]" size={24} aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    Bases de Datos
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Diseño y optimización con PostgreSQL, SQL Server y Firebase.
                </p>
              </li>

              <li className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-[#E50914] transition-all duration-300 hover:shadow-lg hover:shadow-red-200/40 dark:hover:shadow-red-900/20">
                <div className="flex items-center gap-4 mb-2">
                  <Shield className="text-[#E50914]" size={24} aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    Seguridad
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Buenas prácticas de autenticación, autorización y seguridad en APIs.
                </p>
              </li>
            </ul>

            {/* Datos personales */}
            <div
              className="grid grid-cols-2 gap-4 mt-6"
              aria-label="Información adicional"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-center hover:border-[#E50914] transition-all duration-300">
                <MapPin
                  className="text-[#E50914] mx-auto mb-2"
                  size={20}
                  aria-hidden="true"
                />
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  México
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-center hover:border-[#E50914] transition-all duration-300">
                <Languages
                  className="text-[#E50914] mx-auto mb-2"
                  size={20}
                  aria-hidden="true"
                />
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                  ES / EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}