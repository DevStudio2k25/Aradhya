import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TextParallax = ({ text }: { text: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <div className="text-parallax-container" ref={container}>
      <motion.div style={{ x: x1 }} className="parallax-line">
        {Array(10).fill(text).map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="parallax-line outline">
        {Array(10).fill(text).map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </motion.div>

      <style>{`
        .text-parallax-container {
          overflow: hidden;
          padding: 50px 0;
          user-select: none;
          pointer-events: none;
          opacity: 0.05;
        }
        .parallax-line {
          display: flex;
          white-space: nowrap;
          gap: 100px;
          font-family: var(--font-serif);
          font-size: 15rem;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1;
        }
        .parallax-line.outline span {
          -webkit-text-stroke: 2px var(--text-dark);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default TextParallax;
