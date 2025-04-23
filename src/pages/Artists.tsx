import React from 'react';
import { motion } from 'framer-motion';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/artists';

const Artists: React.FC = () => {
  // Separate confirmed and unconfirmed artists
  const pastArtists = artists.filter(artist => artist.pastParticipant);
  const upcomingArtists = artists.filter(artist => !artist.pastParticipant);
  
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-neon-purple/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-neon-blue/10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center font-cyber mb-6 mt-8">
            <span className="text-neon-purple animate-glow-pink">ARTISTAS</span> INVITADOS
          </h1>
          
          <p className="text-center text-xl max-w-3xl mx-auto mb-16 opacity-80">
            La música es parte esencial de La Velada del Año. Descubre los artistas que formarán parte de esta experiencia histórica.
          </p>
        </motion.div>
        
        {/* Upcoming Artists */}
        <div className="mb-20">
          <h2 className="text-center font-cyber mb-8">
            <span className="text-neon-pink">VELADA V</span> - POR CONFIRMAR
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {upcomingArtists.map((artist, index) => (
              <ArtistCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-neon-blue font-cyber animate-pulse-slow">
              PRÓXIMAMENTE
            </p>
            <p className="mt-2 opacity-70">
              Los artistas para La Velada V serán anunciados en los próximos meses
            </p>
          </motion.div>
        </div>
        
        {/* Past Artists */}
        <div className="my-20">
          <h2 className="text-center font-cyber mb-8">
            ARTISTAS DE <span className="text-neon-blue">EDICIONES ANTERIORES</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pastArtists.map((artist, index) => (
              <ArtistCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
        </div>
        
        {/* Music Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="my-16 max-w-4xl mx-auto cyber-card neon-border-purple"
        >
          <h3 className="font-cyber text-2xl mb-6 text-center">EL SONIDO DE LA VELADA</h3>
          
          <p className="text-center opacity-80 mb-8">
            La Velada del Año no sería lo mismo sin la música que hace vibrar al estadio. Cada año, los mejores artistas de la escena urbana se unen para crear momentos inolvidables.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "ANTES DE LOS COMBATES",
                description: "Calentando el ambiente y generando expectación"
              },
              {
                title: "DURANTE EL EVENTO",
                description: "Actuaciones entre combates para mantener la energía"
              },
              {
                title: "CIERRE ESPECTACULAR",
                description: "Gran concierto final con todos los artistas"
              }
            ].map((item, index) => (
              <div key={index}>
                <h4 className="font-cyber text-neon-purple mb-2">{item.title}</h4>
                <p className="opacity-70">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Artists;