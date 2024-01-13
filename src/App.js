import React,{useState} from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import ProductForm from './components/productForm.js';
import ProductList from './components/productList.js';
function App() {
  const [Products,setProducts]=useState([]);
  const addnewproduct=(product)=>{
    setProducts([product,...Products]);
    localStorage.setItem(product.id,JSON.stringify(product));
  }
  return (
    <div className="App">
      <Navbar/>
      <ProductForm newproduct={addnewproduct}/>
      <ProductList productArr={Products}/>
    </div>
  );
}

export default App;
