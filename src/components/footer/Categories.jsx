import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Categories(){
    const [categories, setCategory] = useState([]);
    
      useEffect(() => {
    
        const fetchCategory = async () => {
          try {
            const response = await fetch("http://localhost:3000/categories");
            if (!response.ok) throw new Error("Failed to fetch categories");
            const data = await response.json();
            setCategory(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchCategory();
      }, []);
    return(
        <div className="col-md-4 col-sm-6">
            <div className="footer-menu">
                <h2 className="footer-wid-title">Categories </h2>
                <ul>
                {categories.map((category) => (  
                    <li key={category.name}>  
                    <NavLink  
                    to={`shop/${category.productListId}`}  
                    state={{ categoryName: category.name }}                      
                    >  
                    {category.name}  
                    </NavLink>  
                    </li>  ))}
                    </ul>                        
            </div>
        </div>
    )
}