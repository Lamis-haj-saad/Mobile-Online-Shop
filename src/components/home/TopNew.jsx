import HomeProduct from "./HomeProduct";
import { Link } from "react-router-dom";

export default function TopNew(){
    return(
        <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top New</h2>
              <a href="#" className="wid-view-more">View All</a>
              
              {/**<Link to="#" className="wid-view-more">View All</Link>*/}
              <HomeProduct title="Apple new i phone 6"/>
              <HomeProduct title="Samsung gallaxy note 4"/>
              <HomeProduct title="Sony playstation microsoft"/>
            </div>
          </div>
    )
}