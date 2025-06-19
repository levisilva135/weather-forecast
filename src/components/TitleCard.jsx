import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

export default function TiltCard({ children, options, className }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
        ...options,
      });
    }

    return () => tiltRef.current?.vanillaTilt?.destroy(); 
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
