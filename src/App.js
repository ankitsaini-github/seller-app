import React,{useState} from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import ProductForm from './components/productForm.js';
import ProductList from './components/productList.js';
function App() {
  const [Products,setProducts]=useState([]);
  const [Cartvalue,setCartvalue]=useState(0);
  const addnewproduct=(product)=>{
    setProducts([product,...Products]);
    setCartvalue(Cartvalue+Number(product.price));
    localStorage.setItem(product.id,JSON.stringify(product));
  }
  const deleteProductHandler=(idToRemove)=>{
    const newArr=Products.filter((product)=>product.id !== idToRemove);
    let product=JSON.parse(localStorage.getItem(idToRemove))
    localStorage.removeItem(idToRemove);
    setCartvalue(Cartvalue-Number(product.price));
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
