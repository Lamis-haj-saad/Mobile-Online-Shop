export default function HomeProduct({title}){
    return(
        <div className="single-wid-product">
                <a href="single-product.html">
                  <img src="../assets/img/product-thumb-2.jpg" alt className="product-thumb" />
                </a>
                <h2>
                  <a href="single-product.html">{title}</a>
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
    )
}