import { Link, Router } from "react-router-dom";
import logo from '../../styles/img/logo.png';

export default function Header(){
    return (
        <>
        <div class="site-branding-area">
         <div class="container">
             <div class="row">
                 <div class="col-sm-4">
                     <div class="logo" style="    width: 100px; height: 100px;">
                          <h1><Link to="/Home"><img src={logo}/></Link></h1>
                     </div>
                 </div>
                    <div class="col-sm-4">
                        <input type="text" style="margin-top: 30px" placeholder="Search products..."/>
                        <input type="button" value="Search"/>
                    </div>
                     
                 <div class="col-sm-4">
 
                     <div class="shopping-item">
                        <Link to="Cart">Cart :  <span class="cart-amunt">100.58 €</span> <i class="fa fa-shopping-cart"></i> <span class="product-count">5</span></Link>
                     </div>
                 </div>
             </div>
         </div>
        </div>
 
       <div class="mainmenu-area">
         <div class="container">
             <div class="row">
                 <div class="navbar">
                     <ul class="nav navbar-nav navbar-expand">
                         <li class="active"><Link to="index.html">Home</Link></li>
                         <li><Link to="shop.html">Samsung</Link></li>
                         <li><Link to="shop.html">Apple</Link></li>
                         <li><Link to="shop.html">LG</Link></li>
                         <li><Link to="shop.html">Sony</Link></li>
                         <li><Link to="shop.html">Huawei</Link></li>
                     </ul>
                 </div>  
             </div>
         </div>
     </div> 
     </>
    )
}