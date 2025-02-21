import { useLoaderData } from "react-router-dom"
import BrandsArea from "../components/home/BrandsArea"
import Carousel from "../components/home/Carousel"
import PromoArea from "../components/home/PromoArea"
import RecentlyViewed from "../components/home/RecentlyViewed"
import TopNew from "../components/home/TopNew"
import TopSeller from "../components/home/TopSeller"
export default function Home(){
  const products = useLoaderData();
  return(
    <div className="container">
      <Carousel/>
      <PromoArea/>
      <BrandsArea/>
      <div className="product-widget-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <TopSeller produits={products} />
            <RecentlyViewed/>
            <TopNew/>
          </div>
        </div>
      </div>
    </div>
  )
}