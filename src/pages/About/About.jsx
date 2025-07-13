import React from "react";
import "./About.css";
import Footer  from "../../components/Footer/Footer";
import  Header  from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <main className="about-main">
        <p>Green Field Farm is a family-owned organic farm established in 2010. We are committed to producing high-quality, pesticide-free vegetables and fruits.</p>

        <p>Our mission is to promote healthy living through sustainable farming practices and support local communities.</p>
      </main>

      

      <Footer />
    </div>
  );
};

export default About;
