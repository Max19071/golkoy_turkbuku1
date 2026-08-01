import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import FaqPage from './components/FaqPage';
import ReservationBar from './components/ReservationBar';

function App() {
  const page = new URLSearchParams(window.location.search).get('sayfa');

  if (page === 'diger-gorseller') {
    return <GalleryPage />;
  }

  if (page === 'sss') {
    return <FaqPage />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <ReservationBar />
        <About />
        <Rooms />
        <Facilities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
