import { MapPin, Phone, Mail } from 'lucide-react';

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
                  <span>Türkbükü Mahallesi, Liman Caddesi, No: 101</span><br />
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
                  <span>info@golkoyyasamturkbuku.com.tr</span>
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

        {/* Google Maps */}
        <div className="relative mb-12 overflow-hidden rounded-sm">
          <iframe
            title="Gölköy Yaşam Türkbükü Google Haritalar konumu"
            src="https://www.google.com/maps?q=T%C3%BCrkb%C3%BCk%C3%BC%20Mahallesi%2C%20Liman%20Caddesi%2C%20No%3A%20101%2C%20Bodrum%2C%20Mu%C4%9Fla&output=embed"
            className="h-64 w-full rounded-sm border border-gray-700"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute left-1/2 top-[47%] z-10 ml-5 -translate-y-full whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-lg">
            Gölköy Yaşam Türkbükü
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
