import { Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const getRoomTypes = (isEnglish: boolean) => [
  {
    id: 1,
    name: isEnglish ? "Standard Room" : "Standart Oda",
    description: "Şehir veya bahçe manzaralı, konforlu ve şık tasarımlı odalarımız.",
    size: "24 m²",
    capacity: "2 Yetişkin",
    image: "standart-oda.jpg",
    features: ["Ücretsiz Wi-Fi", "Klima", "Mini Bar", "Kasa"]
  },
  {
    id: 2,
    name: isEnglish ? "Standard Room" : "Standart Oda",
    description: "Eşsiz Bodrum Kalesi ve deniz manzarasına sahip özel tasarım odalar.",
    size: "28 m²",
    capacity: "2 Yetişkin + 1 Çocuk",
    image: "deniz-manzarali-oda.jpg",
    features: ["Deniz Manzarası", "Balkon", "Ücretsiz Wi-Fi", "Klima", "Mini Bar"]
  },
  {
    id: 3,
    name: isEnglish ? "Our Bathrooms" : "Banyolarımız",
    description: "Geniş aileler için ideal, birbirine bağlantılı iki odadan oluşan ferah süitler.",
    size: "45 m²",
    capacity: "4 Yetişkin",
    image: "banyolarimiz.jpg",
    features: ["2 Yatak Odası", "Oturma Alanı", "2 Banyo", "Balkon", "Ücretsiz Wi-Fi"]
  }
];

export default function Rooms() {
  const { isEnglish } = useLanguage();
  const roomTypes = getRoomTypes(isEnglish);
  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="mb-2 text-blue-600 font-semibold tracking-wider uppercase text-sm">
            {isEnglish ? 'Accommodation' : 'Konaklama'}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            {isEnglish ? 'Our Rooms' : 'Odalarımız'}
          </h2>
          <p className="text-gray-600">
            {isEnglish
              ? 'Enjoy Bodrum while feeling at home in our rooms, where exceptional comfort meets modern design. Our rooms are air-conditioned and have Wi-Fi access.'
              : "Eşsiz konfor ve modern tasarımı bir araya getiren odalarımızda, Bodrum'un tadını çıkarırken evinizin rahatlığını hissedeceksiniz. Odalarımız klimalı ve wifi erişimlidir."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <div key={room.id} className="bg-white rounded-sm shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              
              {/* Room Image Placeholder */}
              <div className="min-h-64 bg-gray-200 w-full relative flex items-center justify-center text-gray-400 overflow-hidden">
                <ImageIcon size={40} className="mb-2 opacity-50" />
                <span className="text-sm font-medium absolute bottom-4">{room.name} {isEnglish ? 'Image' : 'Görseli'}</span>
                <img
                  src={`${import.meta.env.BASE_URL}images/${room.image}`}
                  alt={room.name}
                  className="relative z-10 block h-auto w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {room.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
