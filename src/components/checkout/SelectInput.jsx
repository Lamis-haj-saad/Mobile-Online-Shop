import { useFormContext } from "react-hook-form";

export default function SelectInput({ id, children, classname = '', required, ...props }) {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[id];
    return (
        <p id={id + "_field"} className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
            <label className="" htmlFor={id}>{children}{required && <abbr title="required" className="required">*</abbr>}
            </label>
            <select 
            {...register(id, {
            required: required ? `${typeof children === "string" ? children.trim() : id} is required` : false,
            validate: value => value !== "" || "Please select an option",
            })}
            className={`country_to_state country_select ${error ? "input-error" : ""}`}
            id="shipping_country" name="shipping_country">
                <option value="AX">Mr</option>
                <option value="AF">Mlle</option>
                <option value="AF">Mme</option>
            </select>
        </p>

    )
}