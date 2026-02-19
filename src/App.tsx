import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-brand-light bg-linear-to-br from-brand-light via-brand-light to-brand-blue/20 font-sans text-brand-dark selection:bg-accent-primary selection:text-brand-white">
      <Navbar />

      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <Projects />
        <Testimonials />
      </main>

      <footer className="py-8 text-center border-t border-border-subtle text-text-secondary relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-blue rounded-b-full"></div>
        <p>© {new Date().getFullYear()} PT Twinlytech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;