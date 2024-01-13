import ProductItem from './productItem';
import './productList.css'

const productList=(props)=>{
    const removeProduct=(deleteID)=>{
        props.deleteProduct(deleteID);
    }
    return(
        <div className='product-container'>
            <h3>Total Cart Value : {`Rs ${props.cartvalue}`}</h3> 
            <h2>Products</h2>
            <ul>
                {
                    props.productArr.map((product)=>{
                        return <ProductItem  key={product.id} id={product.id} name={product.name} price={product.price} onDelete={removeProduct}/>
                    })
                }
            </ul>
        </div>
    )
}
export default productList;