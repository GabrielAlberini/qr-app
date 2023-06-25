import { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import toggleDarkMode from './utils/darkMode';
import downloadQRCode from './utils/dowloadQr';

import './App.css'

function App() {
  const [url, setUrl] = useState('');
  const [darkMode, setDarkMode] = useState("")
  const [qrCodeValue, setQRCodeValue] = useState('');
  const qrCodeRef = useRef(null);

  const generateQRCode = () => {
    setQRCodeValue(url);
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode(setDarkMode, darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'is-dark' : ''}`}>
      <section className={`app-container section ${darkMode ? 'has-background-dark' : ''}`}>
      <button className={`button is-small is-dark-mode-button ${darkMode ? 'is-light' : ''} is-pulled-right`} onClick={handleDarkModeToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
        <h1 className={`title has-text-centered pt-6 ${darkMode ? 'has-text-white' : ''}`}>Generador de Código QR Navegable</h1>
        <div className="columns is-centered">
          <div className="column is-6">
            <div className="field">
              <label className={`label ${darkMode ? 'has-text-white' : ''}`}>Ingrese una URL</label>
              <div className="control">
                <input
                  className={`input ${darkMode ? 'has-background-black has-text-white' : ''}`}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Ingrese una URL"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className={`button is-primary is-fullwidth ${darkMode ? 'is-light' : ''}`} onClick={generateQRCode}>
                  Generar Código QR
                </button>
              </div>
            </div>
          </div>
        </div>
        {qrCodeValue && (
          <div className="columns is-centered has-text-centered">
            <div className="column is-one-third">
              <h2 className={`title is-4 ${darkMode ? 'has-text-white' : ''}`}>Resultado</h2>
              <div className={`content has-text-centered ${darkMode ? 'has-text-white' : ''}`} ref={qrCodeRef}>
                <QRCode value={qrCodeValue} />
                <p><b>URL: </b>{qrCodeValue}</p>
              </div>
              <div className="field">
                <div className="control">
                  <button className={`button is-link is-fullwidth ${darkMode ? 'is-light' : ''}`} onClick={() => downloadQRCode(qrCodeRef)}>
                    Descargar QR como PNG
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
