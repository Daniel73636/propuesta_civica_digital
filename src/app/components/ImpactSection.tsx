'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Users, ShieldCheck, Leaf, Coins } from 'lucide-react';

const IMPACTS = [
  { icon: Clock,       title: 'Reducción de tiempos',   value: '90%',  desc: 'Menos tiempo en filas para recargas y trámites gracias a la autogestión digital.', color: 'text-metro-400 bg-metro-500/10 border-metro-500/20' },
  { icon: Users,       title: 'Adopción digital',       value: '60%',  desc: 'Migración proyectada de usuarios presenciales a canales digitales en el primer año.', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
  { icon: ShieldCheck, title: 'Disminución de fraude',  value: '99%',  desc: 'Trazabilidad y tokenización para evitar la clonación o reventa de pasajes.', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { icon: Coins,       title: 'Ahorro operativo',       value: '45%',  desc: 'Menor necesidad de emisión de tarjetas físicas y atención en puntos físicos.', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { icon: TrendingUp,  title: 'Satisfacción',           value: '4.8',  desc: 'Calificación esperada de la experiencia de usuario (CSAT) en la nueva aplicación.', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  { icon: Leaf,        title: 'Impacto ambiental',      value: 'CO2',  desc: 'Reducción significativa de huella de carbono al emitir menos plásticos (tarjetas PVC).', color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
];

export default function ImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="impacto" className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-metro-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Impacto Esperado</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Resultados medibles y evaluables
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            La transformación digital del ecosistema Cívica está orientada a generar valor tangible tanto para el usuario como para la operación del sistema.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ type: 'spring' as const, stiffness: 80, damping: 15, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } }}
                className="card-dark relative overflow-hidden group cursor-default"
              >
                {/* Background value watermark */}
                <div className="absolute -right-4 -bottom-4 text-[120px] font-black text-ink-800/30 select-none pointer-events-none group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                  {item.value.replace('%', '')}
                </div>
                
                <div className={`relative z-10 h-12 w-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-4xl font-black text-white">{item.value}</h3>
                  </div>
                  <h4 className="text-sm font-bold text-ink-200 mb-2 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-sm text-ink-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
