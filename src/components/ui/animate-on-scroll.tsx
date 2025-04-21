
import React, { useEffect, useRef, ReactNode } from 'react';

type AnimateOnScrollProps = {
  children: ReactNode;
  animation: string;
  delay?: number;
  threshold?: number;
  className?: string;
};

export function AnimateOnScroll({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animation);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div 
      ref={ref} 
      className={`opacity-0 ${className}`}
      style={{ 
        willChange: 'opacity, transform',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
}

export default AnimateOnScroll;
