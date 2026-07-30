import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';

function App() {
  const isGalleryPage = new URLSearchParams(window.location.search).get('sayfa') === 'diger-gorseller';

  if (isGalleryPage) {
    return <GalleryPage />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
