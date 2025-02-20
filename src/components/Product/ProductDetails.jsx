export default function ProductDetails(){
    return(
        <div className="col-sm-6">
            <div className="product-inner">
                <h2 className="product-name">Sony Smart TV - 2015</h2>
                <div className="product-inner-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                </div>  
                <form action="" className="cart">
                    <div className="quantity">
                        <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1"/>
                    </div>
                    <button className="add_to_cart_button" type="submit">Add to cart</button>
                </form>        
                <div className="product-inner-category">
                    <h2>Product Description</h2>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>
                </div>        
            </div>
        </div>
    )
}