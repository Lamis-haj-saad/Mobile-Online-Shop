import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import HomeProduct from "../home/HomeProduct";

export default function RecentlyViewed() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRecentlyViewed = async () => {
      let viewed = Cookies.get("recentlyViewed");
      viewed = viewed ? JSON.parse(viewed) : [];

      if (viewed.length > 0) {
        const productPromises = viewed.map((id) =>
          fetch(`http://localhost:3000/products/${id}`).then((res) => res.json())
        );
        const productsData = await Promise.all(productPromises);
        setProducts(productsData);
      }
    };

    fetchRecentlyViewed();
  }, []);

  if (products.length === 0) return null;

  return (
    <div className="col-md-4">
      <div className="single-product-widget">
      <h2 className="product-wid-title">Recently Viewed</h2>
      <Link to="recentlyviewedpage" className="wid-view-more">View All</Link>
      {products.slice(0, 2).map((product) => ( 
          <HomeProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}