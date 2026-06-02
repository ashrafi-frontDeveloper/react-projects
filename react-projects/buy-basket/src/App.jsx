import { useState } from "react";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Navigation from "./components/Navigation/Navigation";

import productsData from "./../data/products.js";
import Product from "./components/Product/Product";

function App() {
  const [products] = useState(productsData);

  return (
    <>
      <Breadcrumb />

      <section
        id="products-row"
        className="container mx-auto grid grid-cols-4 gap-5"
      >
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>

      <Navigation />
    </>
  );
}

export default App;
