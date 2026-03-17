import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
}

const BackgroundDecor = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 1}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="gold-dust">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            bottom: '-10px',
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundDecor;
