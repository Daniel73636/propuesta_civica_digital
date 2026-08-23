'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Unplug, Lock, User, MapPin, Clock, UserCheck, FileText, Smartphone, ShieldCheck, Zap, ArrowDown } from 'lucide-react';

const PROBLEMS = [
  { icon: Building2, title: 'Dependencia de procesos presenciales', description: 'Determinados trámites asociados a la Cívica requieren que el usuario se desplace hasta un Punto de Atención al Cliente, lo que implica tiempo y espera.' },
  { icon: Unplug,    title: 'Fragmentación entre canales',          description: 'Los canales físicos y digitales operan de forma separada, limitando una experiencia de usuario integrada y fluida.' },
  { icon: Lock,      title: 'Limitada autonomía del usuario',       description: 'Los usuarios disponen de opciones limitadas para gestionar su Cívica de manera autónoma desde su dispositivo móvil.' },
];

const PRESENCIAL = [
  { icon: User,      label: 'Usuario' },
  { icon: MapPin,    label: 'Desplazamiento' },
  { icon: Building2, label: 'PAC' },
  { icon: Clock,     label: 'Espera' },
  { icon: UserCheck, label: 'Atención' },
  { icon: FileText,  label: 'Trámite' },
];
const DIGITAL = [
  { icon: User,        label: 'Usuario' },
  { icon: Smartphone,  label: 'App Cívica' },
  { icon: ShieldCheck, label: 'Validación' },
  { icon: Zap,         label: 'Operación digital' },
];

function FlowStep({ icon: Icon, label, isLast, accent }: { icon: React.ElementType; label: string; isLast: boolean; accent: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`flex items-center gap-3 px-5 py-3 rounded-xl border w-full max-w-[220px] ${accent}`}>
        <div className="h-9 w-9 rounded-lg bg-ink-900 flex items-center justify-center shrink-0">
          <Icon className="h-4 w-4 text-ink-300" />
        </div>
        <span className="text-sm font-medium text-ink-200">{label}</span>
      </div>
      {!isLast && (
        <div className="flex flex-col items-center py-1">
          <div className="w-px h-4 bg-ink-700" />
          <ArrowDown className="h-3 w-3 text-ink-600" />
        </div>
      )}
    </div>
  );
}

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="problema" className="relative py-24 sm:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-60" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Contexto</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            ¿Qué estamos intentando mejorar?
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            Un análisis de la experiencia actual del usuario con el sistema Cívica y las oportunidades de mejora identificadas.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ type: 'spring' as const, stiffness: 70, damping: 18, delay: i * 0.12 }}
                className="card-dark hover-glow group cursor-default"
              >
                <div className="h-12 w-12 rounded-xl bg-metro-500/10 border border-metro-500/20 flex items-center justify-center mb-4 group-hover:bg-metro-500/20 group-hover:border-metro-500/40 transition-all">
                  <Icon className="h-6 w-6 text-metro-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18, delay: 0.4 }}
        >
          <h3 className="text-2xl font-black text-white text-center mb-10">Comparación de procesos</h3>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start max-w-4xl mx-auto">
            <div className="card-dark">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  <Clock className="w-3 h-3" /> Proceso presencial
                </span>
              </div>
              {PRESENCIAL.map((s, i) => (
                <FlowStep key={i} icon={s.icon} label={s.label} isLast={i === PRESENCIAL.length - 1} accent="bg-ink-800/80 border-amber-500/15" />
              ))}
            </div>
            <div className="hidden md:flex flex-col items-center justify-center h-full gap-3">
              <div className="w-px h-16 bg-ink-800" />
              <div className="h-10 w-10 rounded-full bg-ink-800 border border-ink-700 flex items-center justify-center">
                <span className="text-xs font-black text-ink-400">VS</span>
              </div>
              <div className="w-px h-16 bg-ink-800" />
            </div>
            <div className="md:hidden flex justify-center py-2">
              <div className="h-10 w-10 rounded-full bg-ink-800 border border-ink-700 flex items-center justify-center">
                <span className="text-xs font-black text-ink-400">VS</span>
              </div>
            </div>
            <div className="card-dark">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-metro-500/10 border border-metro-500/20 text-metro-400 text-xs font-semibold">
                  <Zap className="w-3 h-3" /> Proceso digital
                </span>
              </div>
              {DIGITAL.map((s, i) => (
                <FlowStep key={i} icon={s.icon} label={s.label} isLast={i === DIGITAL.length - 1} accent="bg-ink-800/80 border-metro-500/20" />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center text-sm text-ink-500 italic max-w-2xl mx-auto"
        >
          No todos los procesos necesariamente pueden o deben digitalizarse. La propuesta busca identificar cuáles pueden trasladarse de manera segura al entorno digital.
        </motion.p>
      </div>
    </section>
  );
}
