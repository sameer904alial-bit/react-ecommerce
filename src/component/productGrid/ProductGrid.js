import ProductCard from "../productCard/ProductCard.js";
import "./ProductGrid.css";

function ProductGrid() {
  return (
    <div className="productGrid">
      <h2>Trending Products</h2>
      <div className="productGrid__items">
        <ProductCard title="Wireless Headphones" price="49.99" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlEsquJISTiVLAhBdQc6o4GArkScs9wgCSF9pFQ7yAg&s=10" rating={5} />
        <ProductCard title="Smart Watch" price="89.99" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TEydKiCN43siz5FCYTK-R8k1i67YjVS1RyZaDb6l-Q&s=10" rating={4} />
        <ProductCard title="Gaming Mouse" price="25.00" rating={4} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJZJZsGqkjIEqClmttWSAz-OEOD3qxpwoWRIATCWIOQ&s=10"/>
        <ProductCard title="Mechanical Keyboard" price="65.00" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoDpjbNBlEF-KJITjqzVeAbEurDQK-nOzR2Es80JGbQ&s=10" rating={5} />
      </div>
    </div>
  );
}

export default ProductGrid;