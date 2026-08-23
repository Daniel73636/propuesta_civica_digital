'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Map, Flag, CheckCircle2, ChevronRight } from 'lucide-react';

const PHASES = [
  {
    num: '1', title: 'Fundamentos Cívica App', timeframe: 'Meses 1-3',
    status: 'current',
    details: 'Lanzamiento de la nueva aplicación base. Registro de usuarios, vinculación de tarjetas Cívica Personalizada existentes, consulta de saldo en tiempo real e historial básico de movimientos.',
  },
  {
    num: '2', title: 'Recargas y Finanzas', timeframe: 'Meses 4-6',
    status: 'upcoming',
    details: 'Integración completa con pasarelas de pago (PSE, Tarjetas, Bancolombia). Implementación de recargas automáticas y transferencias de saldo entre usuarios del ecosistema.',
  },
  {
    num: '3', title: 'Auto-enrolamiento NFC', timeframe: 'Meses 7-9',
    status: 'upcoming',
    details: 'Habilitación de vinculación de tarjetas Cívica al Portador mediante lectura NFC directa desde el dispositivo móvil y generación de credencial digital.',
  },
  {
    num: '4', title: 'Credencial Móvil (NFC Activo)', timeframe: 'Meses 10-12',
    status: 'upcoming',
    details: 'Pruebas piloto y despliegue del pago directo en validadores usando el teléfono móvil (HCE/Apple Wallet/Google Wallet) sin requerir tarjeta física.',
  },
  {
    num: '5', title: 'Expansión de Ecosistema', timeframe: 'Año 2',
    status: 'upcoming',
    details: 'Integración con rutas integradas, recaudo de terceros y convenios comerciales. La app como medio de pago para servicios aliados de la ciudad.',
  },
  {
    num: '6', title: 'MaaS (Movilidad como Servicio)', timeframe: 'Año 3',
    status: 'upcoming',
    details: 'Integración con EnCicla, taxis, patinetas eléctricas compartidas y planeador multimodal. Suscripciones de movilidad integrales.',
  },
];

export default function RoadmapSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section ref={ref} id="roadmap" className="relative py-24 sm:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Hoja de Ruta</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Evolución progresiva
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            La modernización no ocurre en un solo paso. Proponemos un despliegue iterativo enfocado en entregar valor constante al usuario.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 max-w-6xl mx-auto items-center">
          
          {/* Mobile vertical timeline / Desktop list */}
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-ink-800 -z-10" />
            
            <div className="space-y-4">
              {PHASES.map((phase, i) => {
                const isActive = activePhase === i;
                return (
                  <motion.button
                    key={phase.num}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, type: 'spring' as const, stiffness: 80 }}
                    onClick={() => setActivePhase(i)}
                    className={`w-full flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 text-left relative overflow-hidden ${
                      isActive 
                        ? 'bg-ink-900 border border-metro-500/30 shadow-metro' 
                        : 'hover:bg-ink-900/50 border border-transparent'
                    }`}
                  >
                    {isActive && (
                      <motion.div layoutId="active-highlight" className="absolute inset-0 bg-gradient-to-r from-metro-500/10 to-transparent pointer-events-none" />
                    )}
                    
                    <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center shrink-0 z-10 transition-colors ${
                      isActive ? 'border-metro-500 bg-ink-950 shadow-glow-green' : 'border-ink-700 bg-ink-950'
                    }`} />
                    
                    <div>
                      <p className={`text-xs font-mono font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-metro-400' : 'text-ink-500'}`}>
                        Fase {phase.num}
                      </p>
                      <h3 className={`text-base font-bold mt-1 transition-colors ${isActive ? 'text-white' : 'text-ink-300'}`}>
                        {phase.title}
                      </h3>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Details Panel (Desktop) / Modal-like (Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring' as const, stiffness: 60, damping: 20, delay: 0.4 }}
            className="card-dark relative overflow-hidden min-h-[320px] flex flex-col justify-center"
          >
            {/* Animated border */}
            <div className="absolute inset-0 border-animated opacity-20 pointer-events-none" />
            
            <div className="absolute top-0 right-0 p-8 text-ink-800/20">
              <Map className="w-48 h-48 -rotate-12" />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: 'spring' as const, stiffness: 100, damping: 20 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-metro-500/10 border border-metro-500/30 flex items-center justify-center text-metro-400">
                      <Flag className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Fase {PHASES[activePhase].num}</h3>
                      <p className="text-metro-400 font-mono text-sm font-bold">{PHASES[activePhase].timeframe}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4">{PHASES[activePhase].title}</h4>
                  <p className="text-ink-300 leading-relaxed text-lg">
                    {PHASES[activePhase].details}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-ink-500 bg-ink-950 inline-flex px-4 py-2 rounded-lg border border-ink-800">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="uppercase tracking-widest text-[10px]">Estado propuesto: {PHASES[activePhase].status === 'current' ? 'MVP' : 'Iteración futura'}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
