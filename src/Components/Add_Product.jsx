import React, { useRef, useState } from 'react';
import { addProduct } from '../http';

const Add_Product = () => {

    const formRef=useRef();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData=new FormData(e.target);
        const formObject=Object.fromEntries(formData.entries());
        addProduct(formObject);
        formRef.current.reset();
    };

    return (
        <div className="page-container">
            <div className="header">
                <h1 className="header-title">Product Management System</h1>
            </div>
            <div className="add-product-container">
                <h2 className="form-title">Add New Product</h2>
                <form onSubmit={handleSubmit} className="add-product-form" ref={formRef}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter product title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter product price"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default Add_Product;
