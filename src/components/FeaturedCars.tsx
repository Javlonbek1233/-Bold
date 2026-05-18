import { useState, useRef } from 'react';
import { cars } from '../data/cars';
import CarCard from './CarCard';
import { Filter } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function FeaturedCars() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Hypercar', 'Supercar', 'Luxury'];
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredCars = filter === 'All' 
    ? cars 
    : cars.filter(car => car.category === filter);

  useGSAP(() => {
    gsap.from('.car-card-wrapper', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, { dependencies: [filter], scope: gridRef });

  return (
    <section id="showroom" className="py-32 px-6 bg-[#080808]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="flex-1">
            <h2 className="font-display text-6xl font-black italic tracking-tighter uppercase sm:text-[100px] text-white leading-none">
              Curated<br/>
              <span className="text-neon-blue">Legends</span>
            </h2>
            <div className="mt-8 h-1 w-24 bg-neon-blue glow-border-blue" />
          </div>

          <div className="flex items-center gap-2 bg-[#111] p-2 rounded-full border border-white/10 shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-white/40 ml-4 mr-2">Filter</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full ${
                  filter === cat ? 'bg-neon-blue text-black' : 'bg-transparent text-white/60 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <div key={car.id} className="car-card-wrapper">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
