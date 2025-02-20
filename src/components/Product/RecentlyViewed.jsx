import RecentProduct from "./RecentProduct"

export default function RecentlyViewed(){
    return(
        <div className="single-sidebar">
            <h2 className="sidebar-title">Recently Viewed</h2>
            <RecentProduct price="100.00 €" reducedPrice="700.00 €">Sony Smart TV - 2015</RecentProduct>
            <RecentProduct price="100.00 €" reducedPrice="700.00 €">Sony Smart TV - 2015</RecentProduct>
            <RecentProduct price="100.00 €" reducedPrice="700.00 €">Sony Smart TV - 2015</RecentProduct>
            <RecentProduct price="100.00 €" reducedPrice="700.00 €">Sony Smart TV - 2015</RecentProduct>
        </div>
    )
}