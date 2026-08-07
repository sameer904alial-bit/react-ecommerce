import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <h2>What Our Customers Say</h2>
      <div className="reviews__container">
        <div className="reviewCard">
          <p>"Fast delivery and original products!"</p>
          <span>- Ali R.</span>
        </div>
        <div className="reviewCard">
          <p>"Great customer support. Highly recommended!"</p>
          <span>- Sarah K.</span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;