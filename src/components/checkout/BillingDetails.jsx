import Input from "./Input";
import SelectInput from "./SelectInput";

export default function BillingDetails(){
    return(
        <div className="col-6">
            <div className="woocommerce-billing-fields">
                <h3>Billing Details</h3>
                <SelectInput id="billing_country" required>Civility </SelectInput>
                <Input id="billing_first_name" required>First Name </Input>
                <Input id="billing_last_name" required>Last Name </Input>
                <div className="clear"></div>
                <Input id="billing_company" >Company Name </Input>
                <Input id="billing_address_1" placeholder="Street address" required>Address </Input>
                <Input id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)"></Input>
                <Input id="billing_city" placeholder="Town / City" required>Town / City </Input>
                <Input id="billing_state" placeholder="State / County" required>Country </Input>
                <Input id="billing_postcode" placeholder="Postcode / Zip" required>Postcode </Input>
                <div className="clear"></div>
                <Input id="billing_email" required>Email Address </Input>
                <Input id="billing_phone" required>Phone </Input>
                <div className="clear"></div>
            </div>
        </div>
    )
}