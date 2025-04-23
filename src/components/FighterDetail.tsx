import React from 'react';
import { Fighter } from '../types';
import { motion } from 'framer-motion';

interface FighterDetailProps {
  fighter: Fighter;
  position: 'left' | 'right';
}

const FighterDetail: React.FC<FighterDetailProps> = ({ fighter, position }) => {
  const isLeft = position === 'left';
  const containerClass = isLeft 
    ? 'text-right items-end' 
    : 'text-left items-start';
  
  const glowColor = isLeft ? 'text-neon-blue' : 'text-neon-pink';
  const borderColor = isLeft ? 'neon-border-blue' : 'neon-border-pink';
  
  return (
    <motion.div 
      className={`flex flex-col ${containerClass} z-10`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div 
        className={`w-56 h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 relative overflow-hidden ${borderColor} rounded-lg mb-4`}
      >
        <img 
          src={fighter.imageUrl} 
          alt={fighter.name} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isLeft ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-cyber-black/80`}></div>
      </div>
      
      <h3 className={`font-cyber text-2xl md:text-3xl mb-2 ${glowColor}`}>
        {fighter.name}
      </h3>
      
      {fighter.alias && (
        <p className="text-sm opacity-80 mb-2 font-cyber">"{fighter.alias}"</p>
      )}
      
      <p className="text-base mb-2">{fighter.country}</p>
      
      <div className={`cyber-card ${borderColor} max-w-xs`}>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="opacity-70">Edad</p>
            <p className="font-cyber">{fighter.age} años</p>
          </div>
          <div>
            <p className="opacity-70">Altura</p>
            <p className="font-cyber">{fighter.height} cm</p>
          </div>
          <div>
            <p className="opacity-70">Peso</p>
            <p className="font-cyber">{fighter.weight} kg</p>
          </div>
          <div>
            <p className="opacity-70">Estilo</p>
            <p className="font-cyber">{fighter.style || 'N/A'}</p>
          </div>
        </div>
        {fighter.record && (
          <div className="mt-3 pt-3 border-t border-cyber-light">
            <p className="opacity-70">Récord</p>
            <p className="font-cyber">{fighter.record}</p>
          </div>
        )}
      </div>
      
      {fighter.quote && (
        <p className="mt-4 italic text-sm opacity-90 max-w-xs">"{fighter.quote}"</p>
      )}
    </motion.div>
  );
};

export default FighterDetail;