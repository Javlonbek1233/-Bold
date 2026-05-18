import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Hypercars Delivered', value: 450, suffix: '+' },
  { label: 'Nürburgring Records', value: 12, suffix: '' },
  { label: 'Exotic Brands', value: 18, suffix: '' },
  { label: 'Top Speed Achieved', value: 531, suffix: ' KM/H' },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    stats.forEach((_, i) => {
      const element = document.getElementById(`stat-value-${i}`);
      if (!element) return;

      const obj = { val: 0 };
      const targetVal = stats[i].value;

      gsap.to(obj, {
        val: targetVal,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        onUpdate: () => {
          element.textContent = Math.floor(obj.val).toString();
        },
      });
    });

    gsap.from('.stat-card', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card group flex flex-col items-start border-l border-white/10 pl-6 text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mb-2">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span 
                  id={`stat-value-${index}`}
                  className="font-mono text-4xl font-bold tracking-tight text-white sm:text-5xl"
                >
                  0
                </span>
                <span className="text-sm font-bold text-neon-blue">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
