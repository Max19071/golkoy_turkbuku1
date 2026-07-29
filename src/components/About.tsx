export default function About() {
  const aboutImage = `${import.meta.env.BASE_URL}images/hakkimizda.jpg`;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="mb-2 text-blue-600 font-semibold tracking-wider uppercase text-sm">
              Hakkımızda
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Bodrum'un Kalbinde Lüks Bir Kaçamak
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Otelimiz, misafirlerine ayrıcalıklı bir tatil sunmaktadır. Plaja sadece 50 metre, Zeki Müren Sanat Müzesi'ne 300 metre, Bodrum şehir merkezine 2 km, Bodrum Kalesi'ne 2.5 km, Halikarnas Mozolesi'ne 3.5 km ve Milas-Bodrum Havalimanı'na 36 km mesafede yer almaktadır.
              </p>
              <p>
                Konforlu odalarımız, dünya mutfaklarından eşsiz lezzetler sunan restoranımız ve yenilenmenizi sağlayacak spa merkezimiz ile unutulmaz bir konaklama deneyimi sizleri bekliyor.
              </p>
            </div>
            <div className="mt-8">
              <a href="#facilities" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors">
                Tesis imkanlarını inceleyin
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* About Image */}
          <div className="relative aspect-[1693/929] w-full overflow-hidden rounded-sm bg-gray-100 shadow-lg lg:w-1/2">
            <img
              src={aboutImage}
              alt="Milas-Bodrum Havalimanı, Bodrum ve Türkbükü yol haritası"
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-[-1]"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gray-300 rounded-full z-[-1]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
