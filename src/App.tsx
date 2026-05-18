import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeaturedCars from './components/FeaturedCars';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-[#050505]">
        {/* Glow Effects */}
        <div className="fixed top-0 left-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-neon-blue/5 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-neon-purple/5 blur-[150px]" />
        </div>

        <Navbar />
        
        <main>
          <Hero />
          
          <div className="bg-black py-12 border-y border-white/5">
            <Stats />
          </div>

          <FeaturedCars />
          
          {/* Vision/Quote Section */}
          <section className="py-60 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)]" />
            <div className="mx-auto max-w-5xl relative z-10">
              <h2 className="font-display text-4xl font-black italic tracking-tighter text-white sm:text-6xl lg:text-8xl uppercase leading-[0.8]">
                 Driven By <br/>
                <span className="text-outline">Obsession</span>
              </h2>
              <div className="mt-16 flex flex-col items-center">
                <div className="h-0.5 w-24 bg-neon-blue shadow-[0_0_15px_#00f2ff]" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.6em] text-white/40">The V-Lux Philosophy</p>
              </div>
            </div>
          </section>

          <BookingForm />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

