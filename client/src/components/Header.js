import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
//import Search from "./Search";
import { NavDropdown } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../redux/actions/userActions";


const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout())
    }

    return(
        <div>
            <header>
                <div>
                    <h1>Pearl Shine Motors</h1>
                </div>
                <nav>  
                    <Link to="/">HOME</Link> 
                    <Link to="/cart" className="cart-link"><AiOutlineShoppingCart id="cart-icon" /><span>{cartItems.length}</span></Link>
                    {userInfo ? (<>
                        <NavDropdown title={userInfo.username} id='username'>
                        </NavDropdown>
                        <Link to='/logout' onClick={logoutHandler}>Sign Out</Link>
                    </>) :
                        <>
                        <Link to="/login">Sign In</Link>
                        <Link to="/register">Sign Up</Link>
                        </>
                    }   
                </nav>
            </header>
        </div>
    )
}

export default Header;