import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-video-overlay', {
      opacity: 0,
      duration: 1.5,
    })
    .from('.hero-title span', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out',
    }, '-=0.5')
    .from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from('.hero-cta', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
    }, '-=0.3');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-car-approaching-on-a-highway-at-night-34509-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="hero-video-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-20">
        <div ref={textRef} className="w-full text-left">
          <h1 className="hero-title mb-6 font-display text-[70px] leading-[0.9] font-black italic tracking-tighter uppercase sm:text-[120px] lg:text-[180px]">
            <span className="block">Pure</span>
            <span className="block text-outline -mt-4 sm:-mt-8">Velocity</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-6">
            <p className="hero-subtitle max-w-md text-sm sm:text-base font-light leading-relaxed text-gray-400">
              Beyond engineering, we curate the world's most exclusive automotive masterpieces. Where precision meets unbridled power.
            </p>
            <div className="hero-cta h-[2px] w-32 bg-neon-blue glow-border-blue hidden md:block"></div>
          </div>
          
          <div className="hero-cta flex flex-wrap items-center gap-6 mt-12">
            <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-neon-blue transition-colors">
              Inventory
            </button>
            <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
              Showreel
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll Down</span>
        <div className="h-12 w-px bg-gradient-to-b from-neon-blue to-transparent" />
      </div>
    </section>
  );
}
