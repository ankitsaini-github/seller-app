import './productItem.css'
const ProductItem=(props)=>{
    const deleteproductHandler=(e)=>{
        props.onDelete(props.id,props.price)
    }
    return(
        <li id={props.id} className='product-item'>
            <div className='product-info'>
                {`Price : Rs ${props.price} / Product Name : ${props.name}`}
            </div>
            <button className='del-btn' type='click' onClick={deleteproductHandler}>Delete</button>
        </li>
    )
}
export default ProductItem;