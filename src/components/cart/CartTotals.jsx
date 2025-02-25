import { useSelector } from 'react-redux';

export default function CartTotals(){
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return(
        <div className="cart_totals ">
            <h2>Cart Totals</h2>
            <table cellspacing="0">
                <tbody>
                    <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td><span className="amount">{totalPrice} €</span></td>
                    </tr>
                    <tr className="shipping">
                        <th>Taxe (20%)</th>
                        <td>{(totalPrice * 0.2).toFixed(2)} €</td>
                    </tr>
                    <tr className="order-total">
                        <th>Order Total</th>
                        <td><strong><span className="amount">{(totalPrice * 1.2).toFixed(2)} €</span></strong> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}