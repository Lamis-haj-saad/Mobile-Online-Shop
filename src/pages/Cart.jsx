import CartDetails from "../components/cart/CartDetails";
import CartTotals from "../components/cart/CartTotals";
import Interests from "../components/cart/Interests";

export default function Cart(){
    return(
        <>
        <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-content-right">
                        <div className="woocommerce">
                            <CartDetails/>
                        <div className="cart-collaterals">
                        <Interests/>
                        <CartTotals/>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  </>
    )
}