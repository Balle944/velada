import React from 'react';
import FightCard from '../components/FightCard';
import { fights } from '../data/fights';
import { motion } from 'framer-motion';

const Fights: React.FC = () => {
  // Sort fights by order (main event first)
  const sortedFights = [...fights].sort((a, b) => a.order - b.order);
  
  // Separate main event from other fights
  const mainEvent = sortedFights.find(fight => fight.isMainEvent);
  const otherFights = sortedFights.filter(fight => !fight.isMainEvent);
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center font-cyber mb-16 mt-8">
            <span className="text-neon-blue animate-glow-blue">COMBATES</span> CONFIRMADOS
          </h1>
        </motion.div>
        
        {/* Main Event */}
        {mainEvent && (
          <div className="mb-16">
            <h2 className="text-center font-cyber text-neon-pink animate-glow-pink mb-8">
              COMBATE PRINCIPAL
            </h2>
            <div className="max-w-4xl mx-auto">
              <FightCard fight={mainEvent} index={0} />
            </div>
          </div>
        )}
        
        {/* Other Fights */}
        <div>
          <h2 className="text-center font-cyber mb-8">
            CARTELERA COMPLETA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherFights.map((fight, index) => (
              <FightCard key={fight.id} fight={fight} index={index + 1} />
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-neon-blue font-cyber mb-4 animate-pulse-slow">
            26 DE JULIO DE 2025
          </p>
          <p className="opacity-70">
            Estadio La Cartuja, Sevilla
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Fights;