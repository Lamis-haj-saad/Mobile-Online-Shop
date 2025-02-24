import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import ShopProduct from "../components/shop/ShopProduct";
import ProductTitle from "../components/shop/ProductTitle";

export default function RecentlyViewedPage() {
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
    <div>
     <ProductTitle>Recently Viewed Products</ProductTitle>
     <div className="single-product-area">  
          <div className="zigzag-bottom"></div>  
          <div className="container">  
               <div className="row">  
               {products.map((product) => (
               <ShopProduct key={product.id} product={product}/>
               ))}  
               </div>  
          </div>  
     </div>  
    </div>
  );
}
