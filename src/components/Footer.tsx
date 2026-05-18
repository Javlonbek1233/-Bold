import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-blue font-display font-black text-black text-xl">
                V
              </div>
              <span className="font-display text-2xl font-bold tracking-tighter text-white">
                VELOCITÀ <span className="text-neon-blue">LUX</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Defining the future of automotive luxury and raw power since 1998. Curating worlds finest machines for the most discerning collectors.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <button 
                  key={i} 
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:border-neon-blue hover:text-neon-blue"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Collections</h4>
            <ul className="space-y-4">
              {['Hypercars', 'Grand Tourers', 'Classic Icons', 'Track Monsters', 'Limited Series'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-neon-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['Our Heritage', 'Bespoke Studio', 'Global Network', 'Private Events', 'Newsroom'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-neon-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Stay Ahead</h4>
            <p className="text-sm text-gray-500 mb-6">Receive exclusive first-access to our newest acquisitions.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="vip@velocita.lux"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-blue"
              />
              <button className="bg-neon-blue px-4 py-2 rounded-lg text-black font-bold text-xs uppercase transition-all hover:bg-white">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            © 2026 VELOCITÀ LUXURY AUTOMOTIVE GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-4 flex gap-8 md:mt-0">
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white">Terms of Curatorship</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
