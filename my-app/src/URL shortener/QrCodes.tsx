import React, { useState, ChangeEvent, useRef } from 'react';
import QRCode from 'react-qr-code';
import Footer from '../pages/Footer';
import Navbar from '../components/Navbar';

const QRCodeScanner: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [back, setBack] = useState<string>('white');
  const [fore, setFore] = useState<string>('black');
  const [size, setSize] = useState<number>(256);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBackChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBack(e.target.value);
  };

  const handleForeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFore(e.target.value);
  };

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value === '' ? '0' : e.target.value, 10);
    setSize(newSize);
  };

  const downloadQRCode = () => {
    if (!qrRef.current) {
      console.error('QR code element not found');
      return;
    }
    const svg = qrRef.current.querySelector('svg');
    if (!svg) {
      console.error('SVG element not found');
      return;
    }
    const svgString = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `QRCode-${value}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
    <Navbar />
    <div className="container_qrcodes">
      <h1>QR Code Scanner</h1>
      <div className="input-container-qrcodes">
        <input
          type="text"
          value={value}
          onChange={handleValueChange}
          placeholder="Enter QR Code Value"
          className="input"
        />
        <input
          type="text"
          value={back}
          onChange={handleBackChange}
          placeholder="Background Color"
          className="input"
        />
        <input
          type="text"
          value={fore}
          onChange={handleForeChange}
          placeholder="Foreground Color"
          className="input"
        />
        <input
          type="number"
          value={size}
          onChange={handleSizeChange}
          placeholder="Size of QR Code"
          className="input"
        />
      </div>
      <div className="qr-code-container" ref={qrRef}>
        {value && (
          <QRCode
            value={value}
            bgColor={back}
            fgColor={fore}
            size={size}
            id="qr-code"
          />
        )}
      </div>
      {value && (
        <button onClick={downloadQRCode} className='btn-qrcode'>Download QR Code</button>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default QRCodeScanner;
