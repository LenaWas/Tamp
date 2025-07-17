import './App.css';
import Navbar from './Navbar';
import logo from './assets/Logo.png';

<img src={logo} alt="Redrop Logo" />


function App() {
  return (
    <>
      <Navbar />

      <main className="main-container" style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
        <img src="/logo.png" alt="Redrop Logo" style={{ maxWidth: '200px', marginBottom: '1rem' }} />

        <h1 style={{ color: 'white' }}>Redrop – Schluss mit rosa Steuern</h1>
        <p style={{ color: '#ccc', marginBottom: '1rem' }}>
          Eine Bewegung gegen den rosa Steuern
        </p>
        <button
          style={{
            backgroundColor: '#ff007f',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '3rem'
          }}
        >
          Jetzt mehr erfahren
        </button>

        <h2 style={{ color: 'white' }}>Unsere Features</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <div style={featureCardStyle}>
            <h3>Aufklärung</h3>
            <p>Wir informieren über die rosa Steuer und ihre Folgen.</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Produkte</h3>
            <p>Faire Preise für alle – ohne Genderaufschlag.</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Mitmachen</h3>
            <p>Werde Teil der Bewegung und setze ein Zeichen.</p>
          </div>
        </div>

        <footer style={{ marginTop: '4rem', color: '#888', fontSize: '0.8rem' }}>
          © 2025 Redrop. Alle Rechte vorbehalten.
        </footer>
      </main>
    </>
  );
}

// 🔧 Karten-Stil separat für Übersichtlichkeit
const featureCardStyle = {
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.5rem',
  width: '200px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  color: '#333',
};

export default App;
