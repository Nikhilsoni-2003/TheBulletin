const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect className="icon-stroke" x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 8h6M7 12h8M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="footer-logo-text">News Curator</span>
            </div>
            <p className="footer-description">
              Stay informed with curated news from around the world. Get the latest updates across various categories with advanced filtering options.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">World</a></li>
              <li><a href="#" className="footer-link">Business</a></li>
              <li><a href="#" className="footer-link">Technology</a></li>
              <li><a href="#" className="footer-link">Sports</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Features</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Search News</a></li>
              <li><a href="#" className="footer-link">Filter by Country</a></li>
              <li><a href="#" className="footer-link">Multiple Languages</a></li>
              <li><a href="#" className="footer-link">Real-time Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">About</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">API Documentation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 News Curator. All rights reserved.
            </p>
            <div className="footer-social">
              <span className="footer-powered">Powered by NewsData.io</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;