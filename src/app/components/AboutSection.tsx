'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserCircle, Mail, GraduationCap, MapPin } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 bg-ink-900 border-t border-ink-800 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 20 }}
          className="card-dark relative overflow-hidden p-8 sm:p-12 text-center"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-metro-500/5 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="mx-auto w-20 h-20 bg-ink-800 rounded-full flex items-center justify-center mb-6 border border-ink-700 shadow-ink">
              <UserCircle className="w-10 h-10 text-ink-400" />
            </div>

            <span className="tag-mono mb-4 inline-block">Sobre el autor</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Daniel Montiel</h2>
            <p className="text-metro-400 font-medium mb-6">Desarrollador e Ingeniero en Formación</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-ink-300 mb-8">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-ink-500" />
                <span>Ing. de Sistemas e Informática (UPB)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ink-500" />
                <span>Medellín, Colombia</span>
              </div>
            </div>

            <p className="text-ink-400 leading-relaxed mb-10 max-w-xl mx-auto text-sm">
              Esta propuesta técnica e interfaz de usuario han sido desarrolladas
              como un ejercicio académico e investigativo independiente para el ecosistema 
              del Metro de Medellín (Caso de referencia: M00746243).
            </p>

            <a
              href="mailto:daniel.montielg@upb.edu.co"
              className="btn-metro inline-flex shadow-glow-green"
            >
              <Mail className="w-4 h-4" />
              Contactar al autor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
