export default function RecentProduct({price, reducedPrice, children}){
    return(
        <div className="thubmnail-recent">
            <img src="../assets/img/product-thumb-1.jpg" className="recent-thumb" alt=""/>
            <h2><a href="">{children}</a></h2>
            <div className="product-sidebar-price">
                <ins>{reducedPrice}</ins> <del>{price}</del>
            </div>                             
        </div>
    )
}