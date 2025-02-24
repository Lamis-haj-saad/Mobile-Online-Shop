import img1 from "../../assets/img/product-thumb-1.jpg";
import img2 from "../../assets/img/product-thumb-2.jpg";
import img3 from "../../assets/img/product-thumb-3.jpg";

export default function ProductView({product,brand}){
    return(
        <div className="col-sm-6">
            <div className="product-images">
                <div className="product-main-img">
                    <img src={`../../../produts-img/${brand}/${product.imageName}`} alt=""/>
                </div>
                <div className="product-gallery">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                </div>
            </div>
        </div>
    )
}