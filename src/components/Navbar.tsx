import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const { language, isEnglish, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

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
        <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="Gölköy Turizm Türkbükü ana sayfa">
          <img
            src={`${import.meta.env.BASE_URL}images/golkoy-yasam-turkbuku-logo.webp`}
            alt="Gölköy Turizm Türkbükü amblemi"
            className="h-12 w-12 shrink-0 rounded-full object-cover shadow-md ring-1 ring-white/30 md:h-14 md:w-14"
          />
          <div className={`whitespace-nowrap font-serif text-base font-semibold tracking-wide sm:text-lg md:text-xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            Gölköy Turizm Türkbükü
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className={link.href === '#about' ? 'relative' : undefined}>
                {link.href === '#about' ? (
                  <button
                    type="button"
                    onClick={() => setIsAboutMenuOpen((open) => !open)}
                    aria-expanded={isAboutMenuOpen}
                    className={`flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-gray-100'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={15}
                      className={`transition-transform ${isAboutMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium hover:text-blue-500 transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-gray-100'
                    }`}
                  >
                    {link.name}
                  </a>
                )}
                {link.href === '#about' && (
                  <div className={`${isAboutMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full z-50 pt-3 transition-all duration-200`}>
                    <div className="w-56 rounded-sm border border-gray-100 bg-white py-2 shadow-lg">
                      <a
                        href="#about"
                        onClick={() => setIsAboutMenuOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        {isEnglish ? 'Bodrum Türkbükü Hotel' : 'Bodrum Türkbükü Otel'}
                      </a>
                      <a
                        href="https://www.golkoyyasamresort.com/"
                        onClick={() => setIsAboutMenuOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        {isEnglish ? 'Rural Tourism Hotel Kastamonu' : 'Kırsal Turizm Otel Kastamonu'}
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
                {link.href === '#about' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsAboutMenuOpen((open) => !open)}
                      aria-expanded={isAboutMenuOpen}
                      className="flex w-full items-center justify-between px-8 py-3 text-left font-medium text-gray-800 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {link.name}
                      <ChevronDown
                        size={17}
                        className={`transition-transform ${isAboutMenuOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isAboutMenuOpen && (
                      <div className="border-l-2 border-blue-200">
                        <a
                          href="#about"
                          className="block py-2.5 pl-12 pr-8 text-sm font-medium text-blue-700 hover:bg-blue-50"
                          onClick={() => {
                            setIsAboutMenuOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {isEnglish ? 'Bodrum Türkbükü Hotel' : 'Bodrum Türkbükü Otel'}
                        </a>
                        <a
                          href="https://www.golkoyyasamresort.com/"
                          className="block py-2.5 pl-12 pr-8 text-sm font-medium text-blue-700 hover:bg-blue-50"
                          onClick={() => {
                            setIsAboutMenuOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {isEnglish ? 'Rural Tourism Hotel Kastamonu' : 'Kırsal Turizm Otel Kastamonu'}
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block px-8 py-3 text-gray-800 hover:bg-gray-50 hover:text-blue-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
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
