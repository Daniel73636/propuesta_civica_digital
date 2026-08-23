'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Smartphone, KeyRound, Lock, FileSearch, Database, AlertTriangle, RefreshCw } from 'lucide-react';

const CARDS = [
  { icon: ShieldCheck,   title: 'Autenticación multifactor', description: 'Mecanismos de verificación de identidad en múltiples capas para proteger el acceso a la cuenta.', color: 'text-metro-400 bg-metro-500/10 border-metro-500/20' },
  { icon: Smartphone,    title: 'Gestión de dispositivos',   description: 'Control y administración de los dispositivos autorizados para operar con la cuenta Cívica.',       color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { icon: KeyRound,      title: 'Tokenización',              description: 'Representación segura de las credenciales mediante tokens que no exponen datos sensibles.',           color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  { icon: Lock,          title: 'Cifrado',                   description: 'Protección de datos en tránsito y en reposo mediante estándares de cifrado reconocidos.',             color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
  { icon: FileSearch,    title: 'Auditoría',                 description: 'Registro de eventos y trazabilidad de operaciones para monitoreo y cumplimiento.',                   color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { icon: Database,      title: 'Protección de datos',       description: 'Políticas y mecanismos de resguardo de la información personal del usuario.',                       color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
  { icon: AlertTriangle, title: 'Prevención de fraude',      description: 'Detección de patrones anómalos y mecanismos de protección contra uso no autorizado.',               color: 'text-red-400 bg-red-500/10 border-red-500/20' },
  { icon: RefreshCw,     title: 'Recuperación de credenciales', description: 'Procedimientos seguros para restablecer el acceso a la cuenta en caso de pérdida o compromiso.', color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
];

export default function SecuritySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="seguridad" className="relative py-24 sm:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Seguridad</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Digitalizar también significa proteger
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            La propuesta contempla consideraciones de seguridad como parte integral del diseño del ecosistema.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32, scale: 0.94 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ type: 'spring' as const, stiffness: 80, damping: 18, delay: i * 0.06 }}
                whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } }}
                className="card-dark hover-glow group cursor-default"
              >
                <div className={`h-11 w-11 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${card.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-ink-400 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center text-sm text-ink-500 italic max-w-xl mx-auto"
        >
          Las tecnologías y protocolos específicos dependerán de la evaluación técnica y las capacidades de la infraestructura existente.
        </motion.p>
      </div>
    </section>
  );
}
