import { useDiscount, useStar } from "../../store.jsx";
import { Link } from "react-router-dom";

export default function HomeProduct({ product }) {
  if (!product) {
    return null;
  }

  const brandName = product.name.split(' ')[0];

  return (
    <div className="single-wid-product">
      <Link to={`productPage/${product.id}`}>
        <img src={`../../produts-img/${brandName}/${product.imageName}`} alt="" className="product-thumb" />
      </Link>
      <h2>
        <Link to={`productPage/${product.id}`}>{product.name || "Unnamed Product"}</Link>
      </h2>
      <div className="product-wid-rating">
      {Array.from({ length: product.review }).map((_, index) => (  
          <i key={index} className="fa fa-star"></i>  
        ))}
      </div>
      <div className="product-wid-price">
        <ins> {useDiscount(product.price, product.discountRate)} </ins>
        <del> {product.price ? `$${product.price}` : "Price Unavailable"} </del>
      </div>
    </div>
  );
}
