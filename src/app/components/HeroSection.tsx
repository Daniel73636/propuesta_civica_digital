'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Smartphone, Nfc, Plus, Clock, CreditCard,
  ArrowDown, Layers, Signal, ChevronRight,
} from 'lucide-react';

function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [0, -0.8, 0.8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="relative mx-auto w-[272px] sm:w-[292px]"
    >
      {/* Glow beneath phone */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-metro-500/20 blur-2xl rounded-full" />

      {/* Phone bezel */}
      <div className="relative rounded-[2.8rem] border-[5px] border-ink-700 bg-ink-900 p-1 shadow-ink-lg">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-ink-800 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[2.2rem] bg-ink-950 min-h-[520px]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-7 pb-2">
            <span className="text-[10px] text-ink-400 font-mono">9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3 text-ink-400" />
              <div className="w-5 h-2.5 rounded-sm border border-ink-500 p-[1px]">
                <div className="h-full w-3/4 bg-metro-500 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 py-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-metro-500/15 border border-metro-500/30 flex items-center justify-center">
                <Smartphone className="w-3.5 h-3.5 text-metro-400" />
              </div>
              <span className="text-white text-sm font-bold">Cívica Digital</span>
            </div>
            <Nfc className="w-5 h-5 text-metro-400 animate-spark" />
          </div>

          {/* Greeting */}
          <div className="px-5 pt-1">
            <p className="text-ink-400 text-xs">Bienvenido</p>
            <p className="text-white text-base font-bold">Hola, Daniel</p>
          </div>

          {/* Balance card */}
          <div className="mx-5 mt-3 rounded-2xl p-4 relative overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #0d8040 0%, #18c45e 60%, #34d872 100%)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/10 rounded-full translate-y-8 -translate-x-8" />
            <p className="text-metro-100 text-[10px] font-semibold uppercase tracking-widest relative z-10">Saldo disponible</p>
            <p className="text-white text-2xl font-black mt-1 relative z-10">$45.200</p>
            <p className="text-metro-200 text-[10px] relative z-10">COP</p>
            <div className="flex items-center gap-1.5 mt-2 relative z-10">
              <div className="status-dot" />
              <span className="text-white/90 text-[10px] font-semibold ml-3">Cívica Activa</span>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2 px-5 mt-4">
            {[
              { icon: Plus,       label: 'Recargar', c: 'bg-metro-500/15 text-metro-400 border-metro-500/20' },
              { icon: Clock,      label: 'Historial', c: 'bg-ink-800 text-ink-300 border-ink-700' },
              { icon: CreditCard, label: 'Tarjetas',  c: 'bg-ink-800 text-ink-300 border-ink-700' },
              { icon: Nfc,        label: 'NFC',        c: 'bg-metro-500/15 text-metro-400 border-metro-500/20' },
            ].map(({ icon: Icon, label, c }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div className={`h-10 w-10 rounded-xl border flex items-center justify-center ${c}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[9px] text-ink-400 font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Credential */}
          <div className="mx-5 mt-4 flex items-center justify-between bg-ink-800/60 border border-ink-700/60 rounded-xl px-3 py-2.5">
            <div className="flex items-center gap-2">
              <Nfc className="w-4 h-4 text-metro-400" />
              <span className="text-white text-xs font-medium">Credencial Móvil</span>
            </div>
            <div className="w-8 h-[18px] rounded-full bg-metro-500 flex items-center justify-end px-0.5">
              <div className="w-3.5 h-3.5 rounded-full bg-white" />
            </div>
          </div>

          {/* Recent activity */}
          <div className="px-5 mt-4 pb-6">
            <p className="text-ink-500 text-[10px] font-mono font-semibold uppercase tracking-widest mb-2">
              Actividad reciente
            </p>
            {[
              { name: 'Est. Industriales', amount: '-$2.950', neg: true  },
              { name: 'Recarga digital',   amount: '+$20.000',neg: false },
              { name: 'Est. Niquia',       amount: '-$2.950', neg: true  },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-ink-800/50 last:border-0">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-ink-800 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-ink-500" />
                  </div>
                  <span className="text-ink-300 text-[11px]">{item.name}</span>
                </div>
                <span className={`text-[11px] font-bold ${item.neg ? 'text-red-400' : 'text-metro-400'}`}>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.10 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { type: 'spring' as const, stiffness: 60, damping: 18 } },
  };

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-metro-950/40 via-ink-950 to-ink-950" />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-metro-500/8 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-metro-600/6 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-32 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <span className="tag-mono">
                Ampliación técnica · Caso M00746243
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.05] tracking-tight text-white"
            >
              Cívica: de tarjeta de transporte a{' '}
              <span className="text-metro-gradient">
                ecosistema digital
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-5 text-lg text-ink-300 leading-relaxed">
              Propuesta técnica de modernización y digitalización integral del
              sistema Cívica del Metro de Medellín.
            </motion.p>

            <motion.p variants={itemVariants} className="mt-4 text-base text-ink-400 leading-relaxed max-w-xl">
              Una propuesta para evolucionar la experiencia del usuario mediante
              autogestión digital, NFC, vinculación de tarjetas, credenciales
              móviles y una hoja de ruta hacia la movilidad como servicio.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#propuesta"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-metro"
              >
                Explorar la propuesta
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#arquitectura"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
              >
                <Layers className="w-4 h-4" />
                Ver arquitectura
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="mt-10 flex gap-8 border-t border-ink-800 pt-8">
              {[
                { value: '4', label: 'Módulos propuestos' },
                { value: '6', label: 'Fases de roadmap' },
                { value: '8+', label: 'Capas de seguridad' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-metro-400">{s.value}</p>
                  <p className="text-xs text-ink-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ type: 'spring' as const, stiffness: 60, damping: 20, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />
    </section>
  );
}
