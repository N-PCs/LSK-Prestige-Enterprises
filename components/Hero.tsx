import React, { useRef, useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Add breathing animation style
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes breathing {
        0%, 100% {
          transform: scale(1.05);
        }
        50% {
          transform: scale(1.15);
        }
      }
      
      .breathing-effect {
        animation: breathing 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Apply breathing effect on mobile
    if (isMobile) {
      image.classList.add('breathing-effect');
      return;
    }

    // Remove breathing effect and apply mouse effects for desktop
    image.classList.remove('breathing-effect');
    image.style.willChange = 'transform';

    const handleMouseMove = (e: MouseEvent) => {
      window.requestAnimationFrame(() => {
        if (!isHovering) return;
        
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        // Parallax effect with rotation (gyroscopic tilt)
        const moveX = (x - 0.5) * 30; // ±15px movement
        const moveY = (y - 0.5) * 30; // ±15px movement

        // Subtle rotation for 3D effect
        const rotateY = (x - 0.5) * 5; // ±2.5 degrees
        const rotateX = (0.5 - y) * 5; // ±2.5 degrees

        // Apply all transforms directly to DOM
        image.style.transform = `
          scale(1.1)
          translate(${moveX}px, ${moveY}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
        image.style.transition = 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)';
      });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      image.style.scale = '1.1';
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Reset to original state
      image.style.transform = 'scale(1.05)';
      image.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, isHovering]);

  return (
    <header
      ref={containerRef}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden cursor-default group"
      id="home"
    >
      <img
        ref={imageRef}
        alt="Aerial View Of Beach"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/images/aerial-view-beachhouse.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
          Discover Modern And <br />
          <span className="text-primary italic">Exquisite</span> Living
        </h1>
        <div className="w-16 sm:w-20 h-[2px] bg-primary mx-auto mb-8 sm:mb-10"></div>
        <p className="text-white/80 text-base sm:text-lg md:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          Curating high-quality developments for the discerning lifestyle. Where
          architectural integrity meets refined elegance.
        </p>
      </div>
    </header>
  );
};

export default Hero;
