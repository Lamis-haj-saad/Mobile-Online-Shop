export default function PaymentMethod({value, title, children, classname='', appearance={} }){
    return(
        <li className={classname}>
            <input type="radio" data-order_button_text="" value={value} name="payment_method" className="input-radio" id={"payment_method_"+value}/>
            {/*<input type="radio" data-order_button_text="" checked={checked?? ""} value={value} name="payment_method" className="input-radio" id={"payment_method_"+value}/> */}
            <label htmlFor={"payment_method_"+value}>{title} </label>
            <div style={ appearance } className={"payment_box payment_method_"+value}>
                <p>{children}</p>
            </div>
        </li>
    )
}