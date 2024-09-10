import { useEffect, useState } from "react";
import { getAllProducts, addItemToCart, getAllCartItems } from "../http.js";

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productListData = await getAllProducts();
            const cartListData = await getAllCartItems();
            setProductList(productListData);
            setCartItemList(cartListData);
        };
        fetchData();
    }, []);

    const handleAddToCart = async (product) => {
        const response = await addItemToCart(product);
        if (response) {
            const updatedCartListData = await getAllCartItems();
            setCartItemList(updatedCartListData);
        }
    };

    const checkCartQuantity = (_id) => {
        const cartItem = cartItemList.find((item) => item._id === _id);
        return cartItem ? cartItem.quantity : 0;
    };

    return (
        <div className="products-container">
            {productList.map((product) => (
                <div className="product-card" key={product._id}>
                    <img src='./product_placeholder.png' className="card-img-top" alt={product.title} />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-description">{product.description}</p>
                        <p className="card-price">${product.price}</p>
                        <p className="card-rating">Rating: {product.rating}</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                            Add Item To Cart
                        </button>
                    </div>
                    {checkCartQuantity(product._id) > 0 && (
                        <div className="cart-badge">
                            {checkCartQuantity(product._id)} Added
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Products;
