import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Ramos from './components/Ramos/Ramos';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Ramos />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
