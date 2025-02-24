

export default function CartTotal({ total, subTotal, tax}){
    
    //console.log(cart);




    return(
        <div className="cart_totals ">
        <h2>Cart Totals</h2>
        <table cellSpacing={0}>
            <tbody>
            <tr className="cart-subtotal">
                <th>Cart Subtotal</th>
                <td>
                <span className="amount">
                    ${subTotal ? subTotal.toFixed(2) : '0.00'}
                </span>
                </td>
            </tr>
            <tr className="shipping">
                <th>Taxe (20%)</th>
                <td>
                ${tax ? tax.toFixed(2) : '0.00'}
                </td>
            </tr>
            <tr className="order-total">
                <th>Order Total</th>
                <td>
                <strong>
                    <span className="amount">
                    ${total ? total.toFixed(2) : '0.00'}
                    </span>
                </strong>
                </td>
            </tr>
            </tbody>
        </table>
        </div>

    )
}