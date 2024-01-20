import { useContext } from 'react';
import './productForm.css'
import ProductContext from './store/ProductContext';

const ProductForm=()=>{
    const ctx=useContext(ProductContext)
    const addproduct=(e)=>{
        e.preventDefault();
        const product={
            id:e.target.pid.value,
            price: e.target.sp.value,
            name: e.target.pname.value
        }
        ctx.addProduct(product);
        e.target.pid.value='';
        e.target.sp.value='';
        e.target.pname.value='';
    }
    return(
        <form className='product-form' onSubmit={addproduct}>
            <label htmlFor='productid'>Product ID</label>
            <input type='number' id='productid' name='pid' required/>
            <label htmlFor='sellingprice'>Selling Price</label>
            <input type='number' id='sellingprice' name='sp' required/>
            <label htmlFor='productname'>Product Name</label>
            <input type='text' id='productname' name='pname' required/>
            <button type='submit'>Add Product</button>
        </form>
    )
}
export default ProductForm;