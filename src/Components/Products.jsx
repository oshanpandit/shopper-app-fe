import { useEffect, useState } from "react";
import { getAllProducts,addItemToCart } from "../http.js";

const Products = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getProductList = async () => {
            const data = await getAllProducts();
            setProductList(data);
        };
        console.log('product fetch');
        getProductList();
    }, []);

    const handleAddToCart=async(id)=>{
        const response=await addItemToCart(id);
    }

    return (
        <div className="products-container">
            {productList.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src='./product_placeholder.png' className="card-img-top" alt={product.title} />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-description">{product.description}</p>
                        <p className="card-price">${product.price}</p>
                        <p className="card-rating">Rating: {product.rating}</p>
                        <button href="#" className="btn btn-primary" onClick={()=>handleAddToCart(product.id)}>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
