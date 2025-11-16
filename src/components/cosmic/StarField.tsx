import { useEffect, useRef } from "react";

interface StarFieldProps {
  density?: number;
  className?: string;
}

export const StarField = ({ density = 100, className = "" }: StarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars: Array<{ x: number; y: number; radius: number; opacity: number; speed: number }> = [];
    
    for (let i = 0; i < density; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        star.opacity += star.speed * 0.01;
        if (star.opacity > 1 || star.opacity < 0) {
          star.speed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none ${className}`} />;
};
