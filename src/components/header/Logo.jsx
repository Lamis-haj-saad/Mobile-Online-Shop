import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
export default function Logo (){
    return(
        <div className="col-sm-4">
            <div className="logo" style={{ width: '100px', height: '100px' }}>
                <h1><Link to="/home"><img src={logo} alt="Logo" /></Link></h1>
            </div>
        </div>
    )
}