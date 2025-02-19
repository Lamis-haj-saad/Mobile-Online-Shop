import BrandsArea from "../components/home/BrandsArea"
import Carousel from "../components/home/Carousel"
import PromoArea from "../components/home/PromoArea"
import RecentlyViewed from "../components/home/RecentlyViewed"
import TopNew from "../components/home/TopNew"
import TopSeller from "../components/home/TopSeller"
export default function Home(){
    return(
        <>
    <div className="container">
    <Carousel/>
    <PromoArea/>
    <BrandsArea/>
     <div className="product-widget-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <TopSeller/>
          <RecentlyViewed/>
          <TopNew/>
        </div>
      </div>
    </div>
    
  
    </div>
    <script src="https://code.jquery.com/jquery.min.js"></script>
	 <script src="../assets/js/bootstrap.min.js" > </script>
  </>
    )
}