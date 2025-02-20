import PaymentMethod from "./PaymentMethod";

export default function Payment(){
    return(
        <ul className="payment_methods methods">
            {/* <ul className="payment_methods methods" checked="checked"> */}
            <PaymentMethod value="bacs" title="Direct Bank Transfer ">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
            </PaymentMethod>
            <PaymentMethod value="cheque" title="Cheque Payment " appearance={{display: "none" }}>
                Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
            </PaymentMethod>
            <PaymentMethod value="paypal" title="PayPal " appearance={{display: "none" }} >
                Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
            </PaymentMethod>
        </ul>
    )
} 