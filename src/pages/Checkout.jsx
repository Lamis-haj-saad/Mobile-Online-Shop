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
  const [isChecked, setIsChecked] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [apiError, setApiError] = useState(null);

/*
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
  });*/

 const onSubmit = async () => {
  setApiError(null); 
    if (isChecked) {
      // Include shipping details in the form data when the checkbox is checked
      setFormData({
        ...formData,
        shipping: formData.shipping,
      });
    } else {
      // Do not include shipping details if the checkbox is not checked
      setFormData({
        ...formData,
        shipping: {}, // Or whatever default you want
      });
    }
    /*
  const dataToSubmit = isChecked
    ? formData // Include full formData with shipping
    : {
      ...formData,
      shipping: {}, // Exclude shipping details when checkbox is unchecked
    };*/
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
                    <FormProvider {...methods}>
                      <div id="customer_details" className="col2-set">
                        <BillingDetails setFormData={setFormData} formData={formData} />
                        <ShippingDetails setFormData={setFormData} formData={formData} setIsChecked={setIsChecked} isChecked={isChecked} />
                        </div>
                        <h3 id="order_review_heading">Your order</h3>
                        <div id="order_review" style={{ position: "relative" }}>
                        <OrderDetails />
                        <div id="payment">
                          <Payment setFormData={setFormData} formData={formData} />
                          <PlaceOrder/>
                        </div>
                      </div>
                    </FormProvider>
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
