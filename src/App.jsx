function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-900 bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Resilient Business Solutions</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="tel:+916388663376" className="hover:text-white">+91-6388663376</a>
              <a href="tel:+919695959599" className="hover:text-white">+91-9695959599</a>
              <a href="tel:+919648390997" className="hover:text-white">+91-9648390997</a>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
            <a href="#service_section" className="hover:text-white">Services</a>
            <a href="https://anantarecruitment.com/international/" className="hover:text-white" target="_blank" rel="noreferrer">International</a>
            <a href="#job_section" className="hover:text-white">Jobs</a>
            <a href="#quote_section" className="rounded-full border border-slate-200 px-4 py-2 text-slate-100 transition hover:bg-white hover:text-slate-950">Contact Us</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">Staffing & Consulting</div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Resilient Business Solutions
                <span className="block text-indigo-600">Staffing Solutions for Lucknow and beyond.</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Resilient Business Solutions is renowned for its exceptional consultancy services in Lucknow. Our unparalleled job placement assistance builds a strong link between recruiters and ambitious professionals.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#service_section" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800">
                Our Services
              </a>
              <a href="#quote_section" className="inline-flex items-center justify-center rounded-2xl border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-900 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl sm:p-10">
            <h2 className="text-2xl font-semibold">Talent Scout</h2>
            <p className="mt-4 text-slate-300 leading-7">
              Recruitment and outsourcing assist in the selection of optimal employment opportunities for candidates with the right qualifications. We provide suitable candidates for both permanent and temporary positions and match the right individuals with the right roles.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-4xl font-bold">512+</p>
                <p className="mt-2 text-sm text-slate-300">Companies We Help</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-4xl font-bold">1520+</p>
                <p className="mt-2 text-sm text-slate-300">Candidates Placed</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-4xl font-bold">120+</p>
                <p className="mt-2 text-sm text-slate-300">Strategic Partners</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-4xl font-bold">25+</p>
                <p className="mt-2 text-sm text-slate-300">Corporate Programs</p>
              </div>
            </div>
          </div>
        </section>

        <section id="service_section" className="mt-24 space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Our Services</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What we deliver for your hiring goals</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Talent Scout</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Our reputation as the leading job placement company in UP has cemented our position as the preferred choice for top-notch placement solutions.
              </p>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Staffing Solutions</h3>
              <p className="mt-4 text-slate-600 leading-7">
                We offer unmatched permanent and temporary staffing solutions, prioritizing precise placements at the most opportune moments.
              </p>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Talent Management</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Our 360 Talent Management program enhances candidate performance through career development, workforce solutions, and leadership consultation.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Committed to Quality</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Welcome to Resilient Business Solutions Job Consulting</h2>
            <p className="text-slate-600 leading-8">
              We provide a variety of services including recruitment and talent acquisition, outsourcing solutions, project-based hiring options, and contingency staffing.
            </p>
            <div className="space-y-4 rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">Quality Services</h3>
                  <p className="mt-2 text-sm text-slate-600">Professional hiring support for every role.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-950">Project On Time</h3>
                  <p className="mt-2 text-sm text-slate-600">Timely delivery for short- and long-term staffing.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-950">Updated Resumes</h3>
                  <p className="mt-2 text-sm text-slate-600">Candidates with polished and employer-ready resumes.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-950">Custom Solutions</h3>
                  <p className="mt-2 text-sm text-slate-600">Hiring strategies tailored to your company.</p>
                </div>
              </div>
            </div>
            <a href="tel:9695959599" className="inline-flex rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">
              Get In Touch
            </a>
          </div>
          <div className="rounded-[2rem] bg-indigo-600/10 p-8 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-950">We Follow Best Practices</h3>
              <ul className="grid gap-3 text-slate-700 sm:grid-cols-2">
                <li className="rounded-3xl bg-white p-5 shadow-sm">Quality Services</li>
                <li className="rounded-3xl bg-white p-5 shadow-sm">Project On Time</li>
                <li className="rounded-3xl bg-white p-5 shadow-sm">Updated Resumes</li>
                <li className="rounded-3xl bg-white p-5 shadow-sm">Custom Solutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="job_section" className="mt-24 space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Job Openings</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Jobs We Provide</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Jobs in Lucknow for Freshers</h3>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Lucknow Metro Jobs</h3>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Jobs in Lucknow for Graduates</h3>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">BPO Jobs in Lucknow</h3>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Private Jobs in Lucknow</h3>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">IT Jobs in Lucknow</h3>
            </div>
          </div>
        </section>

        <section className="mt-24 space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Testimonials</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-slate-600 leading-7">"I got my dream job with help of them thank so much and special thanks to Sankalp sir."</p>
              <div className="mt-6 text-sm font-semibold text-slate-900">Niharika Gupta</div>
              <div className="text-sm text-slate-500">HR Manager</div>
            </article>
            <article className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-slate-600 leading-7">"We professional team and I will highly recommend them."</p>
              <div className="mt-6 text-sm font-semibold text-slate-900">Neeraj Gupta</div>
              <div className="text-sm text-slate-500">Interior Designer</div>
            </article>
            <article className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-slate-600 leading-7">"Resilient Business Solutions is one of the best job consultancy providers in Lucknow."</p>
              <div className="mt-6 text-sm font-semibold text-slate-900">Parul Verma</div>
              <div className="text-sm text-slate-500">Architect</div>
            </article>
            <article className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-slate-600 leading-7">"Best agency that provides best job solutions in Lucknow for fresher B.Tech MBA MCA BCA BBA."</p>
              <div className="mt-6 text-sm font-semibold text-slate-900">Alok Singh</div>
              <div className="text-sm text-slate-500">Manager</div>
            </article>
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">FAQ</p>
            <div className="space-y-4">
              <details className="rounded-3xl border border-slate-200 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-slate-950">1. What types of staffing solutions do you offer?</summary>
                <p className="mt-4 text-slate-600 leading-7">Short-term, long-term, permanent placements, seasonal workers, contracted professionals, multilingual recruitment services, and executive headhunting.</p>
              </details>
              <details className="rounded-3xl border border-slate-200 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-slate-950">2. What sectors or industries do you recruit for?</summary>
                <p className="mt-4 text-slate-600 leading-7">IT/BPO, administrative and accounting, call center, finance, banking, insurance, and many other industries across Lucknow.</p>
              </details>
              <details className="rounded-3xl border border-slate-200 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-slate-950">3. Does your agency provide temporary and permanent placements?</summary>
                <p className="mt-4 text-slate-600 leading-7">Yes, we offer both temporary and permanent placement solutions for employers and candidates.</p>
              </details>
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">Our Location</p>
            <h2 className="text-3xl font-bold tracking-tight">Lucknow Office</h2>
            <div className="space-y-4 text-sm leading-7 text-slate-200">
              <p>Ananta Resilient Business Solutions Pvt Ltd</p>
              <p>Dhanshree Apartment 4th Floor, Flat No 401, Mama Chauraha, Sec 2, Vikas Nagar, Lucknow, Uttar Pradesh 226022</p>
              <p className="font-semibold text-white">Phone</p>
              <p>+91 9695959599<br />+91 9648390997</p>
              <p className="font-semibold text-white">Email</p>
              <p>recruitmentbharat9708@gmail.com</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-slate-900/80 p-6 text-sm text-slate-300">
              <p className="font-semibold text-white">Coming Soon</p>
              <p>Google Maps embed will be available here once the site is deployed.</p>
            </div>
          </div>
        </section>

        <section id="quote_section" className="mt-24 rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Request a Quote</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Ready to work together? Build a project with us!</h2>
            </div>
            <a href="mailto:recruitmentbharat9708@gmail.com" className="inline-flex rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800">
              Send Message
            </a>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Contact form</h3>
              <p className="mt-3 text-slate-600 leading-7">For any recruitment or hiring requirement, send us your details and we will get back to you quickly.</p>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Get in touch</h3>
              <p className="mt-3 text-slate-600 leading-7">Email us at recruitmentbharat9708@gmail.com or call +91 9695959599 to speak with our team directly.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-24 bg-slate-950 text-slate-200">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-14 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Working Hours</h3>
            <p className="leading-7">Mon - Sat 10:00 - 18:30<br />Sunday - CLOSED</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Our Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Private Jobs in Lucknow</li>
              <li>Lucknow Metro Jobs</li>
              <li>IT Jobs in Lucknow</li>
              <li>Engineering Jobs in Lucknow</li>
              <li>BPO Jobs in Lucknow</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Office in Lucknow</h3>
            <p className="leading-7">Dhanshree Apartment 4th Floor, Flat No 401, Mama Chauraha, Sec 2, Vikas Nagar, Lucknow</p>
            <p className="text-slate-300">+91-6388663376<br />+91-9695959599<br />+91-9648390997<br />anantarecruitmentbharat@gmail.com</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Our Locations</h3>
            <p className="leading-7 text-slate-300">Lucknow<br />Kanpur<br />Noida<br />Ghaziabad</p>
          </div>
        </div>
        <div className="border-t border-slate-800 px-6 py-6 text-sm text-slate-500">
          © 2026 Resilient Business Solutions | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
