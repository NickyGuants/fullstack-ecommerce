import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
//import Search from "./Search";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';


const Header = () => {
    const  cartItems  = useSelector((state) => state.cart.cartItems)
    return(
        <div>
            <header>
                <div>
                    <h1>Pearl Shine Motors</h1>
                </div>
                <nav>  
                    <Link to="/">HOME</Link> 
                    <Link to="/cart" className="cart-link"><AiOutlineShoppingCart id="cart-icon" /><span>{ cartItems.length }</span></Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;