import Input from "./Input";
import SelectInput from "./SelectInput";
import { useFormContext } from "react-hook-form"; // To use context

export default function BillingDetails({ setFormData, formData }) {
  const { register, formState: { errors } } = useFormContext();
  /*
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      billing: {
        ...formData.billing,
        [name]: value,
      },
    });
  };
*/
  return (
    <div className="col-6">
      <div className="woocommerce-billing-fields">
        <h3>Billing Details</h3>
        <SelectInput id="billing_country" onChange={handleInputChange} ref={register({ required: true })} required>Civility </SelectInput>
        <Input onChange={handleInputChange} id="billing_first_name" ref={register({ required: "First name is required" })} required>First Name </Input>
        {errors.billing_first_name && (
          <p style={{ color: "red" }}>First name is required</p> // Display error message
        )}
        <Input onChange={handleInputChange} id="billing_last_name" required>Last Name </Input>
        <div className="clear"></div>
        <Input onChange={handleInputChange} id="billing_company" >Company Name </Input>
        <Input onChange={handleInputChange} id="billing_address_1" placeholder="Street address" required>Address </Input>
        <Input onChange={handleInputChange} id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)"></Input>
        <Input onChange={handleInputChange} id="billing_city" placeholder="Town / City" required>Town / City </Input>
        <Input onChange={handleInputChange} id="billing_state" placeholder="State / County" required>Country </Input>
        <Input onChange={handleInputChange} id="billing_postcode" placeholder="Postcode / Zip" required>Postcode </Input>
        <div className="clear"></div>
        <Input onChange={handleInputChange} id="billing_email" required>Email Address </Input>
        <Input onChange={handleInputChange} id="billing_phone" required>Phone </Input>
        <div className="clear"></div>
      </div>
    </div>
  )
}