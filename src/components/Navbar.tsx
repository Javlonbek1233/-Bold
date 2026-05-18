import { useState, useEffect } from 'react';
import { Shield, Search, Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-black/80 py-4 backdrop-blur-xl border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-black italic tracking-tighter text-white">
            VELOCITÀ<span className="text-neon-blue">LUX</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          {['Inventory', 'Exotics', 'Performance', 'Heritage', 'Booking'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-neon-blue"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden items-center gap-6 md:flex">
          <button className="px-6 py-2 border border-neon-blue text-neon-blue text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neon-blue hover:text-black transition-all glow-border-blue">
            Private View
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[-1] bg-black transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex h-full flex-col items-center justify-center gap-8 pt-16 px-6">
          {['Showroom', 'Collections', 'Performance', 'Heritage', 'Inquiry'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-4xl font-bold tracking-tighter text-white hover:text-neon-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="mt-8 flex w-full flex-col gap-4">
            <button className="w-full rounded-xl bg-neon-blue py-4 font-bold text-black">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
