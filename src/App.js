import React from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import ProductForm from "./components/productForm.js";
import ProductList from "./components/productList.js";
import ProductProvider from "./components/store/ProductProvider.js";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Navbar />
        <ProductForm />
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;
