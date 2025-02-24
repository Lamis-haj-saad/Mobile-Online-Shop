import HomeProduct from "./HomeProduct";

export default function TopSeller({products}){
    return(
        <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top Sellers</h2>
              <a href="topseller" className="wid-view-more">View All</a>
              {/**<Link to="#" className="wid-view-more">View All</Link>*/}
              {products && products.length > 0 ? (
                  products.slice(0, 2).map((product, index) => (
                  <HomeProduct key={product?.id || index} product={product} />
                  ))
                  ) : (
                  <p>No products available</p>
                  )}
            </div>
          </div>
    )
}