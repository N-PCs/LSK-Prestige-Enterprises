import { header } from 'framer-motion/client';
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
    return () => {
      document.head.removeChild(style);
    };
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
      className="relative min-h-screen pt-20 flex items-center overflow-hidden cursor-default"
      id="home"
    >
      <img
        ref={imageRef}
        alt="Luxury Penthouse Overlooking Ocean"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/images/luxury_penthouse_hero.png"
      />
      {/* Subtle overlay to enhance text readability while maintaining bright, premium view */}
      <div className="absolute inset-0 bg-black/35 dark:bg-black/60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-white mt-12 md:mt-20">
        {/* Left Side: Editorial Serif Heading */}
        <div className="col-span-1 md:col-span-7">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight font-medium">
            Defining the <br />
            <span className="text-[#E06A58] italic font-normal">Legacy</span> of <br />
            Living.
          </h1>
        </div>

      </div>
    </header>
  );
};

export default Hero;
