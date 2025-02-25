import BillingDetails from "../components/checkout/BillingDetails";
import OrderDetails from "../components/checkout/OrderDetails";
import ShippingDetails from "../components/checkout/ShippingDetails";
import ProductTitle from "../components/shop/ProductTitle";
import Payment from "../components/checkout/Payment";
import PlaceOrder from "../components/checkout/PlaceOrder";
import { useDispatch } from "react-redux";
import { clearCart } from "../components/redux/CartSlice";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";


export default function Checkout() {
  const dispatch = useDispatch();
  const methods = useForm();
  const [formData, setFormData] = useState({
    billing: {},
    shipping: {},
    paymentMethod: "",
    customer: {
      email: "",
      phone: "",
    },
    items: [], // Add items as per your product details
    total: 0,
    subTotal: 0,
    tax: 0,
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      dispatch(clearCart);
      console.log("Order placed successfully:", data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  return (
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
                      <FormProvider {...methods}>
                        <BillingDetails setFormData={setFormData} formData={formData} />
                        <ShippingDetails setFormData={setFormData} formData={formData} />
                      </FormProvider>
                    </div>
                    <h3 id="order_review_heading">Your order</h3>
                    <div id="order_review" style={{ position: "relative" }}>
                      <OrderDetails />
                      <div id="payment">
                        <Payment setFormData={setFormData} formData={formData} />
                        <PlaceOrder handleSubmit={handleSubmit} />
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
