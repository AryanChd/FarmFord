import React from "react";
import "./Contact.css";
import Footer  from "../../components/Footer/Footer";
import  Header  from "../../components/Header/Header";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <main className="contact-main">
        <p>If you have any questions or would like to visit the farm, feel free to reach out!</p>
        <ul>
          <li>Email: FarmFord@example.com</li>
          <li>Phone: +977-9861830956</li>
          <li>Location: Duhabi, Nepal</li>
        </ul>
      </main>

      
      <Footer/>
    </div>
  );
};

export default Contact;
