import { MapPin, Phone, Mail, Map } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">
                H
              </div>
              <div className="font-serif text-xl font-semibold tracking-wide">
                Gölköy Yaşam Türkbükü
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bodrum'un eşsiz güzellikleri içinde, lüks ve konforu bir arada sunan unutulmaz bir tatil deneyimi.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-xs font-bold text-white">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-xs font-bold text-white">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors text-xs font-bold text-white">
                TW
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-serif">Hızlı Bağlantılar</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Odalar & Süitler</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Hizmetler</a></li>
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}?sayfa=diger-gorseller`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href={`${import.meta.env.BASE_URL}?sayfa=sss`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  S.S.S.
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info (Placeholders) */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-serif">İletişim Bilgileri</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <span className="block text-white mb-1">Adres:</span>
                  <span className="italic">[Otel Adresi Buraya Gelecek]</span><br />
                  <span>Bodrum, Muğla / Türkiye</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <span className="block text-white mb-1">Telefon:</span>
                  <span className="italic">[+90 XXX XXX XX XX]</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <span className="block text-white mb-1">E-posta:</span>
                  <span className="italic">[info@oteladi.com.tr]</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-serif">Bültene Kayıt</h4>
            <p className="text-sm text-gray-400 mb-4">
              Özel fırsatlar ve yeniliklerden haberdar olmak için e-posta bültenimize kayıt olun.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-blue-500"
              />
              <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-sm text-sm font-medium transition-colors"
              >
                Kayıt Ol
              </button>
            </form>
          </div>
          
        </div>

        {/* Map Placeholder */}
        <div className="mb-12">
          <div className="w-full h-64 bg-gray-800 rounded-sm relative flex flex-col items-center justify-center text-gray-500 border border-gray-700">
            <Map size={48} className="mb-3 opacity-50" />
            <span className="font-medium tracking-wide">Google Haritalar Konumu (Buraya Eklenecek)</span>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Gölköy Yaşam Türkbükü. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
