import { useState, useEffect } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    console.log("load products");
    if (load) {
      fetch("/products-data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [load]);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
