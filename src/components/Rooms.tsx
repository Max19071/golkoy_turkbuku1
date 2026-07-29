import { Image as ImageIcon, Users, Maximize } from 'lucide-react';

const roomTypes = [
  {
    id: 1,
    name: "Standart Oda",
    description: "Şehir veya bahçe manzaralı, konforlu ve şık tasarımlı odalarımız.",
    size: "24 m²",
    capacity: "2 Yetişkin",
    image: "standart-oda.jpg",
    features: ["Ücretsiz Wi-Fi", "Klima", "Mini Bar", "Kasa"]
  },
  {
    id: 2,
    name: "Deniz Manzaralı Oda",
    description: "Eşsiz Bodrum Kalesi ve deniz manzarasına sahip özel tasarım odalar.",
    size: "28 m²",
    capacity: "2 Yetişkin + 1 Çocuk",
    image: "deniz-manzarali-oda.jpg",
    features: ["Deniz Manzarası", "Balkon", "Ücretsiz Wi-Fi", "Klima", "Mini Bar"]
  },
  {
    id: 3,
    name: "Aile Süiti",
    description: "Geniş aileler için ideal, birbirine bağlantılı iki odadan oluşan ferah süitler.",
    size: "45 m²",
    capacity: "4 Yetişkin",
    image: "aile-suiti.jpg",
    features: ["2 Yatak Odası", "Oturma Alanı", "2 Banyo", "Balkon", "Ücretsiz Wi-Fi"]
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="mb-2 text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Konaklama
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Odalar & Süitler
          </h2>
          <p className="text-gray-600">
            Eşsiz konfor ve modern tasarımı bir araya getiren odalarımızda, Bodrum'un tadını çıkarırken evinizin rahatlığını hissedeceksiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <div key={room.id} className="bg-white rounded-sm shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              
              {/* Room Image Placeholder */}
              <div className="min-h-64 bg-gray-200 w-full relative flex items-center justify-center text-gray-400 overflow-hidden">
                <ImageIcon size={40} className="mb-2 opacity-50" />
                <span className="text-sm font-medium absolute bottom-4">{room.name} Görseli</span>
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
                <p className="text-gray-600 text-sm mb-6 h-10">
                  {room.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <Maximize size={16} />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={16} />
                    <span>{room.capacity}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-xs font-semibold uppercase text-gray-400 mb-3 tracking-wider">Özellikler</div>
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-sm">
                        {feature}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-sm">
                        +{room.features.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>

                <a 
                  href="#book" 
                  className="block w-full text-center py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded-sm font-medium text-sm"
                >
                  Detayları İncele
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
