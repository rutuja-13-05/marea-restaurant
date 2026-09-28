import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import Reservations from './components/Reservations/Reservations';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservations/>
      <Contact/>
    </>
  );
}

export default App;