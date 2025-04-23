import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cyber-stadium bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/70 to-cyber-black/50"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center z-10"
        >
          <h1 className="font-cyber text-5xl md:text-7xl lg:text-8xl mb-6">
            LA VELADA DEL
            <br />
            <span className="text-neon-pink animate-glow-pink">AÑO V</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-2xl mx-auto">
            26 de julio de 2025
            <span className="mx-3">•</span>
            Estadio La Cartuja, Sevilla
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/fights"
              className="cyber-btn-pink text-lg md:text-xl inline-flex items-center justify-center"
            >
              ENTRAR A LA ARENA
              <span className="ml-2 animate-pulse">→</span>
            </Link>
          </motion.div>
          
          <div className="mt-16">
            <CountdownTimer />
          </div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-black to-transparent"></div>
      </section>
      
      {/* Event Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-center font-cyber mb-16">
            <span className="text-neon-blue animate-glow-blue">V</span> AÑOS DE
            <span className="ml-2 text-neon-pink animate-glow-pink">HISTORIA</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "14 LUCHADORES",
                description: "Los mejores creadores de contenido se enfrentan en el ring para demostrar su valía.",
                color: "blue"
              },
              {
                title: "7 COMBATES",
                description: "Una noche épica llena de adrenalina, superación y espectáculo sin precedentes.",
                color: "pink"
              },
              {
                title: "MILLONES DE ESPECTADORES",
                description: "El evento de streaming más grande del mundo hispanohablante vuelve a hacer historia.",
                color: "purple"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`cyber-card neon-border-${item.color}`}
              >
                <h3 className={`font-cyber text-2xl text-neon-${item.color} mb-4`}>
                  {item.title}
                </h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/event"
              className="cyber-btn-blue"
            >
              DETALLES DEL EVENTO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;