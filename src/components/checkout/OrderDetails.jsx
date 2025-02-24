import { useSelector } from "react-redux";

export default function OrderDetails() {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const products = useSelector((state) => state.cart.items);

    return (
        <table className="shop_table">
            <thead>
                <tr>
                    <th className="product-name">Product</th>
                    <th className="product-total">Total</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr className="cart_item">
                        <td className="product-name">
                            Ship Your Idea <strong className="product-quantity">× {product.qty}</strong></td>
                        <td className="product-total">
                            <span className="amount">{product.price} €</span></td>
                    </tr>
                ))}

            </tbody>
            <tfoot>
                <tr className="cart-subtotal">
                    <th>Cart Subtotal</th>
                    <td><span className="amount">{totalPrice} € </span>
                    </td>
                </tr>
                <tr className="shipping">
                    <th>Taxe (20%)</th>
                    <td>
                        {totalPrice * 0.2} €
                    </td>
                </tr>
                <tr className="order-total">
                    <th>Order Total</th>
                    <td><strong><span className="amount">{totalPrice * 1.2} € </span></strong></td>
                </tr>
            </tfoot>
        </table>
    )
}