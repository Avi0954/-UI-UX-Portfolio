import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import UIExplorations from './components/UIExplorations';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f9] text-[#1b1c1c] selection:bg-[#1b1c1c] selection:text-[#ffffff] flex flex-col font-sans">
      <Loader />
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <Projects />
        <UIExplorations />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
