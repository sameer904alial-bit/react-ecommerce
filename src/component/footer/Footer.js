import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a href="#top" className="footer__backToTop">Back to Top</a>
      </div>
      <div className="footer__links">
        <div className="footer__column">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Customer Care</h4>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Payment Methods</h4>
          <ul>
            <li>Credit / Debit Card</li>
            <li>Cash on Delivery</li>
            <li>EasyPaisa / JazzCash</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} E-Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;