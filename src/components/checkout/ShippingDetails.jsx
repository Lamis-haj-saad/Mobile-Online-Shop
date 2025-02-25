import Input from "./Input";
import SelectInput from "./SelectInput";
import { useState } from "react";


export default function ShippingDetails({ setFormData, formData, isChecked, setIsChecked }) {
  //const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      shipping: {
        ...formData.shipping,
        [name]: value,
      },
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="col-6">
      <div className="woocommerce-shipping-fields">
        <h3 id="ship-to-different-address">
          <label className="checkbox" htmlFor="ship-to-different-address-checkbox">Ship to a different address?</label>
          <input onChange={handleCheckboxChange} type="checkbox" value="1" name="ship_to_different_address" className="input-checkbox" id="ship-to-different-address-checkbox" />
        </h3>
        {isChecked && (
          <div className="shipping_address" style={{ display: "block" }}>
            <SelectInput id="shipping_country" onChange={handleInputChange} required>Civility </SelectInput>
            <Input onChange={handleInputChange} id="shipping_first_name" required>First Name </Input>
            <Input onChange={handleInputChange} id="shipping_last_name" required>Last Name </Input>
            <div className="clear"></div>
            <Input onChange={handleInputChange} id="shipping_company" >Company Name </Input>
            <Input onChange={handleInputChange} id="shipping_address_1" placeholder="Street address" required>Address </Input>
            <Input onChange={handleInputChange} id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)"></Input>
            <Input onChange={handleInputChange} id="shipping_city" placeholder="Town / City" required>Town / City </Input>
            <Input onChange={handleInputChange} id="shipping_state" placeholder="State / County" required>Country </Input>
            <Input onChange={handleInputChange} id="shipping_postcode" placeholder="Postcode / Zip" required>Postcode </Input>
            <div className="clear"></div>
            <Input onChange={handleInputChange} id="order_comments" placeholder="Notes about your order, e.g. special notes htmlFor delivery." textArea>Order Notes</Input>
            <div className="clear"></div>
          </div>
        )}
      </div>
    </div>
  )
}
/**
import { useFormContext } from "react-hook-form";

export default function ShippingDetails({ isChecked, setIsChecked }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h3>Shipping Details</h3>

      <label>
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        Ship to a different address?
      </label>

      {isChecked && (
        <>
          <label>Address</label>
          <input
            {...register("shipping.address", { required: "Address is required" })}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {errors.shipping?.address && <p className="text-red-500">{errors.shipping.address.message}</p>}

          <label>City</label>
          <input
            {...register("shipping.city", { required: "City is required" })}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {errors.shipping?.city && <p className="text-red-500">{errors.shipping.city.message}</p>}
        </>
      )}
    </div>
  );
}

 */