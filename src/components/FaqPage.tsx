import { ArrowLeft } from 'lucide-react';

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-12 text-neutral-800 md:px-8 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <a
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
          href={`${import.meta.env.BASE_URL}`}
        >
          <ArrowLeft size={18} />
          Ana Sayfaya Dön
        </a>

        <div className="mb-10">
          <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Gölköy Yaşam Türkbükü
          </div>
          <h1 className="font-serif text-3xl text-gray-900 md:text-4xl">
            Sıkça Sorulan Sorular
          </h1>
        </div>
      </div>
    </main>
  );
}
