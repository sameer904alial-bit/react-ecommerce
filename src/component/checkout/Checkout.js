import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <h2>Shipping Address</h2>
      <form className="checkout__form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Phone Number" required />
        <textarea placeholder="Full Address"></textarea>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
