import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [domain, setDomain] = useState("");
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleDomainChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setDomain(event.target.value);
  };

  const shortenUrl = async (longUrl: string | number | boolean) => {
    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
      );
      return response.data; // The shortened URL
    } catch (error) {
      console.error('Error shortening URL:', error);
      return null;
    }
  };

  const handleShortenUrl = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      let selectedDomain = domain;
      if (domain === "Enter Domain" || domain === "Add Domain") {
        setError("Please enter a valid domain");
        return;
      }

      if (domain === "Choose Domain") {
        selectedDomain = "Scissor.com"; // or any other default domain you prefer
      }

      const shortened = await shortenUrl(url);
      if (shortened) {
        setShortenedUrl(shortened);
        setError("");
      } else {
        setError("Error occurred while shortening the URL");
      }
    } catch (error) {
      setError("Error occurred while shortening the URL");
      setShortenedUrl("");
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => console.log('URL copied to clipboard'))
      .catch((error) => console.error('Error copying URL to clipboard:', error));
  };

  return (
    <div>
      <div>
        <section className="form" id="form">
          <div className="form-center">
            <form onSubmit={handleShortenUrl} className="form-box">
              <img src="/public/assets/analyticsRight.png" alt="" />
              <input
                type="text"
                placeholder="Paste URL here"
                className="form-control url-input"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <div className="form-control domain-input">
                <select
                  name="choose domain"
                  id="choose domain"
                  className="domain-choice"
                  value={domain}
                  onChange={handleDomainChange}
                >
                  <option value="Choose Domain">Choose Domain</option>
                  <option value="scissor.com">Scissor.com</option>
                  <option value="Enter Domain">Enter Domain</option> 
                </select>
                <input
                  type="text"
                  placeholder="Type Alias here"
                  className="form-control"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-blue btn form-btn">
                Trim Url <img src="/assets/magic wand.png" alt="" />
              </button>
            </form>
            {shortenedUrl && (
              <div>
                <p className="form-text">Shortened URL: {shortenedUrl}</p>
                <button className="btn-blue btn form-btn" onClick={handleCopyUrl}>
                  Copy URL
                </button>
              </div>
            )}
            {error && <p className="form-text error-text">{error}</p>}
            <p className="form-text">
              By clicking TrimURL, I agree to the{" "}
              <strong>Terms of Service, Privacy Policy</strong> and Use of
              Cookies.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Form;
