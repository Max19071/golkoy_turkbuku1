import { ArrowLeft, Image as ImageIcon } from 'lucide-react';

const galleryItems = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `Resim ${index + 1}`
}));

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-12 text-neutral-800 md:px-8 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <a
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
          href={`${import.meta.env.BASE_URL}#facilities`}
        >
          <ArrowLeft size={18} />
          Ana Sayfaya Dön
        </a>

        <div className="mb-10">
          <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Gölköy Yaşam Türkbükü
          </div>
          <h1 className="font-serif text-3xl text-gray-900 md:text-4xl">
            Diğer Görseller
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-300"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <ImageIcon size={52} className="text-gray-500 opacity-40" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <h2 className="absolute bottom-0 left-0 right-0 p-6 font-serif text-xl font-medium text-white">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
