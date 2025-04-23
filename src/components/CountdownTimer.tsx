import * as React from 'react';
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const eventDate = new Date('July 26, 2025 20:00:00').getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;
  
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  
  return timeLeft;
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const timeUnits = [
    { label: 'DÍAS', value: timeLeft.days },
    { label: 'HORAS', value: timeLeft.hours },
    { label: 'MINUTOS', value: timeLeft.minutes },
    { label: 'SEGUNDOS', value: timeLeft.seconds }
  ];
  
  return (
    <div className="w-full py-8">
      <h3 className="text-center font-cyber mb-6 uppercase">
        Cuenta Regresiva para
        <span className="text-neon-pink ml-2">La Velada V</span>
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label} 
            className={`cyber-card min-w-[100px] flex flex-col items-center ${
              index % 2 === 0 ? 'neon-border-blue' : 'neon-border-pink'
            }`}
          >
            <span className="font-cyber text-3xl md:text-4xl font-bold">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="font-cyber text-xs md:text-sm mt-2 opacity-70">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;