import { Link } from "react-router-dom";
//import MainNavigation from "../components/MainNavigation";
import logo from '../../styles/img/logo.png';

export default function Home(){
    return(
        <>
    <div>
       <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="logo" style="    width: 100px; height: 100px;">
                         <h1><Link to="/home"><img src={logo}/></Link></h1>
                    </div>
                </div>
                   <div className="col-sm-4">
                            <input type="text" style="margin-top: 30px" placeholder="Search products..."/>
                            <input type="button" value="Search"/>
                   </div>
                    
                <div className="col-sm-4">

                    <div className="shopping-item">
                       <Link to="/cart" >
                       Cart :  <span className="cart-amunt">100.58 €</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar">
                    <ul className="nav navbar-nav navbar-expand">
                        <li className="active"><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Samsung</Link></li>
                        <li><Link to="/shop">Apple</Link></li>
                        <li><Link to="/shop">LG</Link></li>
                        <li><Link to="/shop">Sony</Link></li>
                        <li><Link to="/shop">Huawei</Link></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>   

        <div className="slider-area">
      <div className="block-slider block-slider4">
 
 
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="img/h4-slide.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="img/h4-slide2.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="img/h4-slide3.png" alt="Third slide"/>
    </div>
  </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
    </div>
  
  
      <div className="promo-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo1">
              <i className="fa fa-refresh"></i>
              <p>30 Days return</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo2">
              <i className="fa fa-truck"></i>
              <p>Free shipping</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo3">
              <i className="fa fa-lock"></i>
              <p>Secure payments</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo4">
              <i className="fa fa-gift"></i>
              <p>New products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
	

  
	<div className="brands-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="brand-wrapper">
                        <div className="brand-list">
                            <img src="img/brand1.png" alt=""/>
                            <img src="img/brand2.png" alt=""/>
                            <img src="img/brand3.png" alt=""/>
                            <img src="img/brand4.png" alt=""/>
                            <img src="img/brand5.png" alt=""/>
                            <img src="img/brand6.png" alt=""/>
                            <img src="img/brand1.png" alt=""/>
                            <img src="img/brand2.png" alt=""/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
     <div className="product-widget-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top Sellers</h2>
              <a href className="wid-view-more">View All</a>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-1.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-2.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Apple new mac book 2015</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-3.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Apple new i phone 6</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Recently Viewed</h2>
              <a href="#" className="wid-view-more">View All</a>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-4.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Sony playstation microsoft</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-1.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Sony Smart Air Condtion</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-2.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Samsung gallaxy note 4</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top New</h2>
              <a href="#" className="wid-view-more">View All</a>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-3.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Apple new i phone 6</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-4.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Samsung gallaxy note 4</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
              <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="img/product-thumb-1.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">Sony playstation microsoft</a>
                </h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product-wid-price">
                  <ins>$400.00</ins>
                  <del>$425.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="footer-about-us">
                        <h2><span>MyStore</span></h2>
                        <p>SES Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>

                    </div>
                </div>
                
                <div className="col-md-4 col-sm-6">
                    <div className="footer-menu">
                        <h2 className="footer-wid-title">Categories </h2>
                        <ul>
                            <li><a href="#">LG</a></li>
                            <li><a href="#">Samsung</a></li>
                            <li><a href="#">Sony</a></li>
                            <li><a href="#">Apple</a></li>
                            <li><a href="#">Huawei</a></li>
                        </ul>                        
                    </div>
                </div>
                
   
                
                <div className="col-md-4 col-sm-6">
                    <div className="footer-newsletter">
                        <h2 className="footer-wid-title">Newsletter</h2>
                        <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                        <div className="newsletter-form">
                            <form action="#">
                                <input type="email" placeholder="Type your email"/>
                                <input type="submit" value="Subscribe"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  
    </div>
    <script src="https://code.jquery.com/jquery.min.js"></script>
	 <script src="../../styles/js/bootstrap.min.js" > </script>
  </>
    )
}