import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: number;
  duration?: number; // in milliseconds
  suffix?: string;
  id?: string;
}

export default function Counter({ value, duration = 1500, suffix = '', id }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function - outQuad
      const easedProgress = progress * (2 - progress);
      const currentVal = Math.floor(easedProgress * (end - start) + start);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value, duration]);

  return (
    <span 
      id={id || `counter-${Math.random().toString(36).substr(2, 9)}`} 
      ref={elementRef} 
      className="tabular-nums font-sans font-extrabold"
    >
      {count.toLocaleString('id-ID')}{suffix}
    </span>
  );
}
