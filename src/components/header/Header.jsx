import Logo from "./Logo";
import Search from "./Search";
import Cart from "./ShoppingCart";

export default function Header() {
    return (
        <div className="container">
            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <Logo/>
                        <Search/>
                        <Cart/>    
                    </div>
                </div>
            </div>
        </div>
    );
}
