import { useState, useEffect } from "react";
import BrandsArea from "../components/home/BrandsArea";
import Carousel from "../components/home/Carousel";
import PromoArea from "../components/home/PromoArea";
import RecentlyViewed from "../components/home/RecentlyViewed";
import TopNew from "../components/home/TopNew";
import TopSeller from "../components/home/TopSeller";

export default function Home() {
  const [topSeller, setTopSeller] = useState([]);
  const [topNew, setTopNew] = useState([]);

  useEffect(() => {

    const fetchTopSeller = async () => {
      try {
        const response = await fetch("http://localhost:3000/top-sellers-products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setTopSeller(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTopNew = async () => {
      try {
        const response = await fetch("http://localhost:3000/top-new-products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setTopNew(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopSeller();
    fetchTopNew();
  }, []);

  return (
    <div className="container">
      <Carousel />
      <PromoArea />
      <BrandsArea />
      <div className="product-widget-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <TopSeller products={topSeller} />
            <RecentlyViewed />
            <TopNew products={topNew} />
          </div>
        </div>
      </div>
    </div>
  );
}
