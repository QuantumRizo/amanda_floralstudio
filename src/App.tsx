import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ramos from './components/Ramos';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
