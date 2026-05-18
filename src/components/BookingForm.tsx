import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function BookingForm() {
  return (
    <section id="inquiry" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Section */}
            <div className="p-8 sm:p-16">
              <h2 className="font-display text-3xl font-extrabold tracking-tighter sm:text-5xl text-white mb-4">
                ACQUIRE YOUR <span className="text-neon-blue">DREAM</span>
              </h2>
              <p className="text-gray-400 mb-10">
                Complete the inquiry below and our dedicated automotive concierge will reach out within 2 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Alexander Vance"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-blue transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="vance@velocita.luxury"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-blue transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Interested Car</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors appearance-none">
                    <option className="bg-zinc-900">Lamborghini Revuelto</option>
                    <option className="bg-zinc-900">Ferrari SF90 Stradale</option>
                    <option className="bg-zinc-900">Rolls Royce Phantom</option>
                    <option className="bg-zinc-900">Other Custom Specification</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-blue transition-colors"
                  ></textarea>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-neon-blue hover:bg-white text-black font-black py-4 rounded-xl transition-all uppercase tracking-widest group">
                  Secure Consultation
                  <Send size={18} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Visual Section */}
            <div className="relative hidden lg:block overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603501092410-0935575514f7?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Showroom Interior" 
                className="h-full w-full object-cover transition-transform duration-10000 hover:scale-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent flex flex-col justify-end p-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
                      <MapPin size={24} className="text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-500">Flagship Showroom</p>
                      <p className="text-lg font-bold text-white">Via dei Supercar 45, Modena, Italy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
                      <Phone size={24} className="text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-500">Concierge Desk</p>
                      <p className="text-lg font-bold text-white">+39 059 23 44 21</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
                      <Mail size={24} className="text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-500">Inquiries</p>
                      <p className="text-lg font-bold text-white">concierge@velocita.luxury</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
