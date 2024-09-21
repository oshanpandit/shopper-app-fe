import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {useAuth} from '../Context/authContext';
import { logoutUser as  apiLogoutUser} from "../http";
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const {isLoggedIn,setIsLoggedIn}=useAuth();
    const navigate=useNavigate();

    const logoutUser=async()=>{
        const response=await apiLogoutUser();
        if(response){
            setIsLoggedIn(false);
            navigate('/');
        }
    }

    return(
        <div className="header-container">
        <div className="logo">
        <h2>Shopper.com</h2>
        </div>
        <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Shop</NavLink>
            {isLoggedIn?<NavLink to="products" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Products</NavLink>:null}
            {isLoggedIn?<NavLink to="cart" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Cart</NavLink>:null}
            {isLoggedIn?<NavLink to="orders" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Orders</NavLink>:null}
            {isLoggedIn?<NavLink to="add-product" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Add Product</NavLink>:null}
            {!isLoggedIn?<NavLink to="login" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Login</NavLink>:null}
            {isLoggedIn?<span onClick={logoutUser} className="inactive-link">Logout</span>:null}
        </nav>
        <div className="profile">
            N
        </div>
    </div>
    )
}

export default Header;