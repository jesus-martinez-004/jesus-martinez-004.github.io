import { Github, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  urlGitHub: string;
  repositoryUrl: string;
  urlDemo: string | null;
  thumbnail: string;
  datePublished: string;
  programmingLanguage: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2
            id="projects-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            itemProp="name"
          >
            Proyectos <span className="text-[#E50914]">Destacados</span>
          </h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto" aria-hidden="true"></div>
        </header>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400 transition-colors duration-300" role="status">
            Cargando proyectos...
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" itemProp="hasPart">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-[#E50914] transition-all duration-300 hover:shadow-xl hover:shadow-red-200/40 dark:hover:shadow-red-900/20 hover:scale-105 group"
                itemScope
                itemType="https://schema.org/SoftwareSourceCode"
              >
                {/* JSON-LD individual por proyecto */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareSourceCode",
                    name: project.name,
                    description: project.description,
                    url: project.urlDemo ?? project.urlGitHub,
                    codeRepository: project.repositoryUrl,
                    programmingLanguage: project.programmingLanguage,
                    author: {
                      "@type": "Person",
                      name: "Jesús Daniel Martínez Pérez"
                    },
                    datePublished: project.datePublished,
                    thumbnailUrl: project.thumbnail
                  })}
                </script>

                {/* Imagen del proyecto */}
                <img
                  src={project.thumbnail}
                  alt={`Miniatura del proyecto ${project.name}`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  loading="lazy"
                />

                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#E50914] transition-colors duration-300"
                  itemProp="name"
                >
                  {project.name}
                </h3>

                <p
                  className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed min-h-[60px] transition-colors duration-300"
                  itemProp="description"
                >
                  {project.description}
                </p>

                <meta itemProp="author" content="Jesús Daniel Martínez Pérez" />
                <meta itemProp="programmingLanguage" content={project.programmingLanguage.join(', ')} />

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#E50914]/10 dark:bg-[#E50914]/20 border border-[#E50914]/30 dark:border-[#E50914]/40 rounded-full text-xs text-[#830007] dark:text-[#c59d9d] font-medium transition-colors duration-300"
                      itemProp="keywords"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.urlGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg hover:border-[#E50914] hover:text-[#E50914] transition-all duration-300 text-sm"
                    itemProp="codeRepository"
                  >
                    <Github size={16} aria-hidden="true" />
                    GitHub
                  </a>

                  {project.urlDemo && (
                    <a
                      href={project.urlDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#E50914] text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm shadow-md shadow-red-300/40 dark:shadow-red-900/30"
                      itemProp="url"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
            Más proyectos disponibles en mi perfil de GitHub
          </p>
          <a
            href="https://github.com/jesus-martinez-004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#E50914] text-[#E50914] dark:text-white rounded-lg hover:bg-[#E50914] hover:text-white transition-all duration-300 font-semibold"
            itemProp="sameAs"
          >
            <Github size={20} aria-hidden="true" />
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}