'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function DocumentSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="documento" className="relative py-24 bg-ink-950 overflow-hidden">
      {/* Heavy glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-metro-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 20 }}
          className="relative rounded-3xl p-1 bg-gradient-to-b from-metro-500/40 via-metro-500/10 to-transparent"
        >
          <div className="bg-ink-950 rounded-[1.4rem] p-8 sm:p-16 text-center border border-ink-900 shadow-ink-lg relative overflow-hidden">
            
            {/* Animated scanning line over the CTA */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-metro-500/50 shadow-glow-green animate-scanner pointer-events-none" />

            <div className="mx-auto w-16 h-16 bg-metro-500/10 rounded-2xl flex items-center justify-center mb-8 border border-metro-500/30 text-metro-400">
              <FileText className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Documento Técnico Completo
            </h2>
            <p className="text-ink-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Descarga el documento formal con el desglose de arquitectura, requerimientos, 
              modelo de datos, consideraciones de seguridad y análisis de viabilidad.
            </p>
            
            <button className="btn-metro text-lg px-8 py-4 shadow-glow-green hover:shadow-metro-lg">
              <Download className="w-5 h-5" />
              Descargar Propuesta PDF
            </button>
            <p className="mt-4 text-xs font-mono text-ink-500 uppercase tracking-widest">
              PDF · 2.4 MB · v1.0
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
