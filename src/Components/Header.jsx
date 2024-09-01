import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <div className="header-container">
        <div className="logo">
        <h2>Shopper.com</h2>
        </div>
        <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Shop</NavLink>
            <NavLink to="products" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Products</NavLink>
            <NavLink to="cart" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Cart</NavLink>
            <NavLink to="orders" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Orders</NavLink>
            <NavLink to="add-product" className={({ isActive }) => (isActive?'active-link':'inactive-link')}>Add Product</NavLink>
        </nav>
        <div className="profile">
            N
        </div>
    </div>
    )
}

export default Header;