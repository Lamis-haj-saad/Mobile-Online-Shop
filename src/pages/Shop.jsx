import ShopProduct from "../components/shop/ShopProduct";
import ProductNavigation from "../components/shop/ProductNavigation";
import ProductTitle from "../components/shop/ProductTitle";

export default function Shop(){
    return(
        
     <div>
     <ProductTitle>Samsung</ProductTitle>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
         <div className="row">
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March </ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
            <ShopProduct image="img/product-2.jpg" price="$999.00" reducedPrice="$899.00">Apple new mac book 2015 March :P</ShopProduct>
         </div>
         <ProductNavigation/>
     </div>
 </div>
 </div>

    )
}