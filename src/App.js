import React,{useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import ProductForm from './components/productForm.js';
import ProductList from './components/productList.js';

const sampleData=JSON.parse(localStorage.getItem('product-list'))===null?[]:JSON.parse(localStorage.getItem('product-list'));

function App() {
  
  const [Products,setProducts]=useState(sampleData);
  const [Cartvalue,setCartvalue]=useState(0);

  useEffect(()=>{
    localStorage.setItem("product-list",JSON.stringify(Products));
    const totalPrice=Products.reduce((acc,p)=>acc+Number(p.price),0);
    setCartvalue(totalPrice);
  },[Products])
  const addnewproduct=(product)=>{
    setProducts([product,...Products]);
  }
  const deleteProductHandler=(idToRemove)=>{
    const newArr=Products.filter((product)=>product.id !== idToRemove);
    localStorage.setItem("product-list",JSON.stringify(newArr));
    setProducts(newArr);
  }
  return (
    <div className="App">
      <Navbar/>
      <ProductForm newproduct={addnewproduct}/>
      <ProductList productArr={Products} deleteProduct={deleteProductHandler} cartvalue={Cartvalue}/>
    </div>
  );
}

export default App;
