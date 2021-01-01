import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    let menu
    let menuMask
    if(showMenu){
        menu = 
        <div className="menu">
            <span style={{fontWeight:'bold'}}>
                The Menu
            </span>
            
            <ul>
                <li style={{listStyle:'none'}}>
                    <Link  onClick={()=>setShowMenu(false)} style={{textDecoration:'none'}} to="/">Home</Link>
                </li>
                <li style={{listStyle:'none'}}>
                     <Link  onClick={()=>setShowMenu(false)} style={{textDecoration:'none'}} to="/about">About</Link>
                </li>
                <li style={{listStyle:'none'}}>
                     <Link  onClick={()=>setShowMenu(false)} style={{textDecoration:'none'}} to="/product/1">Products</Link>
                </li>
            </ul>
        </div>
         menuMask = 
         <div onClick={()=> setShowMenu(false)} className="menuMask">
             
         </div>
    }
    return (
        <div>
            <nav>
                <span>
                    <FontAwesomeIcon
                    icon = {faBars}
                    onClick={()=> setShowMenu(!showMenu)}
                    style={{cursor:"pointer"}}
                    />
                </span>
                {menuMask}
                {menu}
            </nav>
        </div>
    )
}

export default Navigation
