import HomeProduct from "./HomeProduct";

export default function TopSeller(){
    return(
        <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top Sellers</h2>
              <a href="#" className="wid-view-more">View All</a>
              {/**<Link to="#" className="wid-view-more">View All</Link>*/}
              <HomeProduct title="Sony Smart TV - 2015" />
              <HomeProduct title="Apple new mac book 2015" />
              <HomeProduct title="Apple new i phone 6" />
            
            </div>
          </div>
    )
}