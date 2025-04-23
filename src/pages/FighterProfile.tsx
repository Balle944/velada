import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFighterById } from '../data/fighters';
import { ArrowLeft } from 'lucide-react';

const FighterProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const fighter = id ? getFighterById(id) : null;
  
  if (!fighter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Luchador no encontrado</p>
      </div>
    );
  }
  
  const statsItems = [
    { label: 'Edad', value: `${fighter.age} años` },
    { label: 'Altura', value: `${fighter.height} cm` },
    { label: 'Peso', value: `${fighter.weight} kg` },
    { label: 'País', value: fighter.country },
    { label: 'Estilo', value: fighter.style || 'N/A' },
    { label: 'Récord', value: fighter.record || '0-0' }
  ];
  
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-neon-blue/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-neon-pink/10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-neon-blue hover:text-neon-pink transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span className="ml-2 font-cyber text-sm">VOLVER</span>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Fighter Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="max-w-lg w-full mx-auto aspect-[3/4] rounded-lg overflow-hidden neon-border-purple">
              <img 
                src={fighter.imageUrl} 
                alt={fighter.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
            </div>
            
            {fighter.alias && (
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="inline-block bg-cyber-black/80 text-neon-purple font-cyber px-4 py-2 rounded">
                  "{fighter.alias}"
                </span>
              </div>
            )}
          </motion.div>
          
          {/* Fighter Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="font-cyber text-4xl lg:text-5xl mb-4 text-neon-pink animate-glow-pink">
              {fighter.name}
            </h1>
            
            <p className="text-lg mb-8 opacity-90">
              {fighter.country}
            </p>
            
            {/* Stats */}
            <div className="cyber-card neon-border-blue mb-8">
              <h3 className="font-cyber text-xl mb-6">ESTADÍSTICAS</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {statsItems.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm opacity-70 mb-1">{item.label}</p>
                    <p className="font-cyber text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bio */}
            <div className="cyber-card neon-border-pink">
              <h3 className="font-cyber text-xl mb-4">BIOGRAFÍA</h3>
              <p className="opacity-90 leading-relaxed">
                {fighter.bio}
              </p>
              
              {fighter.quote && (
                <blockquote className="mt-6 pt-6 border-t border-cyber-light">
                  <p className="italic text-neon-purple">"{fighter.quote}"</p>
                </blockquote>
              )}
            </div>
            
            {/* Ready to Fight */}
            <div className="mt-8 text-center">
              <p className="font-cyber text-xl animate-pulse-slow">
                PREPARADO PARA LA VELADA
                <span className="ml-2 text-neon-pink">V</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FighterProfile;