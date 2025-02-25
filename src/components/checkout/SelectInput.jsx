export default function SelectInput({ id, children, classname = '', required, ...props }) {
    return (
        <p id={id + "_field"} className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
            <label className="" htmlFor={id}>{children}<abbr title="required" className="required">*</abbr>
            </label>
            <select className="country_to_state country_select" id="shipping_country" name="shipping_country">
                <option value="AX">Mr</option>
                <option value="AF">Mlle</option>
                <option value="AF">Mme</option>
            </select>
        </p>

    )
}