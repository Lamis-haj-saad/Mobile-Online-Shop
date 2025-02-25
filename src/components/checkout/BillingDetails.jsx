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
        <SelectInput id="billing_country"  required>Civility </SelectInput>
        <p id="billing_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
            <label className="" htmlFor="billing_country">Civility<abbr title="required" className="required">*</abbr>
            </label>
            <select className="country_to_state country_select" id="shipping_country" name="shipping_country">
                <option value="AX">Mr</option>
                <option value="AF">Mlle</option>
                <option value="AF">Mme</option>
            </select>
        </p>
        <Input id="billing_first_name"  required>First Name </Input>
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
/**
 * import { useFormContext } from "react-hook-form";

export default function BillingDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h3>Billing Details</h3>

      <label>Name</label>
      <input {...register("billing.name", { required: "Name is required" })} className="w-full px-3 py-2 border rounded-lg" />
      {errors.billing?.name && <p className="text-red-500">{errors.billing.name.message}</p>}

      <label>Email</label>
      <input
        type="email"
        {...register("billing.email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
        })}
        className="w-full px-3 py-2 border rounded-lg"
      />
      {errors.billing?.email && <p className="text-red-500">{errors.billing.email.message}</p>}
      
      <label>Phone</label>
      <input
        type="tel"
        {...register("billing.phone", { required: "Phone number is required" })}
        className="w-full px-3 py-2 border rounded-lg"
      />
      {errors.billing?.phone && <p className="text-red-500">{errors.billing.phone.message}</p>}
    </div>
  );
}

 */