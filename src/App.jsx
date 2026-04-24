import { useState } from 'react';

function App() {
  const [selectedService, setSelectedService] = useState('payroll');

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-logo">
            <a href="https://www.genpact.com" target="_blank" rel="noreferrer">
              <img
                src="https://s7ap1.scene7.com/is/content/genpactindia/310x150%20white?ts=1774318655171&dpr=off&bfc=on&fmt=avif-alpha"
                alt="Genpact Logo"
                loading="lazy"
              />
            </a>
          </div>
          <nav className="header-nav" aria-label="Primary navigation">
            <a href="#who-we-are">Who We Are</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#our-impact">Our Impact</a>
            <a href="#insights">Insights</a>
          </nav>
          <div className="header-actions">
            <a className="header-contact" href="https://www.genpact.com/contact-us" target="_blank" rel="noreferrer">
              Contact us
            </a>
            <button className="header-menu-btn" type="button" aria-label="Open navigation">
              Menu
            </button>
          </div>
        </div>
      </header>
      <header className="hero">
        <h1>Software Consulting on Our Payroll</h1>
        <p>
          We offer dedicated software consulting services that can be delivered directly on our payroll.
          Get expert guidance, careful planning, and reliable execution for your payroll software needs.
        </p>
      </header>

      <section className="carousel-full">
        <div className="carousel-inner">
          <div className="cmp-carousel__content" aria-atomic="false" aria-live="polite">
            <div
              id="carousel-4eeba4720d-item-02d897dc41-tabpanel"
              className="cmp-carousel__item cmp-carousel__item--active"
              role="tabpanel"
              aria-labelledby="carousel-4eeba4720d-item-02d897dc41-tab"
              aria-roledescription="slide"
              aria-label="Slide 1 of 7"
              data-cmp-hook-carousel="item"
              style={{ '--doubleslide-x-pos': '0%' }}
            >
              <div className="teaser cmp-teaser--tile">
                <div className="cmp-teaser">
                  <div className="cmp-teaser__content">
                    <h3 className="cmp-teaser__title">FINANCE AND ACCOUNTING</h3>
                    <div className="cmp-teaser__description">
                      <p>Streamline finance to move faster, think smarter, and grow stronger.</p>
                    </div>
                    <div className="cmp-teaser__action-container">
                      <a
                        className="cmp-teaser__action-link"
                        href="/services/finance-and-accounting"
                      >
                        FINANCE AND ACCOUNTING
                      </a>
                    </div>
                  </div>
                  <div className="cmp-teaser__image">
                    <img
                      src="https://s7ap1.scene7.com/is/image/genpactindia/Finance%20and%20Accounting_ANYL_ADB_879450242:Marquee-Carousel?ts=1774318934528&dpr=off&bfc=on&fmt=avif-alpha&wid=1200"
                      alt="A sleek, modern digital stock market board displays rising stocks and profits, bathed in warm, golden light, conveying success and growth."
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cmp-carousel__actions">
              <button className="cmp-carousel__action cmp-carousel__action--previous" type="button" aria-label="Move to the previous slide" disabled>
                Prev
              </button>
              <button className="cmp-carousel__action cmp-carousel__action--next" type="button" aria-label="Move to the next slide">
                Next
              </button>
            </div>
            <ol className="cmp-carousel__indicators" role="tablist" aria-label="Choose a slide to display">
              <li
                id="carousel-4eeba4720d-item-02d897dc41-tab"
                className="cmp-carousel__indicator cmp-carousel__indicator--active"
                role="tab"
                aria-controls="carousel-4eeba4720d-item-02d897dc41-tabpanel"
                aria-label="Slide 1"
              >
                FINANCE AND ACCOUNTING
              </li>
            </ol>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-social">
            <a href="https://x.com/genpact" target="_blank" rel="noreferrer" aria-label="Open Genpact's X channel">
              X
            </a>
            <a href="https://www.facebook.com/ProudToBeGenpact/" target="_blank" rel="noreferrer" aria-label="Open Genpact's Facebook">
              Facebook
            </a>
            <a href="https://www.linkedin.com/company/210064?trk=tyah" target="_blank" rel="noreferrer" aria-label="Open Genpact's LinkedIn">
              LinkedIn
            </a>
            <a href="https://www.youtube.com/genpactltd" target="_blank" rel="noreferrer" aria-label="Open Genpact's YouTube channel">
              YouTube
            </a>
          </div>

          <ul className="footer-links">
            <li><a href="/contact-us">Contact us</a></li>
            <li><a href="/about-us/locations">Locations</a></li>
            <li><a href="/about-us/purpose">Our Purpose</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms-and-conditions">Terms and conditions</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
