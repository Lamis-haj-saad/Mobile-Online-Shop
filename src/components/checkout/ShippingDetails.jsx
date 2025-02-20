import Input from "./Input";
import SelectInput from "./SelectInput";

export default function ShippingDetails(){
    return(
        <div className="col-6">
            <div className="woocommerce-shipping-fields">
                <h3 id="ship-to-different-address">
                <label className="checkbox" htmlFor="ship-to-different-address-checkbox">Ship to a different address?</label>
                <input type="checkbox" value="1" name="ship_to_different_address" className="input-checkbox" id="ship-to-different-address-checkbox"/>
                {/*<input type="checkbox" value="1" name="ship_to_different_address" checked="checked" className="input-checkbox" id="ship-to-different-address-checkbox"/> */}
                </h3>
                <div className="shipping_address" style={{display: "block"}}>
                    <SelectInput id="shipping_country" required>Civility </SelectInput>
                    <Input id="shipping_first_name" required>First Name </Input>
                    <Input id="shipping_last_name" required>Last Name </Input>
                    <div className="clear"></div>
                    <Input id="shipping_company" >Company Name </Input>
                    <Input id="shipping_address_1" placeholder="Street address" required>Address </Input>
                    <Input id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)"></Input>
                    <Input id="shipping_city" placeholder="Town / City" required>Town / City </Input>
                    <Input id="shipping_state" placeholder="State / County" required>Country </Input>
                    <Input id="shipping_postcode" placeholder="Postcode / Zip" required>Postcode </Input>
                    <div className="clear"></div>
                    <Input id="order_comments" placeholder="Notes about your order, e.g. special notes htmlFor delivery." textArea>Order Notes</Input>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    )
}