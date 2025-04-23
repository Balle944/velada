import React from 'react';
import { Artist } from '../types';
import { motion } from 'framer-motion';

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, index }) => {
  const isEven = index % 2 === 0;
  const borderClass = isEven ? 'neon-border-blue' : 'neon-border-pink';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`cyber-card ${borderClass} glitch-effect overflow-hidden`}
    >
      <div className="h-48 overflow-hidden relative mb-4">
        <img 
          src={artist.imageUrl} 
          alt={artist.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
        
        {artist.pastParticipant && artist.year && (
          <div className="absolute top-2 right-2 bg-cyber-dark/80 px-3 py-1 rounded-full">
            <p className="text-xs font-cyber">Velada {artist.year - 2020}</p>
          </div>
        )}
      </div>
      
      <h3 className="font-cyber text-xl mb-2">{artist.name}</h3>
      
      {artist.pastParticipant ? (
        <p className="text-sm opacity-70">Artista invitado en La Velada {artist.year}</p>
      ) : (
        <p className="inline-block bg-neon-purple/20 text-neon-purple text-xs font-cyber px-3 py-1 rounded-full">
          PRÓXIMAMENTE
        </p>
      )}
    </motion.div>
  );
};

export default ArtistCard;