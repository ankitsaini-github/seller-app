import './productForm.css'

const ProductForm=(props)=>{
    const addproduct=(e)=>{
        e.preventDefault();
        const product={
            id:e.target[0].value,
            price: e.target[1].value,
            name: e.target[2].value
        }
        props.newproduct(product);
    }
    return(
        <form className='product-form' onSubmit={addproduct}>
            <label htmlFor='productid'>Product ID</label>
            <input type='number' id='productid'/>
            <label htmlFor='sellingprice'>Selling Price</label>
            <input type='number' id='sellingprice'/>
            <label htmlFor='productname'>Product Name</label>
            <input type='text' id='productname'/>
            <button type='submit'>Add Product</button>
        </form>
    )
}
export default ProductForm;