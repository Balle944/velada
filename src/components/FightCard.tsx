import React from 'react';
import { Link } from 'react-router-dom';
import { Fight } from '../types';
import { motion } from 'framer-motion';
import { getFighterById } from '../data/fighters';

interface FightCardProps {
  fight: Fight;
  index: number;
}

const FightCard: React.FC<FightCardProps> = ({ fight, index }) => {
  const fighter1 = getFighterById(fight.fighter1Id);
  const fighter2 = getFighterById(fight.fighter2Id);
  
  if (!fighter1 || !fighter2) return null;
  
  const isEven = index % 2 === 0;
  const borderClass = isEven ? 'neon-border-blue' : 'neon-border-pink';
  const glowClass = isEven ? 'shadow-neon-blue' : 'shadow-neon-pink';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`cyber-card ${borderClass} hover:${glowClass} glitch-effect group`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-cyber-dark">
            <img 
              src={fighter1.imageUrl} 
              alt={fighter1.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:ml-4 text-center md:text-left mt-2 md:mt-0">
            <h3 className="font-cyber text-xl">{fighter1.name}</h3>
            <p className="text-sm opacity-70">{fighter1.country}</p>
            {fighter1.record && (
              <p className="text-xs font-cyber mt-1">Récord: {fighter1.record}</p>
            )}
          </div>
        </div>
        
        <div className="my-4 md:my-0 md:mx-4">
          <span className={`font-cyber text-2xl ${isEven ? 'text-neon-blue' : 'text-neon-pink'}`}>VS</span>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row md:justify-end items-center md:items-start">
          <div className="md:mr-4 text-center md:text-right mt-2 md:mt-0 order-2 md:order-1">
            <h3 className="font-cyber text-xl">{fighter2.name}</h3>
            <p className="text-sm opacity-70">{fighter2.country}</p>
            {fighter2.record && (
              <p className="text-xs font-cyber mt-1">Récord: {fighter2.record}</p>
            )}
          </div>
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-cyber-dark order-1 md:order-2">
            <img 
              src={fighter2.imageUrl} 
              alt={fighter2.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="text-sm text-center mb-4">{fight.description}</p>
        
        {fight.isMainEvent && (
          <div className="text-center mb-4">
            <span className="inline-block bg-neon-pink/20 text-neon-pink text-xs font-cyber px-3 py-1 rounded-full">
              COMBATE PRINCIPAL
            </span>
          </div>
        )}
        
        <Link 
          to={`/fight/${fight.id}`}
          className={`cyber-btn ${isEven ? 'cyber-btn-blue' : 'cyber-btn-pink'} w-full text-center`}
        >
          VER ENFRENTAMIENTO
        </Link>
      </div>
    </motion.div>
  );
};

export default FightCard;