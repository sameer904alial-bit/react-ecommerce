import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <p>Get daily updates on new discounts and coupon codes.</p>
      <div className="newsletter__inputGroup">
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;