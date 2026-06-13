import Header from './components/header';
import Hero from './components/hero';
import TechMarquee from './components/tech-marquee';
import TalentCategories from './components/talent-categories';
import Services from './components/services';
import Process from './components/process';
import WhyUs from './components/why-us';
import Testimonials from './components/testimonials';
import FAQ from './components/faq';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-200">
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <TalentCategories />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
