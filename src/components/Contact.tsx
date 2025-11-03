import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://lucky-pond-72f9.kingytff16.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert('¡Gracias por escribirme, te responderé pronto!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error al enviar el mensaje.');
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      alert('Error al enviar el mensaje.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header principal */}
        <header className="text-center mb-12">
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            itemProp="name"
          >
            Contacto<span className="text-[#E50914]">.</span>
          </h2>
          <div
            className="w-24 h-1 bg-[#E50914] mx-auto"
            aria-hidden="true"
          ></div>
        </header>

        <p
          className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto transition-colors duration-300"
          itemProp="description"
        >
          ¿Te interesa colaborar conmigo o tienes un proyecto en mente?{' '}
          <strong className="text-[#E50914] font-semibold">¡Hablemos!</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <aside
            aria-label="Opciones de contacto directo"
            itemScope
            itemType="https://schema.org/Person"
            className="space-y-6"
          >
            <meta itemProp="name" content="Jesús Daniel Martínez Pérez" />

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#E50914] transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-[#E50914]/10 rounded-lg flex items-center justify-center">
                <Mail className="text-[#E50914]" size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">
                  Email
                </h3>
                <a
                  href="mailto:jesusmartinez70717@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#E50914] transition-colors duration-300"
                  itemProp="email"
                >
                  jesusmartinez70717@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#E50914] transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-[#E50914]/10 rounded-lg flex items-center justify-center">
                <Github className="text-[#E50914]" size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">
                  GitHub
                </h3>
                <a
                  href="https://github.com/jesus-martinez-004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#E50914] transition-colors duration-300"
                  itemProp="sameAs"
                >
                  github.com/jesus-martinez-004
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#E50914] transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-[#E50914]/10 rounded-lg flex items-center justify-center">
                <Linkedin className="text-[#E50914]" size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">
                  LinkedIn
                </h3>
                <a
                  href="https://mx.linkedin.com/in/jesus-martinez004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#E50914] transition-colors duration-300"
                  itemProp="sameAs"
                >
                  linkedin.com/in/jesus-martinez004
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#E50914]/10 dark:bg-[#E50914]/20 border border-[#E50914]/30 dark:border-[#E50914]/40 rounded-lg transition-colors duration-300">
              <MessageSquare className="text-[#E50914] mb-3" size={28} aria-hidden="true" />
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
                Disponibilidad
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300" itemProp="knowsAbout">
                Abierto a oportunidades de colaboración, prácticas profesionales y proyectos freelance.
              </p>
            </div>
          </aside>

          {/* Formulario de contacto */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm transition-colors duration-300"
            aria-label="Formulario de contacto"
            itemScope
            itemType="https://schema.org/ContactForm"
          >
            <div>
              <label htmlFor="name" className="block text-gray-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-[#E50914] focus:outline-none transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Tu nombre completo"
                aria-required="true"
                itemProp="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-[#E50914] focus:outline-none transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="tu@email.com"
                aria-required="true"
                itemProp="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-[#E50914] focus:outline-none transition-colors duration-300 resize-none placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Cuéntame sobre tu proyecto o idea..."
                aria-required="true"
                itemProp="text"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#E50914] text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-200/50 dark:shadow-red-900/30 hover:shadow-red-300/70 dark:hover:shadow-red-800/50 hover:scale-105"
            >
              <Send size={20} aria-hidden="true" />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}