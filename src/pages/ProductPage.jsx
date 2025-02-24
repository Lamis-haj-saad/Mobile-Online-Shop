import OtherBrands from "../components/Product/OtherBrands";  
import ProductDetails from "../components/Product/ProductDetails";  
import ProductView from "../components/Product/ProductView";  
import RecentlyViewed from "../components/Product/RecentlyViewed";  
import { Link, useParams } from 'react-router-dom';  
import { useState, useEffect } from 'react';  
import Cookies from "js-cookie";


export default function ProductPage() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    

    useEffect(() => {  
        const fetchProduct = async () => {  
            try {  
                const response = await fetch(`http://localhost:3000/products/${id}`); 
                if (!response.ok) {  
                    throw new Error("Failed to fetch product data");  
                }  
                const productData = await response.json();  
                setProduct(productData); 
                updateRecentlyViewed(id);
            } catch (error) {  
                console.error("Error fetching product:", error);  
            }  
        };  

        fetchProduct();  
    }, [id]);  

    const updateRecentlyViewed = (productId) => {
        let viewed = Cookies.get("recentlyViewed");
        viewed = viewed ? JSON.parse(viewed) : [];
    
        if (!viewed.includes(productId)) {
          viewed.unshift(productId); 
          if (viewed.length > 8) viewed.pop(); 
          Cookies.set("recentlyViewed", JSON.stringify(viewed), { expires: 7 });
        }
      };

    if (!product) {  
        return <div>Loading...</div>;
    }  

    const brandName = product.name.split(' ')[0]; 

    return (  
        <div>
            <div className="single-product-area">  
                <div className="zigzag-bottom"></div>  
                <div className="container">  
                    <div className="row">  
                        <div className="col-md-4">  
                            <RecentlyViewed/>  
                            <OtherBrands/>  
                        </div>  
                        <div className="col-md-8">  
                            <div className="product-content-right">  
                                <div className="product-breadcroumb">  
                                    <Link to="/">Home</Link>
                                    <Link to=".."> {brandName} </Link>   
                                    <Link to="">{product.name}</Link>  
                                </div>  
                                <div className="row">  
                                    <ProductView product={product} brand={brandName} />  
                                    <ProductDetails product={product} />  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>
    );  
}
