import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import duckImg from "../../assets/productsimg/duck.png";
import turkeyImg from "../../assets/productsimg/turkey.png";
import goatImg from "../../assets/productsimg/goat.png";
import henImg from "../../assets/productsimg/hen.png";
import fishImg from "../../assets/productsimg/fish.png";
import kalijImg from "../../assets/productsimg/kalij.png";
import battaiImg from "../../assets/productsimg/battai.png"
import pigeonImg from "../../assets/productsimg/pigeon.png"
import eggsImg from "../../assets/productsimg/eggs.png"



const products = [
  
  {
    name: "Ducks",
    emoji: "🦆",
    description: "Farm-raised ducks, known for their rich flavor and quality.",
    img: duckImg,
  },
  {
    name: "Turkey",
    emoji: "🦃",
    description: "Free-range turkeys, perfect for festive occasions.",
    img: turkeyImg,
  },
  {
    name: "Hen",
    emoji: "🐔",
    description: "Healthy hens providing fresh eggs daily.",
    img: henImg,
  },
  {
    name: "Goat",
    emoji: "🐐",
    description: "Grass-fed goats, ideal for milk and meat.",
    img: goatImg,
  },
  {
    name: "Kalij",
    emoji: "🐦",
    description: "Exotic Kalij pheasants, raised with care.",
    img: kalijImg,
  },
  {
    name: "Pigeon",
    emoji: "🕊️",
    description: "Farm pigeons, raised for quality and taste.",
    img: pigeonImg
  },
  {
    name: "Battai",
    emoji: "🐤",
    description: "Local Battai birds, known for their unique flavor.",
    img:battaiImg
  },
  {
    name: "Fish",
    emoji: "🐟",
    description: "Freshwater fish, harvested daily from our ponds.",
    img: fishImg,
  },
  {
    name: "Eggs",
    description: "Fresh battai and kalij eggs, collected from our local and exotic birds. ",
    img: eggsImg
  },
];

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 via-white to-green-100">
      <Header />
      <header className="bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 text-center py-14 lg:py-20 shadow-inner animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Fresh, seasonal, and organic produce & livestock directly from our farm.
          </p>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl shadow-2xl hover:shadow-green-200 hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center border border-green-200 group min-h-[420px] animate-slide-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {product.img ? (
                <img src={product.img} alt={product.name} className="w-36 h-36 object-contain mb-6 rounded-2xl shadow-md border-2 border-green-100 group-hover:scale-105 transition-transform" />
              ) : (
                <div className="text-6xl mb-6">{product.emoji}</div>
              )}
              <h3 className="text-2xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 text-base font-medium min-h-[48px] flex items-center justify-center">
                {product.description}
              </p>
              <span className="mt-auto bg-green-600/90 text-white px-6 py-2 rounded-full text-lg font-semibold shadow group-hover:bg-green-700 transition-colors">
                ₹ -- /-
              </span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
