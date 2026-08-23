'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, UserPlus, Nfc, Globe, Check } from 'lucide-react';

const MODULES = [
  {
    num: '01', title: 'Cívica Digital', icon: Smartphone,
    accent: 'border-metro-500/30 hover:border-metro-400/60',
    iconBg: 'bg-metro-500/10 border-metro-500/20 text-metro-400',
    description: 'Gestión de saldo, historial, recargas, credenciales y seguridad desde la aplicación.',
    features: ['Consulta de saldo en tiempo real', 'Historial de transacciones', 'Recargas digitales', 'Gestión de credenciales'],
  },
  {
    num: '02', title: 'Auto-enrolamiento', icon: UserPlus,
    accent: 'border-emerald-500/30 hover:border-emerald-400/60',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    description: 'Registro y vinculación digital de tarjetas mediante NFC o código de Cívica al Portador.',
    features: ['Lectura NFC móvil', 'Registro por código', 'Vinculación remota', 'Eliminación de filas'],
  },
  {
    num: '03', title: 'Credencial móvil', icon: Nfc,
    accent: 'border-violet-500/30 hover:border-violet-400/60',
    iconBg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    description: 'Evaluación del uso de dispositivos móviles compatibles como medio de interacción con los validadores.',
    features: ['NFC nativo (Tap-and-Go)', 'Token de dispositivo', 'Gestión remota', 'Compatibilidad multiplataforma'],
  },
  {
    num: '04', title: 'MaaS', icon: Globe,
    accent: 'border-amber-500/30 hover:border-amber-400/60',
    iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    description: 'Evolución futura hacia integración con billeteras digitales y otros servicios de movilidad.',
    features: ['Billeteras digitales', 'Interoperabilidad', 'Ecosistema abierto', 'Movilidad como Servicio'],
  },
];

export default function ProposalSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="propuesta" className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      {/* Subtle top/bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metro-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metro-500/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Propuesta</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Un ecosistema Cívica diseñado para evolucionar
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            Cuatro módulos interconectados que proponen una ruta de modernización progresiva del sistema Cívica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {MODULES.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ type: 'spring' as const, stiffness: 80, damping: 18, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } }}
                className={`relative bg-ink-950 rounded-2xl border p-6 sm:p-8 cursor-default transition-all duration-300 ${mod.accent}`}
                style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.4)' }}
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-6xl font-black text-ink-800 select-none">
                  {mod.num}
                </span>
                <div className={`relative z-10 h-12 w-12 rounded-xl border flex items-center justify-center mb-4 ${mod.iconBg}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative z-10 text-xl font-black text-white mb-2">{mod.title}</h3>
                <p className="relative z-10 text-sm text-ink-400 leading-relaxed mb-4">{mod.description}</p>
                <ul className="relative z-10 space-y-2">
                  {mod.features.map(feat => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-ink-300">
                      <Check className="h-3.5 w-3.5 text-metro-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
