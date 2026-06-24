import Header from './components/header';
import Hero from './components/hero';
import TechMarquee from './components/tech-marquee';
import TalentCategories from './components/talent-categories';
import Services from './components/services';
import CorporateTraining from './components/corporate-training';
import CourseDetail from './components/course-detail';
import Process from './components/process';
import WhyUs from './components/why-us';
import Testimonials from './components/testimonials';
import FAQ from './components/faq';
import Contact from './components/contact';
import Footer from './components/footer';
import FeedbackWidget from './components/feedback-widget';

function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <TalentCategories />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact variant="talent" />
    </>
  );
}

function App() {
  const isCorporateTrainingPage = window.location.pathname === '/corporate-training';
  const courseSlug = window.location.pathname.startsWith('/courses/')
    ? window.location.pathname.replace('/courses/', '').replace(/\/$/, '')
    : null;

  return (
    <div className="min-h-screen bg-surface text-slate-200">
      <Header />
      <main>
        {courseSlug ? (
          <CourseDetail slug={courseSlug} />
        ) : isCorporateTrainingPage ? (
          <div className="coding-lab-page">
            <CorporateTraining />
            <Contact variant="training" />
            <FeedbackWidget />
          </div>
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
