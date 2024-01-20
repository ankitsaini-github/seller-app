import './productItem.css'
import { useContext } from 'react';
import ProductContext from './store/ProductContext';

const ProductItem=(props)=>{
    const ctx=useContext(ProductContext);
    const deleteproductHandler=(e)=>{
        ctx.deleteProduct(props.id,props.price)
    }
    return(
        <li id={props.id} className='product-item'>
            <div className='product-info'>
                <span>{`Product Name : ${props.name}`}</span>
                <span>{`Price : Rs ${props.price}`}</span>
                {/* {`Price : Rs ${props.price} / Product Name : ${props.name}`} */}
            </div>
            <button className='del-btn' type='click' onClick={deleteproductHandler}>Delete</button>
        </li>
    )
}
export default ProductItem;