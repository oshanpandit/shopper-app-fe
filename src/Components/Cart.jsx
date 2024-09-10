import { useEffect, useState } from "react";
import { getAllCartItems, addItemToCart, deleteCartItem, checkoutCart } from "../http";

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartItems = await getAllCartItems();
      setCartItemList(cartItems);
    };
    getCartList();
  }, []);

  const addItem = async (product) => {
    const response = await addItemToCart(product);
    if (response) {
      const updatedCartList = cartItemList.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItemList(updatedCartList);
    }
  };

  const removeItem = async (_id) => {
    const response = await deleteCartItem(_id);
    if (response) {
      setCartItemList((prevCartItemList) => {
        return prevCartItemList.reduce((updatedList, item) => {
          if (item._id === _id) {
            if (item.quantity > 1) {
              item.quantity--;
              updatedList.push(item);
            }
          } else {
            updatedList.push(item);
          }
          return updatedList;
        }, []);
      });
    }
  };

  const handleCheckout = async () => {
    const response = await checkoutCart();
    if (response) {
      setCartItemList([]);
    }
  };

  const totalProducts = cartItemList.length;
  const totalAmount = cartItemList.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="cart-heading">Cart</h2>
          <span className="total-products">{totalProducts} Product(s)</span>
        </div>

        {cartItemList.length === 0 ? (
          <div className="empty-cart">
            <p>No items available in the cart</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItemList.map((item) => (
                <div className="cart-item" key={item._id}>
                  <div className="item-details">
                    <span className="item-title">{item.title}</span>&nbsp;&nbsp;
                    <span className="item-price">${item.price}</span>
                  </div>
                  <div className="quantity-controls">
                    <button className="counter-button" onClick={() => removeItem(item._id)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="counter-button" onClick={() => addItem(item)}>+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total Amount:</span>
              <span className="total-amount">${totalAmount.toFixed(2)}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
