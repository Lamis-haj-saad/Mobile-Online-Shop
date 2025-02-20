import OtherBrands from "../components/Product/OtherBrands";
import ProductDetails from "../components/Product/ProductDetails";
import ProductView from "../components/Product/ProductView";
import RecentlyViewed from "../components/Product/RecentlyViewed";

export default function ProductPage(){
    return(
        <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <RecentlyViewed/>
                    <OtherBrands/>
                </div>
                <div className="col-md-8">
                    <div className="product-content-right">
                        <div className="product-breadcroumb">
                            <a href="">Home</a>
                            <a href="">Category Name</a>
                            <a href="">Sony Smart TV - 2015</a>
                        </div>
                        <div className="row">
                            <ProductView/>
                            <ProductDetails/>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        </div>
    )
}