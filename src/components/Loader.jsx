import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = 'unset';
          if (onComplete) onComplete();
        }, 250);
      } else {
        setCount(current);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="simple-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#0e0e10] flex flex-col items-center justify-center select-none"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Minimalist Designer Monogram / Name */}
            <span className="font-mono-label text-xs uppercase tracking-[0.3em] text-[#ffffff] font-medium">
              AVINASH KUMAR
            </span>

            {/* 120px Thin Minimalist Progress Bar */}
            <div className="w-32 h-[1px] bg-[#2e2e33] overflow-hidden relative">
              <div
                className="h-full bg-[#ffffff] transition-all duration-75 ease-out"
                style={{ width: `${count}%` }}
              />
            </div>

            {/* Minimal Counter */}
            <span className="font-mono-label text-[11px] text-[#71717a] tracking-widest">
              {count}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
