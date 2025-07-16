import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import bg from "../../assets/bg.png";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import newspaper from "../../assets/newspaper.jpg";

const About = () => {
  const navigate = useNavigate ? useNavigate() : () => {};
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 via-white to-green-100">
      <Header />
      <header className="relative bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 text-center py-14 lg:py-20 shadow-inner animate-fade-in overflow-hidden">
        <img src={bg} alt="Farm Banner" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-green-700/20 to-transparent z-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 lg:px-8">
          <img src={logo} alt="FarmFord Logo" className="mx-auto w-24 h-24 rounded-full shadow-lg mb-4 border-4 border-white" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-3 drop-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium drop-shadow">Rooted in tradition. Growing for the future.</p>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12 animate-fade-in delay-200">
        <section className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-t-4 border-green-400">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4">FarmFord Krishi Farm is a family-owned organic farm established in 2010. Nestled in the heart of the countryside, we are dedicated to producing high-quality, pesticide-free vegetables, fruits, and livestock. Our journey began with a simple vision: to bring the freshest, healthiest food from our fields to your table.</p>
          <p className="text-gray-700 text-lg mb-4">Over the years, we have grown with our community, embracing sustainable farming practices and innovative techniques while staying true to our roots. Every crop we plant and every animal we raise is cared for with love, respect, and a commitment to quality.</p>
        </section>
       
        <section className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-t-4 border-green-400 animate-slide-up" style={{animationDelay: '200ms'}}>
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Our Mission & Values</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-4">
            <li>Promote healthy living through sustainable, organic farming.</li>
            <li>Support and uplift our local community and farmers.</li>
            <li>Protect the environment for future generations.</li>
            <li>Deliver fresh, nutritious, and delicious food to every customer.</li>
          </ul>
        </section>
        <section className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-green-400 animate-slide-up" style={{animationDelay: '400ms'}}>
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={logo} alt="Founder" className="w-24 h-24 rounded-full border-4 border-green-200 shadow-md" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-green-700">Punam Kumar Chaudhary Sardar </h3>
              <p className="text-gray-700">A third-generation farmer, Punam Kumar Chaudhary Sardar leads FarmFord with a passion for organic agriculture and a vision for a healthier, greener world. His dedication inspires our team and community every day.</p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-xl p-6 md:p-8 mb-12 border-t-4 border-green-400 flex flex-col items-center animate-slide-up" style={{animationDelay: '150ms'}}>
          <img src={newspaper} alt="FarmFord in the News" className="w-full max-w-2xl rounded-xl shadow-lg mb-4 border-2 border-green-200" />
          <div className="text-center">
            <span className="text-green-700 font-semibold">Featured in local newspaper</span>
            <p className="text-gray-600 text-sm">We are proud to have our story and achievements recognized in the media.</p>
          </div>
        </section>
        <div className="text-center mt-12 animate-fade-in delay-200">
          <Button onClick={() => navigate("/products")}>Explore Our Products</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
