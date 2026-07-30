import { ChevronDown, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  const heroImage = `${import.meta.env.BASE_URL}images/ana-gorsel.jpg`;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-200">
      {/* Fallback shown until an image is uploaded */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-300">
        <ImageIcon size={64} className="mb-4 opacity-50" />
        <span className="text-lg font-medium opacity-70 uppercase tracking-widest">Ana Görsel Alanı</span>
      </div>

      <img
        src={heroImage}
        alt="Gölköy Yaşam Resort"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      
      {/* Overlay to ensure text readability if an actual image was here */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">
          Bodrum'da Ayrıcalıklı Bir Tatil
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Eşsiz Bodrum manzarası eşliğinde, unutulmaz anılar biriktireceğiniz lüks ve konforlu bir konaklama deneyimi.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#rooms" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-sm font-medium transition-all duration-300"
          >
            Odaları Keşfet
          </a>
          <a 
            href="#book" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm font-medium transition-colors duration-300 shadow-lg"
          >
            Rezervasyon Yap
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 md:bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
