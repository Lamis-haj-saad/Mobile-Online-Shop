import ShopProduct from "../components/shop/ShopProduct";  
import ProductTitle from "../components/shop/ProductTitle";  
import { useState, useEffect } from "react";  

export default function TopNewPage() {    
    const [products, setProducts] = useState([]); 

    useEffect(() => {  
        const fetchProducts = async () => {  
            try {  
                const response = await fetch("http://localhost:3000/top-new-products");  
                if (!response.ok) {  
                    throw new Error("Failed to fetch products");  
                }  
                const data = await response.json();  
                setProducts(data);  
            } catch (error) {  
                console.error(error);  
            }  
        };  
        fetchProducts();  
    }, []);  

    return (  
        <div>  
            <ProductTitle>Top New</ProductTitle>  
            <div className="single-product-area">  
                <div className="zigzag-bottom"></div>  
                <div className="container">  
                    <div className="row">  
                        {products.map((item) => (  
                            <ShopProduct product={item} key={item.id}>  
                            {item.name}   
                            </ShopProduct>  
                        ))}  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}