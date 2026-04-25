import { useState } from "react";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Navigation from "./components/Navigation/Navigation";
import Product from "./components/Product/Product";
import PRODUCTS from "./data/data.js";

const App = () => {
  const [products] = useState(PRODUCTS);
  const [userProductCategories, setUserProductCategories] = useState({
    interests: [],
    basket: [],
  });

  const addToProductsList = (productCategoryName, productID) => {
    const foundedProduct = products.find((product) => product.id === productID);
    const wasProductInBasket = userProductCategories[productCategoryName].some(
      (product) => product.id === productID,
    );
    if (!wasProductInBasket && foundedProduct) {
      setUserProductCategories((prevProducts) => {
        const updatedProducts = { ...prevProducts };
        updatedProducts[productCategoryName].push(foundedProduct);
        return updatedProducts;
      });
    }
  };

  const removeProductFromList = (productCategoryName, productID) => {
    setUserProductCategories((prevProducts) => {
      const updatedProducts = { ...prevProducts }[productCategoryName].filter(
        (product) => product.id !== productID,
      );
      return { ...prevProducts, [productCategoryName]: updatedProducts };
    });
  };

  const clearProductsList = (productCategoryName) => {
    setUserProductCategories((prevProducts) => {
      return { ...prevProducts, [productCategoryName]: [] };
    });
  };

  return (
    <div>
      <Breadcrumb />

      <section
        id="products-row"
        className="container mx-auto grid grid-cols-4 gap-5"
      >
        {products.map((product) => (
          <Product {...product} onAdd={addToProductsList} key={product.id} />
        ))}
      </section>

      <Navigation
        products={userProductCategories}
        onClear={clearProductsList}
        onRemove={removeProductFromList}
      />
    </div>
  );
};

export default App;
