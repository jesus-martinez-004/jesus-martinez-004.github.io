import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Guardar la preferencia en localStorage para que persista
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (

    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Cabecera principal */}

      <header id="inicio" className="relative">
        <Hero />
      </header>

      {/* Contenido principal del sitio */}
      <main id="main-content">
        <section id="about" aria-labelledby="about-title">
          <About />
        </section>

        <section id="skills" aria-labelledby="skills-title">
          <Skills />
        </section>
        {/* Botón para cambiar de modo */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded shadow"
        >
          {darkMode ? 'Claro' : 'Oscuro'}
        </button>

        <section id="projects" aria-labelledby="projects-title">
          <Projects />
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>

      {/* Pie de página */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
