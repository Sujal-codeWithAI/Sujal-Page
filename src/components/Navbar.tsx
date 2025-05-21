
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style based on scroll position
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="font-bold text-xl">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-portfolio-bright-blue">Sujal</span> R Raut
          </ScrollLink>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`nav-item cursor-pointer hover:text-portfolio-bright-blue transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-portfolio-bright-blue active' : ''
                  }`}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
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
