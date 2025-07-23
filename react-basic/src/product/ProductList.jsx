import { useState, useEffect } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    console.info(`Call useEffect with []`)
  })

  useEffect(() => {
    console.log("load products");
    async function fetchProduct() {
      const response = await fetch("/products-data.json");
      const data = await response.json();
      setProducts(data);
    }
    console.log("Load Products")

    if (load) {
      fetchProduct();
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
