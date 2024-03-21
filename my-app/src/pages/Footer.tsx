import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer">
          <div className="section-center">
            <div className="footer-center">
              <div className="logo-socials">
                <a href="/">
                  <img src="/assets/Logo_scissor.png" alt="Logo" />
                </a>
                <ul className="social-icons">
                  <li>
                    <a href="/your-twitter-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/your-facebook-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/your-instagram-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/your-linkedin-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li><a href="https://github.com/Kwashie10"><i className="fab fa-github"></i></a></li>
                </ul>
              </div>
              <div className="logo-links">
                <h3>Why Scissor ?</h3>
                <ul>
                  <li>
                    <a href="#d">Scissors 101</a>
                  </li>
                  <li>
                    <a href="#d">Integrations and API</a>
                  </li>
                  <li>
                    <a href="#d">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="logo-links">
                <h3>Solutions</h3>
                <ul>
                  <li>
                    <a href="d#">Social Media</a>
                  </li>
                  <li>
                    <a href="d">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="#d">Customer Service</a>
                  </li>
                  <li>
                    <a href="#d">For Developers</a>
                  </li>
                </ul>
              </div>
              <div className="logo-links">
                <h3>Products</h3>
                <ul>
                  <li>
                    <a href="#d">Link Management</a>
                  </li>
                  <li>
                    <a href="#d">QR Codes</a>
                  </li>
                  <li>
                    <a href="d#">Link-in-bio</a>
                  </li>
                </ul>
              </div>
              <div className="logo-links">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="#d">About Scissor</a>
                  </li>
                  <li>
                    <a href="#d">Careers</a>
                  </li>
                  <li>
                    <a href="#d">Partners</a>
                  </li>
                  <li>
                    <a href="#d">Press</a>
                  </li>
                  <li>
                    <Link to="/GetTouch">Contact</Link>
                  </li>
                  <li>
                    <a href="d#">Reviews</a>
                  </li>
                </ul>
              </div>
              <div className="logo-links footer-second-line">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="d#">Blog</a>
                  </li>
                  <li>
                    <a href="#d">Resource Library</a>
                  </li>
                  <li>
                    <a href="#d">Developers</a>
                  </li>
                  <li>
                    <a href="#d">App Connectors</a>
                  </li>
                  <li>
                    <a href="#d">Support</a>
                  </li>
                  <li>
                    <a href="#d">Trust Center</a>
                  </li>
                  <li>
                    <a href="d#">Browser Extension</a>
                  </li>
                  <li>
                    <a href="d#">Mobile App</a>
                  </li>
                </ul>
              </div>
              <div className="logo-links">
                <h3>Features</h3>
                <ul>
                  <li>
                    <a href="d#">Branded Links</a>
                  </li>
                  <li>
                    <a href="d#">Mobile Links</a>
                  </li>
                  <li>
                    <a href="d#">Campaign</a>
                  </li>
                  <li>
                    <a href="d#">Management &amp; Analytics</a>
                  </li>
                  <li>
                    <a href="d#">QR Code generation</a>
                  </li>
                </ul>
              </div>
              {/* end of cont */}
              <div className="logo-links">
                <h3>Legal</h3>
                <ul>
                  <li>
                    <a href="#d">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#d">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#d">Terms of Service</a>
                  </li>
                  <li>
                    <a href="d#">Acceptable Use Policy</a>
                  </li>
                  <li>
                    <a href="d#">Code of Conduct</a>
                  </li>
                </ul>
              </div>
              {/* end of cont */}
            </div>
            <p className="footer-text">
              <span className="footer-link">Terms of Service</span> |
              <span className="footer-link"> Security</span> |
              <span className="footer-link"> Scissor 2024</span>
              by <span className="footer-author">Kwashie Abednego</span>
              <span className="footer-date primary-blue-400">2024</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
