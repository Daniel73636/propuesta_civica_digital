'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { LayoutGrid, CreditCard, History, Nfc, Shield, Settings, Signal, Smartphone, Search, ArrowLeft, AlertTriangle, Eye } from 'lucide-react';

const SCREENS = [
  { id: 'home',     name: 'Inicio / Dashboard', icon: LayoutGrid },
  { id: 'balance',  name: 'Consulta de Saldo',  icon: CreditCard },
  { id: 'history',  name: 'Historial',          icon: History },
  { id: 'nfc',      name: 'Credencial NFC',     icon: Nfc },
  { id: 'enroll',   name: 'Vincular Tarjeta',   icon: Smartphone },
  { id: 'security', name: 'Seguridad',          icon: Shield },
  { id: 'settings', name: 'Ajustes',            icon: Settings },
];

export default function UXSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return (
          <div className="flex flex-col h-full bg-ink-950">
            {/* Header */}
            <div className="px-5 pt-12 pb-4 bg-ink-900 border-b border-ink-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-metro-500/20 border border-metro-500/30 flex items-center justify-center">
                  <UserIcon />
                </div>
                <div>
                  <p className="text-[10px] text-ink-400">Buenos días,</p>
                  <p className="text-sm font-bold text-white leading-none">Daniel Montiel</p>
                </div>
              </div>
              <Nfc className="w-5 h-5 text-metro-400" />
            </div>
            
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 no-scrollbar">
              {/* Balance Card */}
              <div className="rounded-2xl p-4 relative overflow-hidden"
                   style={{ background: 'linear-gradient(135deg, #0d8040 0%, #18c45e 60%, #34d872 100%)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
                <p className="text-metro-100 text-[10px] font-semibold uppercase tracking-widest relative z-10">Cívica Personalizada</p>
                <div className="mt-2 relative z-10">
                  <span className="text-white text-3xl font-black">$45.200</span>
                  <span className="text-metro-200 text-xs ml-1">COP</span>
                </div>
                <div className="mt-4 flex gap-2 relative z-10">
                  <button className="flex-1 bg-ink-900/40 hover:bg-ink-900/60 transition-colors text-white text-xs font-bold py-2 rounded-lg backdrop-blur-sm">
                    Recargar
                  </button>
                  <button className="flex-1 bg-white/20 hover:bg-white/30 transition-colors text-white text-xs font-bold py-2 rounded-lg backdrop-blur-sm">
                    Transferir
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: LayoutGrid, label: 'Viajar' },
                  { icon: History,    label: 'Movimientos' },
                  { icon: Shield,     label: 'Bloquear' },
                  { icon: Settings,   label: 'Más' },
                ].map((action, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div className="w-12 h-12 rounded-xl bg-ink-900 border border-ink-800 flex items-center justify-center text-ink-300">
                      <action.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-ink-400 font-medium">{action.label}</span>
                  </div>
                ))}
              </div>

              {/* Recent Activity Mini */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-sm font-bold text-white">Hoy</h3>
                  <span className="text-[10px] text-metro-400 font-medium">Ver todo</span>
                </div>
                <div className="bg-ink-900 border border-ink-800 rounded-xl p-3">
                  <div className="flex justify-between items-center pb-3 border-b border-ink-800">
                    <div className="flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-full bg-ink-800 flex items-center justify-center text-ink-400">
                        <Nfc className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Estación Poblado</p>
                        <p className="text-[10px] text-ink-400">08:42 AM · Línea A</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-white">-$2.950</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <div className="flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-full bg-metro-500/10 text-metro-400 flex items-center justify-center">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Recarga Bancolombia</p>
                        <p className="text-[10px] text-ink-400">Ayer, 18:30 PM</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-metro-400">+$20.000</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Nav */}
            <div className="h-16 bg-ink-900 border-t border-ink-800 flex justify-around items-center px-2 pb-2">
              <NavIcon icon={LayoutGrid} label="Inicio" active />
              <NavIcon icon={Search} label="Rutas" />
              <div className="relative -top-5 w-12 h-12 bg-metro-500 rounded-full flex items-center justify-center shadow-metro border-4 border-ink-950">
                <Nfc className="w-5 h-5 text-black" />
              </div>
              <NavIcon icon={CreditCard} label="Tarjetas" />
              <NavIcon icon={User} label="Perfil" />
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="flex flex-col h-full bg-ink-950">
            <div className="px-5 pt-12 pb-4 bg-ink-900 border-b border-ink-800 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-white" />
              <h2 className="text-base font-bold text-white">Historial de viajes</h2>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6 no-scrollbar">
              <div>
                <p className="text-xs font-bold text-ink-400 mb-3 uppercase tracking-wider">Hoy</p>
                <div className="space-y-3">
                  <HistoryItem title="Est. Industriales" subtitle="17:45 PM · Línea A" amount="-$2.950" />
                  <HistoryItem title="Est. San Antonio" subtitle="17:20 PM · Transbordo B" amount="$0" />
                  <HistoryItem title="Est. Estadio" subtitle="17:05 PM · Línea B" amount="-$2.950" />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-ink-400 mb-3 uppercase tracking-wider">Ayer</p>
                <div className="space-y-3">
                  <HistoryItem title="Recarga PSE" subtitle="20:15 PM" amount="+$50.000" pos />
                  <HistoryItem title="Est. Poblado" subtitle="08:10 AM · Línea A" amount="-$2.950" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'enroll':
        return (
          <div className="flex flex-col h-full bg-ink-950">
            <div className="px-5 pt-12 pb-4 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-white" />
              <h2 className="text-base font-bold text-white">Vincular Tarjeta</h2>
            </div>
            <div className="flex-1 px-5 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 rounded-full bg-metro-500/10 border border-metro-500/30 flex items-center justify-center mb-6">
                <Nfc className="w-10 h-10 text-metro-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Acerca tu Cívica</h3>
              <p className="text-sm text-ink-400 mb-8">
                Mantén tu tarjeta Cívica física contra la parte posterior de tu teléfono para vincularla a tu cuenta mediante NFC.
              </p>
              <div className="w-full h-1 bg-ink-900 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-metro-500"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <p className="text-xs text-ink-500 mt-4">Buscando tarjeta...</p>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="flex flex-col h-full bg-ink-950">
            <div className="px-5 pt-12 pb-4 bg-ink-900 border-b border-ink-800 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-white" />
              <h2 className="text-base font-bold text-white">Seguridad</h2>
            </div>
            <div className="flex-1 p-5 space-y-4">
              <div className="bg-metro-500/10 border border-metro-500/30 rounded-xl p-4 flex items-start gap-3">
                <Shield className="w-5 h-5 text-metro-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-metro-400">Cuenta Segura</p>
                  <p className="text-xs text-metro-400/80 mt-1">Tu cuenta está protegida con Autenticación de Dos Factores (2FA).</p>
                </div>
              </div>
              <div className="bg-ink-900 rounded-xl border border-ink-800 overflow-hidden">
                <SettingRow title="Face ID / Touch ID" subtitle="Requerir biometría para abrir app" toggle on />
                <SettingRow title="Ocultar Saldo" subtitle="Difuminar saldo en inicio" toggle />
                <SettingRow title="Alertas de viaje" subtitle="Notificar cada cobro" toggle on />
              </div>
              <p className="text-xs text-ink-500 px-2 uppercase font-bold tracking-wider mt-6 mb-2">Dispositivos vinculados</p>
              <div className="bg-ink-900 rounded-xl border border-ink-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-ink-400" />
                    <div>
                      <p className="text-sm font-bold text-white">iPhone 13 Pro</p>
                      <p className="text-xs text-metro-400">Este dispositivo · Activo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col h-full bg-ink-950 items-center justify-center p-6 text-center">
            <Eye className="w-12 h-12 text-ink-700 mb-4" />
            <h3 className="text-lg font-bold text-white">Pantalla conceptual</h3>
            <p className="text-sm text-ink-400 mt-2">
              Selecciona una opción del panel para explorar los diferentes módulos de la aplicación.
            </p>
          </div>
        );
    }
  };

  return (
    <section ref={ref} id="ux" className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="tag-mono">Experiencia de Usuario</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
            Interfaz moderna y centrada en el pasajero
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed">
            Explora un prototipo conceptual de cómo luciría y se comportaría la aplicación Cívica Digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Menu Selector (Desktop Left / Mobile Top) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring' as const, stiffness: 60, damping: 20, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-2 flex flex-col gap-2 order-2 lg:order-1"
          >
            {SCREENS.map((screen) => {
              const Icon = screen.icon;
              const isActive = activeScreen === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-metro-500/10 border-metro-500/30 shadow-metro' 
                      : 'bg-ink-950/50 border-ink-800/50 hover:bg-ink-900'
                  } border`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? 'bg-metro-500 text-black shadow-glow-green' : 'bg-ink-800 text-ink-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`font-bold ${isActive ? 'text-white' : 'text-ink-400'}`}>
                    {screen.name}
                  </span>
                </button>
              );
            })}
            
            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-400/90 leading-relaxed">
                <strong>Nota:</strong> Estas interfaces son maquetas conceptuales (UI/UX) creadas para ilustrar la propuesta y no representan un producto final.
              </p>
            </div>
          </motion.div>

          {/* Interactive Phone (Desktop Right / Mobile Bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: 'spring' as const, stiffness: 80, damping: 20, delay: 0.4 }}
            className="lg:col-span-6 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-[300px] h-[600px] rounded-[3rem] border-[6px] border-ink-800 bg-black p-1 shadow-ink-lg">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-ink-800 rounded-b-3xl z-20" />
              
              {/* Screen container */}
              <div className="relative w-full h-full bg-ink-950 rounded-[2.5rem] overflow-hidden">
                {/* OS Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 z-10 flex justify-between items-center px-6 pt-2">
                  <span className="text-[11px] font-mono text-white font-medium">9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Signal className="w-3.5 h-3.5 text-white" />
                    <div className="w-5 h-2.5 border border-white/80 rounded-sm p-[1px]">
                      <div className="w-3/4 h-full bg-white rounded-[1px]" />
                    </div>
                  </div>
                </div>
                
                {/* Dynamic Screen Content */}
                <div className="w-full h-full pt-6">
                  {renderScreen()}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Helper components for the phone UI
function UserIcon() { return <User className="w-4 h-4 text-metro-400" />; }
function User(props:any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>; }
function NavIcon({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className={`w-5 h-5 ${active ? 'text-metro-400' : 'text-ink-500'}`} />
      <span className={`text-[9px] font-medium ${active ? 'text-metro-400' : 'text-ink-500'}`}>{label}</span>
    </div>
  );
}
function HistoryItem({ title, subtitle, amount, pos }: { title: string; subtitle: string; amount: string; pos?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 rounded-xl bg-ink-900 border border-ink-800 flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-ink-500" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">{title}</p>
          <p className="text-[11px] text-ink-400">{subtitle}</p>
        </div>
      </div>
      <span className={`text-sm font-bold ${pos ? 'text-metro-400' : 'text-white'}`}>{amount}</span>
    </div>
  );
}
function SettingRow({ title, subtitle, toggle, on }: { title: string; subtitle: string; toggle?: boolean; on?: boolean }) {
  return (
    <div className="flex justify-between items-center p-4 border-b border-ink-800 last:border-0">
      <div>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="text-[11px] text-ink-400 mt-0.5">{subtitle}</p>
      </div>
      {toggle && (
        <div className={`w-10 h-6 rounded-full p-1 transition-colors ${on ? 'bg-metro-500' : 'bg-ink-800'}`}>
          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${on ? 'translate-x-4 shadow-sm' : 'translate-x-0'}`} />
        </div>
      )}
    </div>
  );
}
