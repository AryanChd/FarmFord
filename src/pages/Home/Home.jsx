import React from "react";
import './Home.css';
import Footer  from "../../components/Footer/Footer";
import  Header  from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Home = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="homepage">
      <Header />

      <Button text="Login" onClick={handleClick} />

      <main className="main-content">
        <section>

          <h2>Welcome to Our Farm!</h2>
          <p>We grow fresh, organic vegetables and fruits with love and care. Visit us or order online!</p>

        </section>

        <section>

          <h2>Our Products</h2>
          <p>We offer seasonal produce including tomatoes, carrots, spinach, apples, and more!</p>

        </section>

        <section>

          <h2>Why Choose Us?</h2>
          <p>No chemicals. Just nature. Support your local farmers and eat healthy.</p>

        </section>

      </main>
      <Footer/>
    </div>
  );
};

export default Home
