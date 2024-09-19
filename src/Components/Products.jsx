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

    const handleAddToCart = async (productId) => {
        const response = await addItemToCart(productId);
        if (response) {
            const updatedCartListData = await getAllCartItems();
            setCartItemList(updatedCartListData);
        }
    };

    const checkCartQuantity = (_id) => {
        const cartItem = cartItemList.find((item) => item.productId._id.toString() === _id.toString());
        return cartItem ? cartItem.quantity : 0;
    };

    return (
        <div className="products-container">
            {productList.map((product) => (
                <div className="product-card" key={product._id}>
                    <img src='./product_placeholder.png' className="card-img-top" alt={product.title} />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="cad-title">Category: {product.category}</h6>
                        <p className="card-description">{product.description}</p>
                        <p className="card-price">${product.price}</p>
                        <p className="card-rating">Rating: {product.rating}</p>
                        <button className="btn btn-primary" onClick={() => handleAddToCart(product._id)}>
                            Add Item To Cart
                        </button>
                    </div>
            
                        <div className="cart-badge">
                            {checkCartQuantity(product._id)} Added
                        </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Products;
