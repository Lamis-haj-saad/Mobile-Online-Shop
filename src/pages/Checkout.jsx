import BillingDetails from "../components/checkout/BillingDetails";
import OrderDetails from "../components/checkout/OrderDetails";
import ShippingDetails from "../components/checkout/ShippingDetails";
import ProductTitle from "../components/shop/ProductTitle";
import Payment from "../components/checkout/Payment";
import PlaceOrder from "../components/checkout/PlaceOrder";

export default function Checkout(){
    return(
        <div>
        <ProductTitle>Checkout</ProductTitle>
        <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-content-right">
                        <div className="woocommerce">
                            <form encType="multipart/form-data" action="#" className="checkout" method="post" name="checkout">
                                <div id="customer_details" className="col2-set">
                                    <BillingDetails/>
                                    <ShippingDetails/>
                                </div>
                                <h3 id="order_review_heading">Your order</h3>
                                <div id="order_review" style={{position: "relative"}}>
                                    <OrderDetails/>
                                    <div id="payment">
                                        <Payment/>
                                        <PlaceOrder/>
                                    </div>
                                </div>
                            </form>
                        </div>                       
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    
    </div>
    )
}
/*
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BillingDetails from "../component/BillingDetails";
import ShippingDetails from "../component/ShippingDetails";
import PaymentMethods from "../component/PaymentMethods";
import OrderReview from "../component/OrderReview";
import { clearUserId } from '../store/userSlice';
import { setCart } from  "../store/cartSlice";
*/
