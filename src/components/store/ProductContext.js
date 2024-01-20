import React from "react";

const ProductContext= React.createContext({
products:[],
totalAmount:0,
addProduct:(product)=>{},
deleteProduct:(id,price)=>{},
})

export default ProductContext;