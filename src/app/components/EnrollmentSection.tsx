'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { QrCode, Smartphone, Wifi, CreditCard, ChevronRight, Check } from 'lucide-react';

export default function EnrollmentSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState<'nfc' | 'qr'>('nfc');

  const nfcSteps = [
    { title: 'Descarga de App', desc: 'El usuario instala la App Cívica en su dispositivo NFC.' },
    { title: 'Lectura de tarjeta', desc: 'Acerca su Cívica actual al respaldo del teléfono.' },
    { title: 'Validación segura', desc: 'Se extrae el serial de forma cifrada y se cruza con el Core.' },
    { title: 'Vinculación exitosa', desc: 'La tarjeta queda vinculada a la cuenta digital del usuario.' },
  ];

  const qrSteps = [
    { title: 'Descarga de App', desc: 'El usuario instala la App en cualquier dispositivo.' },
    { title: 'Ingreso de código', desc: 'Digita el código único impreso en su tarjeta Cívica.' },
    { title: 'Validación en Core', desc: 'El sistema verifica que el código corresponda a una tarjeta válida.' },
    { title: 'Vinculación exitosa', desc: 'La tarjeta queda vinculada a la cuenta digital del usuario.' },
  ];

  const steps = activeTab === 'nfc' ? nfcSteps : qrSteps;

  return (
    <section ref={ref} id="auto-enrolamiento" className="relative py-24 sm:py-32 bg-ink-950 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-metro-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Auto-enrolamiento</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Digitalizando la Cívica al Portador
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            Un proceso autónomo que elimina filas. Los usuarios pueden vincular su tarjeta física existente a la aplicación móvil en segundos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-ink-900 border border-ink-800 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('nfc')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'nfc' ? 'bg-metro-500 text-black shadow-metro' : 'text-ink-400 hover:text-ink-200 hover:bg-ink-800'
                }`}
              >
                <Wifi className="w-4 h-4" />
                Vía NFC
              </button>
              <button
                onClick={() => setActiveTab('qr')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'qr' ? 'bg-emerald-500 text-black shadow-glow-green' : 'text-ink-400 hover:text-ink-200 hover:bg-ink-800'
                }`}
              >
                <QrCode className="w-4 h-4" />
                Vía Código
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual feedback */}
            <motion.div
              key={activeTab} // Force re-render on tab change for animation
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' as const, stiffness: 80, damping: 20 }}
              className="relative h-80 rounded-3xl border border-ink-800 bg-ink-900/50 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              
              {activeTab === 'nfc' ? (
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-ink-400" strokeWidth={1} />
                    <motion.div
                      animate={{ y: [20, -10, 20] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute"
                    >
                      <CreditCard className="w-16 h-16 text-metro-400 rotate-12" fill="currentColor" fillOpacity={0.1} />
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-metro-500/50 rounded-full pointer-events-none"
                  />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-metro-500/30 rounded-full pointer-events-none"
                  />
                  <p className="mt-8 font-mono text-sm text-metro-400 font-bold bg-metro-500/10 px-4 py-1.5 rounded-full border border-metro-500/20">
                    Acercar tarjeta al reverso
                  </p>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center bg-ink-950 p-6 rounded-2xl border border-ink-800 shadow-ink-lg">
                    <div className="flex flex-col gap-3">
                      <div className="w-32 h-2 bg-ink-800 rounded-full" />
                      <div className="w-24 h-2 bg-ink-800 rounded-full" />
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex flex-col items-center gap-1 bg-ink-900 border border-ink-700 p-2 rounded-lg">
                          <span className="text-[10px] text-ink-500 font-mono">CÓDIGO POSTERIOR</span>
                          <span className="font-mono text-emerald-400 tracking-widest font-bold">1834 9271 0045</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-8 font-mono text-sm text-emerald-400 font-bold bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                    Ingreso manual
                  </p>
                </div>
              )}
            </motion.div>

            {/* Steps list */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ type: 'spring' as const, stiffness: 60, damping: 20, delay: i * 0.15 + 0.3 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border ${
                      activeTab === 'nfc' 
                        ? 'bg-metro-500/10 text-metro-400 border-metro-500/30' 
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    }`}>
                      {i + 1}
                    </div>
                    {i !== steps.length - 1 && (
                      <div className="w-px h-full bg-ink-800 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-white font-bold">{step.title}</h3>
                    <p className="text-sm text-ink-400 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
