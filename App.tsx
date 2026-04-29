/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Terminal,
  Cpu,
  Menu,
  X,
  Music,
  MapPin,
  Package,
  Hotel
} from 'lucide-react';
# 1. Força o Git a reconhecer a letra maiúscula de verdade
git mv Logistics.tsx Logistics-temp.tsx
git mv Logistics-temp.tsx Logistics.tsx

# 2. Faça o mesmo para os outros que derem erro, ou renomeie todos no código para minúsculo.
# 3. Envie a mudança real para o GitHub
git add .
git commit -m "Ajuste definitivo de maiúsculas"
git push origin main
type Tab = 'vendas' | 'investimentos' | 'logistica' | 'mc' | 'musica' | 'lazer' | 'compras' | 'hospedagem';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('vendas');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const tabs = [
    { id: 'vendas', label: 'VENDAS', icon: Calculator },
    { id: 'investimentos', label: 'INVESTIMENTOS', icon: TrendingUp },
    { id: 'logistica', label: 'LOGÍSTICA', icon: Truck },
    { id: 'mc', label: 'MOTO CLUBE', icon: Shield },
    { id: 'musica', label: 'MÚSICA', icon: Music },
    { id: 'lazer', label: 'LAZER', icon: MapPin },
    { id: 'compras', label: 'COMPRAS PESSOAIS', icon: Package },
    { id: 'hospedagem', label: 'HOSPEDAGEM', icon: Hotel },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'vendas': return <SalesCalculator />;
      case 'investimentos': return <Investments />;
      case 'logistica': return <Logistics />;
      case 'mc': return <MotoClube />;
      case 'musica': return <Musica />;
      case 'lazer': return <Lazer />;
      case 'compras': return <ComprasPessoais />;
      case 'hospedagem': return <Hospedagem />;
      default: return <SalesCalculator />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <LoadingScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <motion.div 
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex flex-col font-mono selection:bg-pm-orange selection:text-black bg-pm-black md:border-4 border-pm-metal relative"
        >
          {/* Background Brand Image */}
          <div 
            className="fixed inset-0 pointer-events-none opacity-5 bg-center bg-no-repeat bg-cover z-0"
            style={{ backgroundImage: 'url("/asset_0.png")' }}
          />
          
          {/* Header / Top Bar */}
          <header className="bg-black px-6 py-[15px] flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 border-b-2 border-[#ff4500]">
            <div className="flex items-center gap-[25px]">
              <div 
                className="w-[85px] h-[85px] rounded-full border-4 border-[#ff4500] flex items-center justify-center bg-[radial-gradient(circle,_#200_0%,_#000_100%)] shadow-[0_0_15px_#ff4500]"
              >
                <span className="pulsar-pirata text-[1.1em] font-[900] tracking-[1px]">
                  PIRATA
                </span>
              </div>
              <h1 className="titulo-moderno">
                PIRATARIA MODERNA
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="flex flex-wrap items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`px-3 py-1 text-[10px] font-bold tracking-widest transition-all relative border ${
                    activeTab === tab.id 
                    ? 'bg-pm-orange text-black border-pm-orange' 
                    : 'text-pm-orange/60 border-pm-metal hover:border-pm-orange hover:text-pm-orange'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <tab.icon size={12} />
                    {tab.label}
                  </span>
                </button>
              ))}
            </nav>

            <div className="hidden md:block text-right">
              <div className="text-sm font-bold">OPERADOR: <span className="text-white">MAX SULIVAN</span></div>
              <div className="text-xs opacity-60 text-pm-fire">NÚCLEO: MOTOR_V15_LOGICA</div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>

          <footer className="flex justify-between items-center bg-pm-orange text-black px-4 py-1 text-[10px] font-bold shadow-[0_-2px_10px_#FF5E0044]">
            <div className="flex gap-4">
              <span>[F1] CALCULAR</span>
              <span>[F2] ATUALIZAR DÓLAR</span>
              <span>[F3] EXPORTAR PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="animate-pulse text-pm-fire">●</span>
              <span className="hidden sm:inline">PIRATARIA_MODERNA_REDE_CONECTADA</span>
              <span className="sm:hidden">CONECTADO</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

