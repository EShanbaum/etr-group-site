import '../styles/footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About ProFit</h4>
          <p>Dedicated to creating quality, affordable prosthetic solutions for children worldwide.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#warranty">Warranty</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@profit.com</p>
          <p>Phone: 1-800-PROFIT-1</p>
          <p>Hours: Mon-Fri 9am-5pm EST</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ProFit. All rights reserved.</p>
      </div>
    </footer>
  );
}
