import { Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const facilities = [
  {
    id: 1,
    title: "Restoran & Barlar",
    description: "Türk ve Dünya mutfağından seçkin lezzetler, gün boyu serinletici içecekler sunan barlar.",
    imageText: "Restoran Görseli",
    image: "restoran-bar.jpg",
    video: null
  },
  {
    id: 2,
    title: "Bar & Deniz",
    description: "Deniz manzarası eşliğinde, gün boyu serinletici içecekler ve keyifli dinlenme alanları.",
    imageText: "Bar ve Deniz Görseli",
    image: "bar-ve-deniz.jpg",
    video: null
  },
  {
    id: 3,
    title: "Spa & Wellness",
    description: "Masaj salonları, Türk hamamı, sauna ve tam donanımlı fitness merkezi.",
    imageText: "Spa Merkezi Görseli",
    image: "spa-wellness.jpg",
    video: null
  },
  {
    id: 4,
    title: "Toplantı & Etkinlik",
    description: "İş toplantıları ve özel etkinlikleriniz için tam donanımlı konferans salonu.",
    imageText: "Toplantı Salonu Görseli",
    image: "toplanti-etkinlik.jpg",
    video: null
  },
  {
    id: 5,
    title: "Çocuk Kulübü",
    description: "Minik misafirlerimiz için eğitici ve eğlenceli aktiviteler, özel oyun alanları.",
    imageText: "Çocuk Kulübü Görseli",
    image: "cocuk-kulubu.jpg",
    video: null
  }
];

export default function Facilities() {
  const { isEnglish } = useLanguage();

  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="mb-2 text-blue-600 font-semibold tracking-wider uppercase text-sm">
              {isEnglish ? 'Our Facilities' : 'Hizmetlerimiz'}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              {isEnglish ? 'Exclusive Hotel Facilities' : 'Ayrıcalıklı Tesis İmkanları'}
            </h2>
            <p className="text-gray-600">
              {isEnglish
                ? 'We have considered every detail to make your holiday unforgettable. We are at your service with a wide range of activities and a commitment to quality.'
                : 'Tatilinizi unutulmaz kılmak için her detayı düşündük. Zengin aktivite seçeneklerimiz ve kaliteli hizmet anlayışımızla hizmetinizdeyiz.'}
            </p>
          </div>
          <button className="whitespace-nowrap px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-sm text-sm font-medium">
            {isEnglish ? 'View All Facilities' : 'Tüm Hizmetleri Gör'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div
                className="group relative overflow-hidden rounded-sm bg-gray-100"
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
              </div>

              {facility.id === 5 && (
                <a
                  className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900"
                  href={`${import.meta.env.BASE_URL}?sayfa=diger-gorseller`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {isEnglish ? 'More Images' : 'Diğer Görseller'}
                </a>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
