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
                <h5> Only the admin has the access to add a product to this app</h5>
                <h6>Contact admin: oshanpandit@gmail.com</h6>
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
                    <div className="form-dropdown">
                      <label htmlFor="category">Category</label>
                      <select id="category" name="category" required>
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="groceries">Groceries</option>
                      <option value="fashion">Fashion</option>
                      <option value="home-appliances">Home Appliances</option>
                      <option value="books">Books</option>
                      <option value="furniture">Furniture</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="sports">Sports & Fitness</option>
                      <option value="toys">Toys & Games</option>
                      <option value="automotive">Automotive</option>
                      <option value="others">Others</option>
                 </select>
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
