import MyStore from "./MyStore"
import Categories from "./Categories"
import Newsletter from "./NewsLetter"

export default function Footer(){
    return (
        <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <MyStore/>
                <Categories/>
                <Newsletter/>
            </div>
        </div>
    </div> 
  
    )
}