import { Link } from "react-router-dom";
export default function ShoppingCart (){
    return(
        <div className="col-sm-4">
            <div className="shopping-item">
                <Link to="/cart">Cart :  <span className="cart-amunt">100.58 €</span> 
                <i className="fa fa-shopping-cart"></i> 
                <span className="product-count">5</span></Link>
            </div>
        </div>
    )
}