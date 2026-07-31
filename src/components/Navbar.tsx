import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const { language, isEnglish, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: isEnglish ? 'Home' : 'Ana Sayfa', href: '#home' },
    { name: isEnglish ? 'About Us' : 'Hakkımızda', href: '#about' },
    { name: isEnglish ? 'Our Rooms' : 'Odalarımız', href: '#rooms' },
    { name: isEnglish ? 'Facilities' : 'Hizmetler', href: '#facilities' },
    { name: isEnglish ? 'Contact' : 'İletişim', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-black/20 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="Gölköy Yaşam Türkbükü ana sayfa">
          <img
            src={`${import.meta.env.BASE_URL}images/golkoy-yasam-turkbuku-logo.webp`}
            alt="Gölköy Yaşam Türkbükü amblemi"
            className="h-12 w-12 shrink-0 rounded-full object-cover shadow-md ring-1 ring-white/30 md:h-14 md:w-14"
          />
          <div className={`whitespace-nowrap font-serif text-base font-semibold tracking-wide sm:text-lg md:text-xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            Gölköy Yaşam Türkbükü
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className={link.href === '#about' ? 'group relative' : undefined}>
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-gray-100'
                  }`}
                >
                  {link.name}
                  {link.href === '#about' && <ChevronDown size={15} />}
                </a>
                {link.href === '#about' && (
                  <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-56 rounded-sm border border-gray-100 bg-white py-2 shadow-lg">
                      <a
                        href="https://www.golkoyyasamresort.com/"
                        className="block px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        {isEnglish ? 'Our Rural Tourism Hotel' : 'Kırsal Turizm Otelimiz'}
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l pl-4 border-gray-400/30">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={isEnglish ? 'Türkçeye geç' : 'Switch to English'}
              className={`flex items-center gap-1 text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>
            <a 
              href="#book" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-sm text-sm font-medium transition-colors"
            >
              {isEnglish ? 'Reservation' : 'Rezervasyon'}
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          aria-label={isMobileMenuOpen ? (isEnglish ? 'Close menu' : 'Menüyü kapat') : (isEnglish ? 'Open menu' : 'Menüyü aç')}
          aria-expanded={isMobileMenuOpen}
          className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block px-8 py-3 text-gray-800 hover:bg-gray-50 hover:text-blue-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.href === '#about' && (
                  <a
                    href="https://www.golkoyyasamresort.com/"
                    className="block border-l-2 border-blue-200 py-2 pl-12 pr-8 text-sm font-medium text-blue-700 hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isEnglish ? 'Our Rural Tourism Hotel' : 'Kırsal Turizm Otelimiz'}
                  </a>
                )}
              </li>
            ))}
            <li className="px-8 py-4 flex flex-col gap-3 border-t mt-2">
              <button type="button" onClick={toggleLanguage} className="flex items-center gap-2 text-gray-700">
                <Globe size={18} />
                {isEnglish ? 'Language (EN)' : 'Dil Seçimi (TR)'}
              </button>
              <a 
                href="#book" 
                className="bg-blue-600 text-center text-white px-5 py-3 rounded-sm text-sm font-medium"
              >
                {isEnglish ? 'Book Now' : 'Hemen Rezervasyon Yap'}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
