import HomeProduct from "./HomeProduct";
export default function RecentlyViewed(){
    return(
        <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Recently Viewed</h2>
              <a href="#" className="wid-view-more">View All</a>
              <HomeProduct title="Sony playstation microsof" />
              <HomeProduct title="Sony Smart Air Condtion" />
              <HomeProduct title="Samsung gallaxy note 4" />
            </div>
          </div>
    )
}