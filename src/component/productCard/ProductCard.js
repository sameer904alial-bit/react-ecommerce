import "./ProductCard.css";

function ProductCard({ title, price, image, rating }) {
  return (
    <div className="productCard">
      <img src={image || "https://via.placeholder.com/150"} alt={title} className="productCard__image" />
      <div className="productCard__info">
        <p className="productCard__title">{title || "Sample Product"}</p>
        <p className="productCard__price"><strong>${price || "29.99"}</strong></p>
        <div className="productCard__rating">{"⭐".repeat(rating || 5)}</div>
      </div>
      <button className="productCard__btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;