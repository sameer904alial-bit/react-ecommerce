import "./FlashDeals.css";

function FlashDeals() {
  return (
    <div className="flashDeals">
      <div className="flashDeals__header">
        <h3>⚡ Flash Sale</h3>
        <div className="flashDeals__timer">Ends in: 02h : 15m : 40s</div>
      </div>
      <div className="flashDeals__items">
        {/* Yahan bhi ProductCard use kar sakte hain */}
        <p>Special deal items display context here...</p>
      </div>
    </div>
  );
}

export default FlashDeals;