import { Link } from "react-router-dom";
import { useDiscount } from "../../store";
import AddToCartButton from "../cart/AddToCartButton";

export default function ShopProduct({product}){
    const brandName = product.name.split(' ')[0]; 

    return(
        <div className="col-md-3 col-sm-6">
            <div className="single-shop-product">
                <div className="product-upper">
                    <Link to={`/productpage/${product.id}`}>  
                    <img src={`../../../produts-img/${brandName}/${product.imageName}`} alt=""/>  
                </Link>
                </div>
                <h2><Link to = {`/productpage/${product.id}`} >{product.name}</Link></h2>
                <div className="product-carousel-price">
                    <ins>{useDiscount(product.price,product.discountRate)}</ins> <del>{product.price}</del>
                </div>  
                <div className="product-option-shop">
                    <AddToCartButton product={product}/>
                </div>                       
            </div>
        </div>
    )
}
