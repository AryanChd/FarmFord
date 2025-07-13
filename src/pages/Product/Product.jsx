import React from "react";
import "./Product.css";
import  Header  from "../../components/Header/Header";
import Footer  from "../../components/Footer/Footer";



const Product = () => {
  return (
    <div className="product-page">

      <Header />
      <header className="product-header">
        <h1>Our Products</h1>
      </header>

      <main className="product-main">
        <p>We offer fresh, seasonal, and organic produce directly from our farm.</p>

        <div className="product-list">
          <div className="product-item">
            <h3>Tomatoes</h3>
            <p>Fresh and juicy red tomatoes.</p>
          </div>

          <div className="product-item">
            <h3>Carrots</h3>
            <p>Crunchy, sweet, and rich in vitamins.</p>
          </div>

          <div className="product-item">
            <h3>Spinach</h3>
            <p>Leafy green goodness, perfect for salads and cooking.</p>
          </div>

          <div className="product-item">
            <h3>Apples</h3>
            <p>Sweet and crisp apples from our orchard.</p>
          </div>
        </div>
      </main>

     
      <Footer/>
    </div>
  );
};

export default Product;
