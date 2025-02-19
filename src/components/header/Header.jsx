import Logo from "./Logo";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
    return (
        <div className="container">
            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <Logo/>
                        <Search/>
                        <ShoppingCart/>    
                    </div>
                </div>
            </div>
        </div>
    );
}
