import { useDispatch, useSelector } from "react-redux";
import { addToCart, setTotalPrice } from "../redux/CartSlice";
import { useDiscount } from "../../store";
export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.cart.userId);
  const brand = product.name.split(' ')[0]; 
  const reducedPrice = useDiscount(product.price, product.discountRate)
  // Function to handle add to cart
  const handleAddToCart = async () => {
    if (!userId) return; // Ensure userId exists  
      dispatch(addToCart({ userId, product: {
        id: product.id,
        name: product.name,
        imageName: brand+'/'+product.imageName ,
        price: reducedPrice,
        qty: 1
      } }));
      dispatch(setTotalPrice({reducedPrice}))
      console.log(`Added product ${product.name} to cart for user ${userId}`);
  };
  return <button className="add_to_cart_button" type="button" onClick={handleAddToCart}>Add to Cart</button>;
}
