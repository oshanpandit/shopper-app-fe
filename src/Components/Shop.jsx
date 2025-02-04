import React from 'react';

const Shop = () => {
  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to the Shopper App!</h1>
          <p>Discover the best deals and categories just for you.</p>
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="deals-section">
        <h2>Deals of the Day</h2>
        <div className="deals-grid">
          <div className="deal-item">
            <img src="../public/shop_placeholder.png" alt="Laptop Deal" />
            <span>Up to 30% off on Laptops</span>
          </div>
          <div className="deal-item">
            <img src="../public/shop_placeholder.png" alt="Phone Deal" />
            <span>Save big on Smartphones</span>
          </div>
          <div className="deal-item">
            <img src="../public/shop_placeholder.png" alt="Headphones Deal" />
            <span>Best deals on Headphones</span>
          </div>
          <div className="deal-item">
            <img src="../public/shop_placeholder.png" alt="TV Deal" />
            <span>Exclusive offers on Smart TVs</span>
          </div>
        </div>
      </section>

      {/* Item Categories */}
      <section className="categories-section">
        <h2>Shop by Categories</h2>
        <div className="categories-grid">
          <div className="category-item">
            <img src="../public/shop_placeholder.png" alt="Electronics" />
            <span>Electronics</span>
          </div>
          <div className="category-item">
            <img src="../public/shop_placeholder.png" alt="Fashion" />
            <span>Fashion</span>
          </div>
          <div className="category-item">
            <img src="../public/shop_placeholder.png" alt="Home Appliances" />
            <span>Home Appliances</span>
          </div>
          <div className="category-item">
            <img src="../public/shop_placeholder.png" alt="Books" />
            <span>Books</span>
          </div>
        </div>
      </section>

      {/* Amazon Prime Movies */}
      <section className="movies-section">
        <h2>Shopper Prime Video - Popular Movies</h2>
        <div className="movies-grid">
          <div className="movie-item">
            <img src="../public/shop_placeholder.png" alt="Movie 1" />
            <span>Movie Title 1</span>
          </div>
          <div className="movie-item">
            <img src="../public/shop_placeholder.png" alt="Movie 2" />
            <span>Movie Title 2</span>
          </div>
          <div className="movie-item">
            <img src="../public/shop_placeholder.png" alt="Movie 3" />
            <span>Movie Title 3</span>
          </div>
          <div className="movie-item">
            <img src="../public/shop_placeholder.png" alt="Movie 4" />
            <span>Movie Title 4</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p>© 2025 Shopper App - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Shop;
