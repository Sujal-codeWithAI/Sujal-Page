import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['contact', 'skills', 'projects', 'education', 'about', 'home'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case for contact section (last section)
      if (scrollPosition + windowHeight >= documentHeight - 300) {
        setActiveSection('contact');
        return;
      }

      // For other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3 font-bold text-xl">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            <Logo className="w-8 h-8" />
          </ScrollLink>
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-portfolio-bright-blue">Sujal</span> R Raut
          </ScrollLink>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={item.toLowerCase() === 'contact' ? -50 : -100}
                    spy={true}
                    className="relative block"
                  >
                    <span className={`nav-link px-2 py-2 cursor-pointer transition-colors duration-300 ${
                      isActive ? 'text-portfolio-bright-blue' : 'text-white hover:text-portfolio-bright-blue'
                    }`}>
                      {item}
                    </span>
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-bright-blue transform transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{
                        transformOrigin: isActive ? 'left' : 'right'
                      }}
                    />
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" className="text-portfolio-bright-blue">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
