import { useEffect, useState } from 'react';
import { getAllOrders } from '../http';

const Orders = () => {
  const [currentOrderList, setOrderList] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const orders = await getAllOrders();
      setOrderList(orders);
    };
    getOrders();
  }, []);

  return (
    <div className="orders-section">
      <h2>Order History</h2>
      {currentOrderList.length === 0 ? (
        <p>No orders available</p>
      ) : (
        currentOrderList.map(order => (
          <div className="order-card" key={order._id}>
            <div className="order-header">
              <div className="order-id">Order ID:{order._id}</div>
              <div className="order-date">
                Placed by:{order.user.name}
              </div>
            </div>

            <ul className="order-items">
              {order.items.map(item => (
                <li className="order-item" key={item._id}>
                  <div className="product-info">
                    <span className="product-title">{item.title}</span>
                  </div>
                  <div className="product-quantity">Qty: {item.quantity}</div>
                  <div className="product-price">${item.price}</div>
                </li>
              ))}
            </ul>

            <div className="order-footer">
              Total: 
              <span className="total-price">
                $
                {order.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
