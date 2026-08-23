'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, Wallet, Car, Bike, CreditCard } from 'lucide-react';

export default function VisionSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-metro-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 20 }}
          className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-metro-500/10 border border-metro-500/30 text-metro-400 mb-8 shadow-glow-green"
        >
          <Sparkles className="h-8 w-8" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, type: 'spring' as const, stiffness: 60 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto"
        >
          Más que un medio de pago, una plataforma de <span className="text-metro-gradient">ciudad inteligente</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, type: 'spring' as const, stiffness: 60 }}
          className="mt-6 text-xl text-ink-300 leading-relaxed max-w-2xl mx-auto"
        >
          La Cívica del futuro no reside en un plástico, sino en un ecosistema digital interoperable que conecta todos los modos de transporte del Valle de Aburrá.
        </motion.p>

        {/* Visual progression */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, type: 'spring' as const, stiffness: 50, damping: 20 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          <div className="card-dark w-48 text-center relative">
            <CreditCard className="w-8 h-8 text-ink-500 mx-auto mb-3" />
            <h3 className="font-bold text-white text-sm">Cívica Física</h3>
            <p className="text-xs text-ink-400 mt-1">Silo cerrado</p>
          </div>
          
          <div className="flex flex-col items-center justify-center text-metro-500 rotate-90 md:rotate-0">
            <ArrowRight className="w-8 h-8 animate-pulse" />
          </div>
          
          <div className="card-dark w-48 text-center relative border-metro-500/30 shadow-metro">
            <Wallet className="w-8 h-8 text-metro-400 mx-auto mb-3" />
            <h3 className="font-bold text-white text-sm">Billetera Digital</h3>
            <p className="text-xs text-metro-400/80 mt-1">Interoperabilidad</p>
          </div>

          <div className="flex flex-col items-center justify-center text-metro-500 rotate-90 md:rotate-0">
            <ArrowRight className="w-8 h-8 animate-pulse" />
          </div>
          
          <div className="card-dark w-48 text-center relative border-emerald-500/30 shadow-glow-green">
            <div className="flex justify-center gap-2 mb-3">
              <Car className="w-6 h-6 text-emerald-400" />
              <Bike className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-bold text-white text-sm">MaaS</h3>
            <p className="text-xs text-emerald-400/80 mt-1">Movilidad Integral</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
