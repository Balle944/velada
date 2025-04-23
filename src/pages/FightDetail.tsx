import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFightById } from '../data/fights';
import { getFighterById } from '../data/fighters';
import FighterDetail from '../components/FighterDetail';

const FightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [voteSubmitted, setVoteSubmitted] = useState<string | null>(null);
  
  const fight = id ? getFightById(id) : null;
  
  if (!fight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Combate no encontrado</p>
      </div>
    );
  }
  
  const fighter1 = getFighterById(fight.fighter1Id);
  const fighter2 = getFighterById(fight.fighter2Id);
  
  if (!fighter1 || !fighter2) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Información de luchadores no disponible</p>
      </div>
    );
  }
  
  const handleVote = (fighterId: string) => {
    setVoteSubmitted(fighterId);
    // In a real app, you would send this vote to an API
  };
  
  const handleViewFighter = (fighterId: string) => {
    navigate(`/fighter/${fighterId}`);
  };
  
  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-neon-blue/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-neon-pink/10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 mt-8 text-center"
        >
          <h1 className="font-cyber mb-4">
            <span className="text-neon-blue animate-glow-blue">ENFRENTAMIENTO</span>
          </h1>
          
          <p className="text-xl opacity-80">
            {fight.description}
          </p>
          
          {fight.isMainEvent && (
            <div className="mt-4">
              <span className="inline-block bg-neon-pink/20 text-neon-pink text-sm font-cyber px-4 py-2 rounded-full">
                COMBATE PRINCIPAL
              </span>
            </div>
          )}
        </motion.div>
        
        {/* Fighters Face-off */}
        <div className="relative my-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-neon-blue via-white to-neon-pink"
          ></motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-16">
            <FighterDetail fighter={fighter1} position="left" />
            
            <motion.div
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <span className="font-cyber text-4xl md:text-6xl text-white animate-pulse-slow">VS</span>
            </motion.div>
            
            <FighterDetail fighter={fighter2} position="right" />
          </div>
        </div>
        
        {/* Fight Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto my-16 cyber-card neon-border-purple"
        >
          <h3 className="font-cyber text-2xl mb-6 text-center">VOTA POR EL GANADOR</h3>
          
          {voteSubmitted ? (
            <div className="text-center">
              <p className="mb-4">
                ¡Has votado por <span className="font-cyber text-neon-purple">{voteSubmitted === fighter1.id ? fighter1.name : fighter2.name}</span>!
              </p>
              <p className="text-sm opacity-70">
                Vuelve el día del evento para ver los resultados
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleVote(fighter1.id)}
                className="cyber-btn-blue flex-1"
              >
                {fighter1.name}
              </button>
              <button
                onClick={() => handleVote(fighter2.id)}
                className="cyber-btn-pink flex-1"
              >
                {fighter2.name}
              </button>
            </div>
          )}
          
          <div className="mt-10 pt-6 border-t border-cyber-light">
            <div className="flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="opacity-70 mb-2">Fecha del combate</p>
                <p className="font-cyber text-xl">26 de julio de 2025</p>
              </div>
              <div>
                <p className="opacity-70 mb-2">Lugar</p>
                <p className="font-cyber text-xl">Estadio La Cartuja, Sevilla</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Fighter Profile Links */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <button 
            onClick={() => handleViewFighter(fighter1.id)}
            className="cyber-btn-blue"
          >
            PERFIL DE {fighter1.name.toUpperCase()}
          </button>
          <button 
            onClick={() => handleViewFighter(fighter2.id)}
            className="cyber-btn-pink"
          >
            PERFIL DE {fighter2.name.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FightDetail;