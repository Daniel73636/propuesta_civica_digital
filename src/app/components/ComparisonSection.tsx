'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const COMPARISON_DATA = [
  {
    feature: 'Consulta de saldo y movimientos',
    current: 'Depende de validadores físicos, PAC o apps de terceros sin sincronización en tiempo real.',
    proposed: 'Directamente en la App Oficial, en tiempo real y con categorización de gastos.',
  },
  {
    feature: 'Recarga de tarjeta',
    current: 'Máquinas de recarga, taquillas, o canales digitales que requieren validación física posterior.',
    proposed: 'Recarga 100% digital que se refleja inmediatamente en el sistema central.',
  },
  {
    feature: 'Registro (Cívica Personalizada)',
    current: 'Trámite presencial en PACs con presentación de documentos físicos.',
    proposed: 'Registro digital (eKYC) desde la app con validación biométrica y de documentos.',
  },
  {
    feature: 'Uso sin tarjeta física',
    current: 'Solo a través de Cívica Pay (QR), limitado en interoperabilidad nativa (NFC).',
    proposed: 'NFC nativo (Apple Wallet / Google Wallet) para pagos rápidos "Tap and Go".',
  },
  {
    feature: 'Bloqueo por pérdida',
    current: 'Llamada telefónica o asistencia presencial en PAC.',
    proposed: 'Bloqueo instantáneo de la credencial digital desde la App o portal web.',
  },
];

export default function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Estado Actual vs Propuesta</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            El salto cualitativo
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="w-1/3 py-5 px-6 font-bold text-ink-300 border-b border-ink-800 text-sm tracking-wider uppercase">
                    Funcionalidad
                  </th>
                  <th className="w-1/3 py-5 px-6 font-bold text-ink-500 border-b border-ink-800 text-sm tracking-wider uppercase bg-ink-900/50">
                    Estado Actual
                  </th>
                  <th className="w-1/3 py-5 px-6 font-bold text-metro-400 border-b border-metro-500/30 text-sm tracking-wider uppercase bg-metro-500/5">
                    Propuesta Cívica Digital
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, type: 'spring' as const, stiffness: 60 }}
                    className="group border-b border-ink-800/50 hover:bg-ink-900/30 transition-colors"
                  >
                    <td className="py-6 px-6 align-top">
                      <p className="text-white font-bold text-sm">{row.feature}</p>
                    </td>
                    <td className="py-6 px-6 align-top bg-ink-900/50">
                      <div className="flex gap-3">
                        <XCircle className="w-5 h-5 text-ink-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-ink-400 leading-relaxed">{row.current}</p>
                      </div>
                    </td>
                    <td className="py-6 px-6 align-top bg-metro-500/5 relative overflow-hidden group-hover:bg-metro-500/10 transition-colors">
                      <div className="absolute inset-0 w-1 bg-metro-500/30" />
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-metro-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-metro-100 font-medium leading-relaxed">{row.proposed}</p>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
