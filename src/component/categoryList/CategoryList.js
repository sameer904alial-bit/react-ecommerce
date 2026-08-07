import "./CategoryList.css";

function CategoryList() {
  const categories = ["Electronics", "Fashion", "Home & Living", "Beauty", "Sports", "Groceries"];

  return (
    <div className="categoryList">
      {categories.map((cat, index) => (
        <div key={index} className="categoryList__item">
          <span>{cat}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;