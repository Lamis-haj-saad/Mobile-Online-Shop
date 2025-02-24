import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ShopProduct from "../components/shop/ShopProduct";
import ProductTitle from "../components/shop/ProductTitle";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products`);
                if (!response.ok) throw new Error("Failed to fetch products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery)
            );
            setFilteredProducts(filtered.slice(0, 12)); // Show only first 12 products
        } else {
            setFilteredProducts(products.slice(0, 12)); // Show first 12 products
        }
    }, [searchQuery, products]);

    return (
        <div>
            <ProductTitle>Search Results for: "{searchQuery}"</ProductTitle>  
            <div className="single-product-area">  
                <div className="zigzag-bottom"></div>  
                <div className="container">  
                    <div className="row">  
                         {filteredProducts.length > 0 ? (
                         filteredProducts.map((product) => (
                            <ShopProduct key={product.id} product={product} />
                         ))
                         ) : (
                         <p>No products found.</p>
                         )} 
                    </div>   
                </div>  
            </div>  
        </div>
    );
}
