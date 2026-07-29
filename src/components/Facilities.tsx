import { Image as ImageIcon, Utensils, Waves, Sparkles, Briefcase, Baby } from 'lucide-react';

const facilities = [
  {
    id: 1,
    title: "Restoran & Barlar",
    description: "Türk ve Dünya mutfağından seçkin lezzetler, gün boyu serinletici içecekler sunan barlar.",
    icon: <Utensils size={24} />,
    imageText: "Restoran Görseli",
    image: null,
    video: "restoran-bar.mp4"
  },
  {
    id: 2,
    title: "Bar & Deniz",
    description: "Deniz manzarası eşliğinde, gün boyu serinletici içecekler ve keyifli dinlenme alanları.",
    icon: <Waves size={24} />,
    imageText: "Bar ve Deniz Görseli",
    image: "bar-ve-deniz.jpg",
    video: null
  },
  {
    id: 3,
    title: "Spa & Wellness",
    description: "Masaj salonları, Türk hamamı, sauna ve tam donanımlı fitness merkezi.",
    icon: <Sparkles size={24} />,
    imageText: "Spa Merkezi Görseli",
    image: null,
    video: null
  },
  {
    id: 4,
    title: "Toplantı & Etkinlik",
    description: "İş toplantıları ve özel etkinlikleriniz için tam donanımlı konferans salonu.",
    icon: <Briefcase size={24} />,
    imageText: "Toplantı Salonu Görseli",
    image: null,
    video: null
  },
  {
    id: 5,
    title: "Çocuk Kulübü",
    description: "Minik misafirlerimiz için eğitici ve eğlenceli aktiviteler, özel oyun alanları.",
    icon: <Baby size={24} />,
    imageText: "Çocuk Kulübü Görseli",
    image: null,
    video: null
  }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="mb-2 text-blue-600 font-semibold tracking-wider uppercase text-sm">
              Hizmetlerimiz
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Ayrıcalıklı Tesis İmkanları
            </h2>
            <p className="text-gray-600">
              Tatilinizi unutulmaz kılmak için her detayı düşündük. Zengin aktivite seçeneklerimiz ve kaliteli hizmet anlayışımızla hizmetinizdeyiz.
            </p>
          </div>
          <button className="whitespace-nowrap px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-sm text-sm font-medium">
            Tüm Hizmetleri Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={facility.id} 
              className={`group relative overflow-hidden rounded-sm bg-gray-100 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={facility.video ? undefined : { minHeight: '300px' }}
            >
              {/* Facility Image Placeholder */}
              <div className="absolute inset-0 bg-gray-300 flex flex-col items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-700">
                <ImageIcon size={48} className="mb-2 opacity-40" />
                <span className="font-medium tracking-wide uppercase text-sm opacity-60">
                  {facility.imageText}
                </span>
              </div>

              {facility.image && (
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={`${import.meta.env.BASE_URL}images/${facility.image}`}
                  alt={facility.title}
                />
              )}

              {facility.video && (
                <video
                  className="relative mx-auto block h-auto w-[360px] max-w-full object-contain bg-black"
                  src={`${import.meta.env.BASE_URL}videos/${facility.video}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${facility.title} videosu`}
                />
              )}
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-white">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{facility.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
