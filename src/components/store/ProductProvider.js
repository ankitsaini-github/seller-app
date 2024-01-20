import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";

const storedProducts =
  JSON.parse(localStorage.getItem("product-list")) === null
    ? []
    : JSON.parse(localStorage.getItem("product-list"));
const storedTotal = storedProducts.length<1? 0 : storedProducts.reduce((sum,curr) =>sum+Number(curr.price),0)
  
function ProductProvider(props) {
  const [Products, setProducts] = useState(storedProducts);
  const [Cartvalue, setCartvalue] = useState(storedTotal);
  
  useEffect(() => {
    localStorage.setItem("product-list", JSON.stringify(Products));
  }, [Products]);

  const addProductHandler = (product) => {
    setProducts((prev) => [product,...prev])
    setCartvalue((prev) => Number(product.price)+prev)
  };
  const deleteProductHandler = (idToRemove,price) => {
    const newArr = Products.filter((product) => product.id !== idToRemove);
    setProducts(newArr)
    setCartvalue((prev) => prev-Number(price))
  };

  const productCtx = {
    products: Products,
    totalAmount: Cartvalue,
    addProduct: addProductHandler,
    deleteProduct: deleteProductHandler,
  };

  return (
    <ProductContext.Provider value={productCtx}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
