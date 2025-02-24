import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Navigation(){
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
        <div className="mainmenu-area">
            <div className="container">
                <div className="row">
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-expand">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "navactive" : ""} end>Home</NavLink></li>
                            {categories.map((category) => (  
                            <li key={category.name}>  
                            <NavLink  
                            to={`shop/${category.productListId}`}  
                            state={{ categoryName: category.name }}   
                            className={({ isActive }) => (isActive ? "navactive" : "")}  
                            >  
                            {category.name}  
                            </NavLink>  
                            </li>  ))}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}