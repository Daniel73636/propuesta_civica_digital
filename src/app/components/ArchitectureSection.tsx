'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Database, Lock, Smartphone, Server, Cloud, Code } from 'lucide-react';

const ARCH_LAYERS = [
  {
    id: 'user',
    name: 'Capa de Usuario',
    icon: Smartphone,
    color: 'border-metro-500/50 bg-metro-500/10 text-metro-400',
    description: 'Interfaces móviles nativas (iOS/Android) con las que interactúa el pasajero.',
  },
  {
    id: 'api',
    name: 'Capa de Integración (API Gateway)',
    icon: Cloud,
    color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
    description: 'Orquestación de microservicios, balanceo de carga y enrutamiento seguro.',
  },
  {
    id: 'services',
    name: 'Capa de Microservicios',
    icon: Server,
    color: 'border-violet-500/50 bg-violet-500/10 text-violet-400',
    description: 'Lógica de negocio: gestión de saldo, usuarios, tokenización NFC y MaaS.',
  },
  {
    id: 'data',
    name: 'Capa de Datos y Core',
    icon: Database,
    color: 'border-amber-500/50 bg-amber-500/10 text-amber-400',
    description: 'Integración con el Core del Metro, bases de datos y HSM para criptografía.',
  },
];

export default function ArchitectureSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section ref={ref} id="arquitectura" className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Arquitectura</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Diseño modular y escalable
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            Una visión conceptual de la arquitectura técnica necesaria para soportar el ecosistema digital propuesto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Visual Diagram */}
          <div className="relative h-[450px] w-full flex flex-col items-center justify-center perspective-[1000px]">
            {ARCH_LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              const zIndex = 40 - index * 10;
              const translateY = isActive ? -20 : index * 40;
              const translateZ = isActive ? 50 : 0;
              const rotateX = 60;

              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 100, rotateX: 60, scale: 0.8 }}
                  animate={inView ? { 
                    opacity: isActive ? 1 : 0.7, 
                    y: translateY, 
                    z: translateZ,
                    rotateX: rotateX,
                    scale: isActive ? 1.05 : 1
                  } : {}}
                  transition={{ 
                    type: 'spring' as const, 
                    stiffness: 80, 
                    damping: 15, 
                    delay: inView ? index * 0.15 : 0 
                  }}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`absolute w-64 sm:w-80 h-32 rounded-2xl border-2 backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors duration-300 ${layer.color} ${isActive ? 'bg-opacity-20 shadow-glow-green border-opacity-100' : 'bg-opacity-10 border-opacity-40 hover:bg-opacity-15'}`}
                  style={{ zIndex, transformStyle: 'preserve-3d' }}
                >
                  {/* Subtle 3D Depth effect on hover */}
                  <div className={`absolute inset-0 bg-ink-950/80 -z-10 rounded-xl transition-all duration-300 ${isActive ? 'translate-y-2 blur-sm opacity-50' : 'opacity-0'}`} />
                  
                  <div className="flex flex-col items-center gap-2" style={{ transform: 'translateZ(20px) rotateX(-60deg)' }}>
                    <Icon className="w-8 h-8" />
                    <span className="font-bold text-sm tracking-wide">{layer.name}</span>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Connecting line */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={inView ? { height: '240px', opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute w-0.5 bg-gradient-to-b from-metro-500/50 via-metro-500/20 to-transparent -z-10"
              style={{ transform: 'rotateX(60deg) translateZ(-50px)' }}
            />
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            {ARCH_LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ type: 'spring' as const, stiffness: 60, damping: 20, delay: index * 0.1 + 0.4 }}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-ink-800 border-metro-500/50 shadow-metro' 
                      : 'bg-ink-950/50 border-ink-800 hover:border-ink-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2 rounded-lg border transition-colors ${
                      isActive ? layer.color : 'bg-ink-900 border-ink-800 text-ink-500'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-ink-200'}`}>
                        {layer.name}
                      </h3>
                      <p className={`text-sm mt-1 leading-relaxed transition-colors ${isActive ? 'text-ink-300' : 'text-ink-500'}`}>
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
