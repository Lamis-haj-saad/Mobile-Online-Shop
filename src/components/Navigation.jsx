import { NavLink } from "react-router-dom"
export default function Navigation(){
    return(
        <div className="mainmenu-area">
            <div className="container">
                <div className="row">
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-expand">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "navactive" : ""} end>Home</NavLink></li>
                            <li><NavLink to="shop" className={({ isActive }) => isActive ? "navactive" : ""}>Samsung</NavLink></li>
                            <li><NavLink to="shop/s" className={({ isActive }) => isActive ? "navactive" : ""}>Apple</NavLink></li>
                            <li><NavLink to="shop/s" className={({ isActive }) => isActive ? "navactive" : ""}>LG</NavLink></li>
                            <li><NavLink to="shop/s" className={({ isActive }) => isActive ? "navactive" : ""}>Sony</NavLink></li>
                            <li><NavLink to="shop/s" className={({ isActive }) => isActive ? "navactive" : ""}>Huawei</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}