
import {Link } from "react-router-dom";
import './Style.css';


export const NavBar=()=>
{
    return(
        <div>
            <div className="nave" >
                <Link style={{color:'white'}} to='/home'>Home</Link>
                <Link style={{color:'white'}} to='/students'>Students</Link>
                <Link style={{color:'white'}} to='/contact'> Contact us</Link>
            </div>

        </div>
    )
}