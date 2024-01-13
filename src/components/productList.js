import './productList.css'

const productList=(props)=>{
    return(
        <div className='product-container'>
            <h3>Total Cart Value :</h3> 
            <h2>Products</h2>
            <ul>
                {
                    props.productArr.map((product)=>{
                        
                    })
                }
            </ul>
        </div>
    )
}
export default productList;