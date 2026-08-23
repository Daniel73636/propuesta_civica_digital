'use client';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-white font-black tracking-widest text-sm mb-1">
              CÍVICA <span className="text-metro-500">DIGITAL</span>
            </span>
            <span className="text-ink-400 text-sm">
              Propuesta técnica independiente
            </span>
            <span className="text-ink-500 text-xs mt-1 font-mono">
              REF: M00746243
            </span>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-ink-300 text-sm font-bold">
              Daniel Montiel
            </span>
            <span className="text-ink-500 text-xs mt-1">
              Ingeniería de Sistemas e Informática · UPB
            </span>
            <span className="text-ink-600 text-xs mt-1 font-mono">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ink-900">
          <p className="text-[11px] text-ink-600 text-center max-w-3xl mx-auto leading-relaxed">
            Esta iniciativa es una propuesta independiente elaborada con fines
            académicos y de evaluación técnica. No representa un producto oficial
            del Metro de Medellín ni implica su adopción, aprobación o
            patrocinio. Todos los conceptos, interfaces y arquitecturas
            presentados son de carácter ilustrativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
