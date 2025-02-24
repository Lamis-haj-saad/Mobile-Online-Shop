/*import BillingDetails from "../components/checkout/BillingDetails";
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

export default function Checkout() {
    const methods = useForm();
    const { handleSubmit } = methods;

    const userId = useSelector((state) => state.user.user);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        const order = {
            id: cart.id, 
            total: cart.total,  
            subTotal: cart.subtotal,
            tax: cart.tax,
            items: cart.items.map(item => ({
                id: item.id,
                name: item.name,
                imageName: item.image,
                price: item.price,
                qty: item.qty,
            })),
            customer: {
                email: data.billing.email,  
                phone: data.billing.phone,  
                note: data.billing.note || "",
                billingAdress: {
                    civility: data.billing.civility,
                    firstName: data.billing.firstName,
                    lastName: data.billing.lastName,
                    zipCode: data.billing.zipCode,
                    street: data.billing.street,
                    companyName: data.billing.companyName,
                    county: data.billing.county,
                    city: data.billing.city,
                },
                shippingAdress: {
                    civility: data.shipping.civility,
                    firstName: data.shipping.firstName,
                    lastName: data.shipping.lastName,
                    zipCode: data.shipping.zipCode,
                    street: data.shipping.street,
                    companyName: data.shipping.companyName,
                    county: data.shipping.county,
                    city: data.shipping.city,
                }
            },
            paymentMethod: data.payment.payment_method,  
        };
    
        try {
            const response = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log("Order placed successfully", result);
    
                // Displaying the alert after order is placed successfully
                //alert("Your order has been successfully placed!");
    
                // Dispatching action to clear user ID from the store
                dispatch(clearUserId());
                console.log("new id :" ,userId);
                // Deleting the cart from the backend
                const cartDeleteResponse = await fetch(`http://localhost:3000/carts/${cart.id}`, { method: "DELETE" });
    
                if (!cartDeleteResponse.ok) {
                    console.error("Failed to delete the cart from the database");
                    return;
                }
    
                // Resetting the cart in the store
                dispatch(setCart(null));
                console.log("new cart :" , cart);
    
                // Redirecting to the homepage
                navigate('/');  // Redirect to the home page
            } else {
                console.error("Error placing order", response.statusText);
            }
        } catch (error) {
            console.error("Network error", error);
        }
    };
    

    return (
        <div>
            <div className="product-big-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-bit-title text-center">
                                <h2>Checkout</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-product-area">
                <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-content-right">
                                <div className="woocommerce">
                                    <FormProvider {...methods}>
                                        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                                            <div id="customer_details" className="col2-set">
                                                <div className="col-6">
                                                    <BillingDetails />
                                                </div>
                                                <div className="col-6">
                                                    <ShippingDetails />
                                                </div>
                                            </div>

                                            <OrderReview cart={cart} />
                                            <PaymentMethods 
                                            register={methods.register} 
                                            errors={methods.formState.errors}
                                            />
                                            <div class="form-row place-order">

                                            <button type="submit" className="button alt" id="place_order">
                                                Place Order
                                            </button>   

                                            </div>
                                            
                                        </form>
                                    </FormProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
