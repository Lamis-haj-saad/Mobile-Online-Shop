import { Link } from "react-router-dom";
export default function Categories(){
    return(
        <div className="col-md-4 col-sm-6">
            <div className="footer-menu">
                <h2 className="footer-wid-title">Categories </h2>
                <ul>
                    <li><Link to="#">LG</Link></li>
                    <li><Link to="#">Samsung</Link></li>
                    <li><Link to="#">Sony</Link></li>
                    <li><Link to="#">Apple</Link></li>
                    <li><Link to="#">Huawei</Link></li>
                </ul>                        
            </div>
        </div>
    )
}