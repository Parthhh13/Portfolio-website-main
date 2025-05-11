import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-background shadow py-3' : 'bg-background py-5'} text-foreground`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-portfolio-darkBlue font-heading font-bold text-xl md:text-2xl">
            Parth Pahwa
          </Link>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-white hover:text-portfolio-blue font-medium transition-colors">About</a>
            <a href="#experience" className="text-white hover:text-portfolio-blue font-medium transition-colors">Experience</a>
            <a href="#projects" className="text-white hover:text-portfolio-blue font-medium transition-colors">Projects</a>
            <a href="#education" className="text-white hover:text-portfolio-blue font-medium transition-colors">Education</a>
            <a href="#skills" className="text-white hover:text-portfolio-blue font-medium transition-colors">Skills</a>
            <a href="#contact" className="text-white hover:text-portfolio-blue font-medium transition-colors">Contact</a>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" /> 
              <a href="public\documents\ParthPahwaFResume.pdf" download>Resume</a>
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden animate-fade-in">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-portfolio-darkGray hover:text-portfolio-blue font-medium transition-colors px-4 py-2">About</a>
                <a href="#experience" className="text-portfolio-darkGray hover:text-portfolio-blue font-medium transition-colors px-4 py-2">Experience</a>
                <a href="#projects" className="text-portfolio-darkGray hover:text-portfolio-blue font-medium transition-colors px-4 py-2">Projects</a>
                <a href="#education" className="text-portfolio-darkGray hover:text-portfolio-blue font-medium transition-colors px-4 py-2">Education</a>
                <a href="#skills" className="text-portfolio-darkGray hover:text-portfolio-blue font-medium transition-colors px-4 py-2">Skills</a>
                <a href="#contact" className="text-portfolio-darkGray hover:text-portfolio-blue font-medium transition-colors px-4 py-2">Contact</a>
                <Button className="w-full flex items-center gap-2 justify-center">
                  <Download className="h-4 w-4" /> 
                  <a href="/Portfolio-website-main/documents/ParthPahwaFResume.pdf" download>Resume</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
