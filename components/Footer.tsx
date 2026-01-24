
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-28 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 border border-primary rotate-45 flex items-center justify-center">
              <span className="rotate-[-45deg] font-display font-bold text-xs">LSK</span>
            </div>
            <div>
              <span className="text-xl font-display font-bold tracking-tight block leading-none">LSK PRESTIGE</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-gray-500">Real Estate Developers</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">
            Architecting the future of luxury living through innovation, integrity, and timeless design. Your sanctuary, our legacy.
          </p>
          <div className="flex gap-6">
            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
              <a key={social} href="#" className="text-gray-600 hover:text-primary transition-all">
                <span className="material-icons-outlined text-xl">public</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg italic text-primary mb-10 tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            {['Home', 'Properties', 'Services', 'Our Team', 'Privacy'].map((link) => (
              <li key={link}>
                <a className="hover:text-primary transition-all flex items-center gap-3 group" href={`#${link.toLowerCase()}`}>
                  <span className="w-4 h-[1px] bg-gray-800 group-hover:bg-primary transition-all"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg italic text-primary mb-10 tracking-widest">Connect</h4>
          <ul className="space-y-8 text-sm text-gray-400 font-light">
            <li className="flex items-start gap-4">
              <span className="material-icons-outlined text-primary text-xl">mail</span>
              <span className="hover:text-white transition-colors cursor-pointer">concierge@lskprestige.com</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-outlined text-primary text-xl">call</span>
              <span className="hover:text-white transition-colors cursor-pointer">+91 9529 069 266</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-icons-outlined text-primary text-xl">location_on</span>
              <span className="hover:text-white transition-colors">Prestige Towers, Suite 500 <br/>Mumbai, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg italic text-primary mb-10 tracking-widest">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed font-light">
            Join our exclusive list for early access to our upcoming developments.
          </p>
          <div className="relative group border-b border-gray-800 focus-within:border-primary transition-all pb-2">
            <input 
              className="bg-transparent border-none rounded-none text-xs w-full py-2 px-0 focus:ring-0 text-white placeholder-gray-700 font-bold uppercase tracking-widest" 
              placeholder="Your Email" 
              type="email"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-all">
              <span className="material-icons-outlined text-sm">north_east</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-semibold">
          © 2024 LSK Prestige Real Estate. Crafted for Excellence.
        </div>
        <div className="flex gap-10 text-[9px] text-gray-700 uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
