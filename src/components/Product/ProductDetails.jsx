import { useDiscount } from "../../store";
import AddToCartButton from "../cart/AddToCartButton";

export default function ProductDetails({product}){
    return(
        <div className="col-sm-6">
            <div className="product-inner">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-inner-price">
                    <ins>{useDiscount(product.price, product.discountRate)}</ins> <del>{product.price}</del>
                </div>  
                <form action="" className="cart">
                    <div className="quantity">
                        <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1"/>
                    </div>
                    <AddToCartButton product={product}/>
                </form>        
                <div className="product-inner-category">
                    <h2>Product Description</h2>  
                    <p>{product.description}</p>
                </div>        
            </div>
        </div>
    )
}