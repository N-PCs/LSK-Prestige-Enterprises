import React, { useRef, useEffect, useState } from "react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    };
    
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", () => setIsHovering(true));
    container.addEventListener("mouseleave", () => setIsHovering(false));
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", () => setIsHovering(true));
      container.removeEventListener("mouseleave", () => setIsHovering(false));
    };
  }, []);

  // Apply smooth transform animation
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    
    const { x, y } = mousePosition;
    
    if (isHovering) {
      // Parallax effect with rotation (gyroscopic tilt)
      const moveX = (x - 0.5) * 30; // ±15px movement
      const moveY = (y - 0.5) * 30; // ±15px movement
      
      // Subtle rotation for 3D effect
      const rotateY = (x - 0.5) * 5; // ±2.5 degrees
      const rotateX = (0.5 - y) * 5; // ±2.5 degrees
      
      // Apply all transforms
      image.style.transform = `
        scale(1.1)
        translate(${moveX}px, ${moveY}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
      image.style.transition = "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)";
    } else {
      // Reset to original state
      image.style.transform = "scale(1.05)";
      image.style.transition = "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
    }
  }, [mousePosition, isHovering]);

  return (
    <header
      ref={containerRef}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden cursor-default group"
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
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] tracking-tight">
          Discover Modern And <br />
          <span className="text-primary italic">Exquisite</span>{" "}
          Living
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-10"></div>
        <p className="text-white/80 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          Curating high-quality developments for the discerning lifestyle. Where
          architectural integrity meets refined elegance.
        </p>
      </div>
    </header>
  );
};

export default Hero;