
import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
      vx: number;
      vy: number;
    }> = [];

    const shootingStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      opacity: number;
      life: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Create shooting star occasionally
    const createShootingStar = () => {
      if (Math.random() < 0.003 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.3,
          vx: (Math.random() + 2) * 4,
          vy: (Math.random() + 1) * 2,
          length: Math.random() * 80 + 20,
          opacity: 1,
          life: 1,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate regular stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.save();
        ctx.globalAlpha = star.opacity;
        
        // Create gradient for star glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.5, '#ffd700');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Animate shooting stars
      shootingStars.forEach((star, index) => {
        star.x += star.vx;
        star.y += star.vy;
        star.life -= 0.01;
        star.opacity = star.life;

        if (star.life <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        ctx.save();
        ctx.globalAlpha = star.opacity;
        
        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y, 
          star.x - star.vx * star.length / 4, 
          star.y - star.vy * star.length / 4
        );
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.5, '#ffd700');
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.vx * star.length / 4, star.y - star.vy * star.length / 4);
        ctx.stroke();
        
        ctx.restore();
      });

      createShootingStar();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 70%, #1a1a2e 100%)',
      }}
    />
  );
};

export default StarField;
