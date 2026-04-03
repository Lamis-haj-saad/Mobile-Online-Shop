import HomeProduct from "./HomeProduct";
import { Link } from "react-router-dom";

export default function TopNew({ products }) {
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Top New</h2>
        <a href="topnew" className="wid-view-more">View All</a>
        {products && products.length > 0 ? (
          products.slice(0, 2).map((product, index) => (
            <HomeProduct key={product?.id || index} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
