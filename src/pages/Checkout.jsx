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
  const methods = useForm({ mode: "onTouched" });
  const { handleSubmit, formState: { errors, isSubmitting } } = methods;
  const [apiError, setApiError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    billing: {},
    shipping: {},
    paymentMethod: "",
    customer: {
      email: "",
      phone: "",
    },
    items: [],
    total: 0,
    subTotal: 0,
    tax: 0,
  });

  const onSubmit = async (data) => {
    setApiError(null);
    
    const finalData = {
      ...formData,
      billing: data.billing,
      shipping: isChecked ? data.shipping : {},
    };

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form. Please try again.");
      }

      dispatch(clearCart());
      console.log("Order placed successfully:", await response.json());
    } catch (error) {
      console.error("Error placing order:", error);
      setApiError(error.message);
    }
  };

  return (
    <div>
      <ProductTitle>Checkout</ProductTitle>
      <div className="single-product-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  {apiError && <p className="text-red-500">{apiError}</p>}
                  <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="checkout">
                      <div id="customer_details" className="col2-set">
                        <BillingDetails />
                        <ShippingDetails isChecked={isChecked} setIsChecked={setIsChecked} />
                      </div>
                      <h3 id="order_review_heading">Your order</h3>
                      <div id="order_review">
                        <OrderDetails />
                        <div id="payment">
                          <Payment setFormData={setFormData} formData={formData} />
                          <PlaceOrder />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Placing Order..." : "Place Order"}
                      </button>
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
