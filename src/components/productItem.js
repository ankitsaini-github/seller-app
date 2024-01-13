import './productItem.css'
const ProductItem=(props)=>{
    const deleteproduct=(e)=>{
        
    }
    return(
        <li className='product-item'>
            <div className='product-info'>
                {`Price : rs${props.price} / Product Name : ${props.name}`}
            </div>
            <button className='del-btn' type='click' onClick={deleteproduct}>Delete Product</button>
        </li>
    )
}
export default ProductItem;