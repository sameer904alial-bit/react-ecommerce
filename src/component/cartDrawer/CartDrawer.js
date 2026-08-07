import "./CartDrawer.css";

function CartDrawer() {
  return (
    <div className="cartDrawer">
      <h3>Your Shopping Cart (2)</h3>
      <div className="cartDrawer__items">
        <div className="cartItem">
          <p>Item 1 - $20.00</p>
        </div>
      </div>
      <div className="cartDrawer__footer">
        <p>Total: $20.00</p>
        <button className="checkoutBtn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartDrawer;