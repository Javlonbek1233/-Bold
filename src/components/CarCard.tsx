import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { LucideIcon, Zap, Gauge, Timer } from 'lucide-react';
import { Car } from '../data/cars';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !cardRef.current) return;

    const container = containerRef.current;
    const card = cardRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      const rotateX = (y - 0.5) * 20;
      const rotateY = (x - 0.5) * -20;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="perspective-1000 group relative h-[500px] w-full"
    >
      <div
        ref={cardRef}
        className="preserve-3d relative h-full w-full overflow-hidden border border-white/10 bg-[#111] transition-transform duration-500 hover:border-neon-blue/40"
      >
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-neon-blue/10 rounded-full blur-2xl"></div>
        
        {/* Image Section */}
        <div className="h-1/2 w-full overflow-hidden relative">
          <img
            src={car.image}
            alt={car.name}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
        </div>

        {/* Info Section */}
        <div className="p-6 h-1/2 flex flex-col justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-neon-blue font-bold mb-1">
              {car.category}
            </div>
            <h3 className="text-2xl font-bold italic tracking-tight text-white group-hover:text-glow-blue transition-all">
              {car.name}
            </h3>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{car.brand}</p>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between items-end mb-4">
              <span className="font-mono text-xl tracking-tighter sm:text-2xl">{car.price}</span>
              <div className="flex gap-4 text-[10px] uppercase font-medium text-white/40">
                <span>{car.hp} HP</span>
                <span>{car.zeroToSixty}s</span>
              </div>
            </div>
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden group-hover:bg-neon-blue transition-colors">
              <div className="absolute inset-0 bg-neon-blue shadow-[0_0_10px_rgba(0,242,255,0.8)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatItem({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string | number }) {
  return (
    <div className="flex flex-col items-center">
      <Icon size={14} className="mb-1 text-neon-blue" />
      <span className="text-[10px] uppercase tracking-tighter text-gray-500">{label}</span>
      <span className="text-xs font-bold text-white">{value}</span>
    </div>
  );
}
