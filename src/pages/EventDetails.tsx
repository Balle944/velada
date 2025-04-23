import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import { MapPin, Calendar, Ticket, Tv } from 'lucide-react';

const EventDetails: React.FC = () => {
  const eventInfo = [
    {
      icon: <Calendar className="w-8 h-8 text-neon-blue" />,
      title: "Fecha",
      details: "Sábado 26 de julio de 2025",
      description: "A partir de las 19:00h (horario peninsular español)"
    },
    {
      icon: <MapPin className="w-8 h-8 text-neon-pink" />,
      title: "Lugar",
      details: "Estadio La Cartuja, Sevilla",
      description: "Aforo estimado: más de 60.000 personas"
    },
    {
      icon: <Ticket className="w-8 h-8 text-neon-purple" />,
      title: "Entradas",
      details: "Agotadas",
      description: "Las entradas para este evento están agotadas"
    },
    {
      icon: <Tv className="w-8 h-8 text-neon-blue" />,
      title: "Transmisión",
      details: "Canal de Twitch de Ibai Llanos",
      description: "Transmisión gratuita para todo el mundo"
    }
  ];
  
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-neon-blue/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neon-pink/10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center font-cyber mb-6 mt-8">
            <span className="text-neon-blue animate-glow-blue">DETALLES</span> DEL EVENTO
          </h1>
          
          <p className="text-center text-xl max-w-3xl mx-auto mb-16 opacity-80">
            Todo lo que necesitas saber sobre La Velada del Año V, el evento de boxeo de creadores de contenido más grande del mundo.
          </p>
        </motion.div>
        
        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {eventInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card neon-border-blue glitch-effect"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-cyber text-xl mb-2">{item.title}</h3>
                  <p className="text-lg font-cyber">{item.details}</p>
                  <p className="opacity-70 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stadium Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-16 relative max-w-5xl mx-auto rounded-lg overflow-hidden"
        >
          <img 
            src="/fotos/estadio.jpg" 
            alt="Estadio La Cartuja" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h3 className="font-cyber text-2xl text-neon-pink">Estadio La Cartuja</h3>
            <p className="opacity-80">Sevilla, España</p>
          </div>
        </motion.div>
        
        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="my-16 max-w-4xl mx-auto cyber-card neon-border-purple"
        >
          <h3 className="font-cyber text-2xl mb-6 text-center">CUENTA REGRESIVA</h3>
          <CountdownTimer />
        </motion.div>
        
        {/* Previous Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="my-16 max-w-4xl mx-auto"
        >
          <h2 className="text-center font-cyber mb-8">
            <span className="text-neon-blue">EDICIONES</span> ANTERIORES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[2021, 2022, 2023, 2024].map((year, index) => (
              <div 
                key={year}
                className="cyber-card text-center"
              >
                <h3 className="font-cyber text-2xl mb-2">
                  <span className={index % 2 === 0 ? 'text-neon-blue' : 'text-neon-pink'}>
                    {year}
                  </span>
                </h3>
                <p className="opacity-70">La Velada {year - 2020}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetails;