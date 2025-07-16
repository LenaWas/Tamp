import './App.css';
import logo from './assets/PlAtZhAlTeR.png';
<img src={logo} alt="Redrop Logo" className="redrop-logo" />

export default function App() {
  return (
    <div id="root">
      {/* Logo (zentriert oben) */}
      <img src={logo} alt="Redrop Logo" className="redrop-logo" />

      {/* Hero Section */}
      <section className="hero">
        <h1>Redrop – Schluss mit rosa Steuern</h1>
        <p className="subtext">Eine Bewegung gegen den Gender Pricing Wahnsinn.</p>
        <a href="#features" className="hero-btn">Jetzt mehr erfahren</a>
      </section>

      {/* Feature Section */}
      <section className="features" id="features">
        <h2>Unsere Features</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Aufklärung</h3>
            <p>Wir informieren über die rosa Steuer und ihre Folgen.</p>
            <button className="fancy-btn">Mehr erfahren</button>
          </div>n
          <div className="feature">
            <h3>Produkte</h3>
            <p>Faire Preise für alle – ohne Genderaufschlag.</p>
            <button className="fancy-btn">Jetzt ansehen</button>
          </div>
          <div className="feature">
            <h3>Mitmachen</h3>
            <p>Werde Teil der Bewegung und setze ein Zeichen.</p>
            <button className="fancy-btn">Mach mit</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Redrop. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
