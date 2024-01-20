import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./productItem";
import "./productList.css";
import ProductContext from "./store/ProductContext";

const ProductList = () => {
    const [blinker,setBlinker]=useState(false)
  const ctx = useContext(ProductContext);
  useEffect(() => { 
    if (ctx.products.length === 0) {
        return;
      }
      setBlinker(true);
  
      const timer = setTimeout(() => {
        setBlinker(false);
      }, 1000);
  
      return () => {
        clearTimeout(timer);
      };
   },[ctx.products])

  return (
    <div className="product-container">
      <h3 className={`${blinker?'blink':''}`}>Total Cart Value : {`Rs ${ctx.totalAmount}`}</h3>
      <h2>Products</h2>
      <ul>
        {ctx.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ProductList;
