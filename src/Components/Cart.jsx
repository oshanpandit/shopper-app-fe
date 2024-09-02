import { useEffect, useState } from "react";
import { getAllCartItems } from "../http";

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartItems = await getAllCartItems();
      setCartItemList(cartItems);
    };
    getCartList();
  }, []);

  const totalProducts = cartItemList.length;
  const totalAmount = cartItemList.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="cart-heading">Cart</h2>
          <span className="total-products">{totalProducts} Products</span>
        </div>
        <div className="cart-items">
          {cartItemList.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <span className="item-title">{item.title}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <span>Total Amount:</span>
          <span className="total-amount">${totalAmount.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
