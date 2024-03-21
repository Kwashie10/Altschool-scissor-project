import React, { useState } from 'react';
import axios from 'axios';
import { UrlData } from './models';
import Footer from '../pages/Footer';
import Navbar from '../components/Navbar';
import WelcomeMessage from '../components/WelcomeMessage';

const UrlShortener: React.FC = () => {
  const [urlData, setUrlData] = useState<UrlData | null>(null);
  const [inputLongUrl, setInputLongUrl] = useState('');
  const [inputCustomShortUrl, setInputCustomShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const shortenUrl = async () => {
    try {
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputLongUrl)}`);

      if (response.status === 200) {
        const shortenedUrl = response.data;
        setUrlData({
          longUrl: inputLongUrl,
          shortUrl: shortenedUrl,
          customShortUrl: inputCustomShortUrl || undefined,
        });
      } else {
        console.error('Failed to shorten URL:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleCopy = () => {
    if (urlData) {
      navigator.clipboard.writeText(urlData.shortUrl)
        .then(() => setCopied(true))
        .catch(error => console.error('Error copying URL to clipboard:', error));
    }
  };

  return (
    <div>
      <Navbar />
      <WelcomeMessage />
      <div className="container-url">
        <h1 className="title">URL Shortener</h1>
        <div className="input-container">
          <div className="p-input">
            <p>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
          <input
            type="url"
            value={inputLongUrl}
            onChange={(e) => setInputLongUrl(e.target.value)}
            className="input"
            placeholder="Enter Long URL"
          />
          <input
            type="text"
            value={inputCustomShortUrl}
            onChange={(e) => setInputCustomShortUrl(e.target.value)}
            className="input"
            placeholder="Custom Short URL (optional)"
          />
          <button onClick={shortenUrl} className="button">Shorten</button>
        </div>
        {urlData && (
          <div className="result-container">
            <p><strong>Long URL:</strong> {urlData.longUrl}</p>
            <p><strong>Short URL:</strong>{' '}
              <a href={urlData.shortUrl} target="_blank" rel="noopener noreferrer">
                {urlData.shortUrl}
              </a>
            </p>
            {urlData.customShortUrl && (
              <p><strong>Custom Short URL:</strong> {urlData.customShortUrl}</p>
            )}
            <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy Shortened URL'}</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UrlShortener;
