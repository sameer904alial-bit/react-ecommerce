import Header from "./component/header/Header.js";
import Footer from "./component/footer/Footer.js";
import TopBanner from "./component/banner/TopBanner.js";
import HeroBanner from "./component/heroBanner/HeroBanner.js";
import CategoryList from "./component/categoryList/CategoryList.js";
import ProductGrid from "./component/productGrid/ProductGrid.js";
import FlashDeals from "./component/flashDeals/FlashDeals.js";
import Features from "./component/features/Features.js";
import Newsletter from "./component/newsletter/Newsletter.js";

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Header />
      <CategoryList />
      <HeroBanner />
      <Features />
      <FlashDeals />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
