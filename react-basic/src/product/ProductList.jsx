import { useState, useEffect, useRef } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
   console.info('call use effect')
    if (loaded.current === false) {
      fetch("/products-data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }
    return () => {
      console.log("ProductList component unmounted")
    }
  });
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
