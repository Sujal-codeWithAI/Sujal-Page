import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './Logo';

const NAV_ITEMS = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['contact', 'skills', 'projects', 'education', 'about', 'home'];
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 300) {
        setActiveSection('contact');
        return;
      }
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#050d1f]/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <ScrollLink to="home" smooth duration={500} className="cursor-pointer flex items-center gap-2.5 group">
          <Logo className="w-8 h-8" />
          <span className="font-bold text-lg">
            <span className="text-portfolio-bright-blue">Sujal</span>
            <span className="text-white"> Raut</span>
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth
                    duration={500}
                    offset={-80}
                    className="cursor-pointer"
                  >
                    <span className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 block ${
                      isActive
                        ? 'text-white bg-portfolio-bright-blue/15 border border-portfolio-bright-blue/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}>
                      {item}
                      {isActive && (
                        <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-4 h-0.5 bg-portfolio-bright-blue rounded-full" />
                      )}
                    </span>
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#050d1f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <span className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-portfolio-bright-blue bg-portfolio-bright-blue/10 border border-portfolio-bright-blue/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}>
                  {item}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
