export default function PlaceOrder({handleSubmit}){
    return(
        <>
        <div className="form-row place-order">
            <input onClick={handleSubmit} type="button" data-value="Place order" value="Place order" id="place_order" name="woocommerce_checkout_place_order" className="button alt"/>
        </div>
        <div className="clear"></div>
        </>
    )
}