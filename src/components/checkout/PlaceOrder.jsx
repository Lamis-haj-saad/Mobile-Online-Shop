export default function PlaceOrder(){
    return(
        <>
        <div className="form-row place-order">
            <input type="button" data-value="Place order" value="Place order" id="place_order" name="woocommerce_checkout_place_order" className="button alt"/>
        </div>
        <div className="clear"></div>
        </>
    )
}