import Promo from "./Promo";

export default function PromoArea(){
    return (
    <div className="promo-area">
      <div className="zigzag-bottom">
      </div>
      <div className="container">
        <div className="row">
          <Promo dclass="single-promo promo1" iclass="fa fa-refresh">
          30 Days return
          </Promo>
          <Promo dclass="single-promo promo2" iclass="fa fa-truck">
          Free shipping
          </Promo>
          <Promo dclass="single-promo promo3" iclass="fa fa-lock">
          Secure payments
          </Promo>
          <Promo dclass="single-promo promo4" iclass="fa fa-gift">
          New products
          </Promo>
        </div>
      </div>
    </div>
    )
}