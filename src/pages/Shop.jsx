import ShopProduct from "../components/shop/ShopProduct";  
import ProductNavigation from "../components/shop/ProductNavigation";  
import ProductTitle from "../components/shop/ProductTitle";  
import { useParams, useLocation } from "react-router-dom";  
import { useState, useEffect } from "react";  

export default function Shop() {  
    const { id } = useParams();  
    const location = useLocation();  
    const [products, setProducts] = useState([]);  
    const [currentPage, setCurrentPage] = useState(1);  
    const productsPerPage = 12; 
    const categoryName = location.state?.categoryName || "Products";  

    useEffect(() => {  
        const fetchProducts = async () => {  
            try {  
                const response = await fetch("http://localhost:3000/products-lists");  
                if (!response.ok) {  
                    throw new Error("Failed to fetch products");  
                }  
                const data = await response.json();  
                const productList = data.find((product) => product.id === id);  
                if (productList) {  
                    setProducts(productList.items);  
                } else {  
                    setProducts([]);   
                }  
            } catch (error) {  
                console.error(error);  
            }  
        };  
        fetchProducts();  
    }, [id]);  

    // Calculate the index of the first product of the current page  
    const indexOfLastProduct = currentPage * productsPerPage;  
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;  
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct); // Get current products  

    // Calculate total number of pages  
    const totalPages = Math.ceil(products.length / productsPerPage);  

    return (  
        <div>  
            <ProductTitle>{categoryName}</ProductTitle>  
            <div className="single-product-area">  
                <div className="zigzag-bottom"></div>  
                <div className="container">  
                    <div className="row">  
                        {currentProducts.map((item) => (  
                            <ShopProduct product={item} key={item.id}>  
                            {item.name}   
                            </ShopProduct>  
                        ))}  
                    </div>  
                    <ProductNavigation   
                        currentPage={currentPage}   
                        totalPages={totalPages}  
                        setCurrentPage={setCurrentPage} 
                    />  
                </div>  
            </div>  
        </div>  
    );  
}