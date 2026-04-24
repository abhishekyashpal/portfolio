import { useState } from 'react';

function App() {
  const [selectedService, setSelectedService] = useState('payroll');

  return (
    <div className="app-shell">
      <header className="hero">
        <h1>Software Consulting on Our Payroll</h1>
        <p>
          We offer dedicated software consulting services that can be delivered directly on our payroll.
          Get expert guidance, careful planning, and reliable execution for your payroll software needs.
        </p>
      </header>

      <main className="card">
        <section className="section">
          <div className="service-option">
            <h2>Payroll Software Consulting</h2>
            <p>
              Build, optimize, or maintain payroll systems with a team that operates as part of your payroll structure.
              We handle requirements, integration, compliance, and support so your team can move faster.
            </p>
          </div>

          <div className="cta">
            <label htmlFor="service">Choose an option:</label>
            <select
              id="service"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
            >
              <option value="payroll">Payroll Consulting</option>
              <option value="staffing">Staffing & Payroll Support</option>
              <option value="strategy">Strategy & Implementation</option>
            </select>
            <button className="primary-btn">
              Request {selectedService === 'payroll' ? 'Payroll Consulting' : selectedService === 'staffing' ? 'Staffing Support' : 'Strategy Help'}
            </button>
          </div>
        </section>

        <section className="section highlight">
          <h3>Why choose payroll-based consulting?</h3>
          <ul>
            <li>Consistent payroll handling with transparent billing</li>
            <li>Aligned incentives and better service continuity</li>
            <li>Dedicated experts for payroll software design, security, and compliance</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
