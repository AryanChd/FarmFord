import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import duckImg from "../../assets/productsimg/duck.png";
import turkeyImg from "../../assets/productsimg/turkey.png";
import goatImg from "../../assets/productsimg/goat.png";
import henImg from "../../assets/productsimg/hen.png";
import heroImg1 from "../../assets/heroimage1.jpg";
import heroImg2 from "../../assets/heroimage2.jpg";


const Home = () => {
  const handleClick = () => {
    alert("Thank you for your interest! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">    
      <Header />      
  <header className="bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 text-center py-14 lg:py-20 shadow-inner animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            FarmFord Krishi Farm
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Fresh. Organic. Local.
          </p>
        </div>
      </header>
      

      {/* Hero Section */}
<section className="bg-gradient-to-br from-green-600 via-green-400 to-lime-200 text-white py-20 shadow-xl rounded-b-3xl animate-fade-in delay-200">
  <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center min-h-[80vh] gap-12">
    {/* Left Column */}
    <div className="flex-1 flex flex-col justify-center items-start space-y-8 max-w-xl mx-auto lg:mx-0 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
        Fresh From Our Farm to Your Table
      </h1>
      <p className="text-lg md:text-2xl opacity-95 leading-relaxed drop-shadow-md">
        Experience the taste of nature with our organic, locally-grown produce. FarmFord brings you the freshest vegetables and fruits, harvested with care and delivered with love.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button
          onClick={handleClick}
          className="bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 hover:text-white transition-all duration-300 text-lg tracking-wide ring-2 ring-white hover:ring-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 animate-bounce"
        >
          Shop Now
        </button>
        <button
          onClick={handleClick}
          className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-green-700 text-lg tracking-wide"
        >
          Learn More
        </button>
      </div>
    </div>

    {/* Images Column */}
    <div className="flex-1 flex flex-col sm:flex-row justify-center items-center gap-8 animate-slide-up">
      <img src={heroImg1} alt="Farm owner with rooster" className="w-64 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
      <img src={heroImg2} alt="Farm owner with fish" className="w-64 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-14">Why Choose FarmFord?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-t-4 border-green-400">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">100% Organic</h3>
              <p className="text-gray-600 leading-relaxed">No chemicals, no pesticides. Just pure, natural goodness from our soil to your plate.</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-t-4 border-green-400">
              <div className="text-5xl mb-6">🚚</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Local Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Fresh from our farm to your doorstep. Same-day delivery for maximum freshness.</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-t-4 border-green-400">
              <div className="text-5xl mb-6">👨‍🌾</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Family Owned</h3>
              <p className="text-gray-600 leading-relaxed">Three generations of farming expertise, committed to sustainable agriculture.</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-t-4 border-green-400">
              <div className="text-5xl mb-6">🌿</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Sustainable</h3>
              <p className="text-gray-600 leading-relaxed">Eco-friendly farming practices that protect our environment for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-14">Our Featured Animals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-b-4 border-green-400 flex flex-col items-center animate-slide-up" style={{animationDelay: '0ms'}}>
              <img src={duckImg} alt="Duck" className="w-24 h-24 object-contain mb-4 rounded-xl shadow" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Duck</h3>
              <p className="text-gray-600 mb-4">Farm-raised ducks, known for their rich flavor and quality.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-b-4 border-green-400 flex flex-col items-center animate-slide-up" style={{animationDelay: '100ms'}}>
              <img src={turkeyImg} alt="Turkey" className="w-24 h-24 object-contain mb-4 rounded-xl shadow" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Turkey</h3>
              <p className="text-gray-600 mb-4">Free-range turkeys, perfect for festive occasions.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-b-4 border-green-400 flex flex-col items-center animate-slide-up" style={{animationDelay: '200ms'}}>
              <img src={goatImg} alt="Goat" className="w-24 h-24 object-contain mb-4 rounded-xl shadow" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Goat</h3>
              <p className="text-gray-600 mb-4">Grass-fed goats, ideal for milk and meat.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border-b-4 border-green-400 flex flex-col items-center animate-slide-up" style={{animationDelay: '300ms'}}>
              <img src={henImg} alt="Hen" className="w-24 h-24 object-contain mb-4 rounded-xl shadow" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Hen</h3>
              <p className="text-gray-600 mb-4">Healthy hens providing fresh eggs daily.</p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => window.location.href = '/product'}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg tracking-wide ring-2 ring-green-200 hover:ring-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-14">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-400">
              <div className="text-2xl text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"The freshest vegetables I've ever tasted! FarmFord has become our weekly go-to for organic produce."</p>
              <div className="space-y-1">
                <div className="font-bold text-green-800">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Local Resident</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-400">
              <div className="text-2xl text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"Amazing quality and fast delivery. The tomatoes are absolutely delicious!"</p>
              <div className="space-y-1">
                <div className="font-bold text-green-800">Mike Chen</div>
                <div className="text-sm text-gray-500">Restaurant Owner</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-400">
              <div className="text-2xl text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"Supporting local farmers while getting the best produce. Win-win!"</p>
              <div className="space-y-1">
                <div className="font-bold text-green-800">Emily Rodriguez</div>
                <div className="text-sm text-gray-500">Health Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Taste the Difference?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of satisfied customers who choose FarmFord for their daily fresh produce needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleClick} className="bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 hover:text-white transition-all duration-300 text-lg tracking-wide ring-2 ring-white hover:ring-green-700 focus:outline-none focus:ring-4 focus:ring-green-300">Start Shopping</button>
            <button onClick={handleClick} className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-green-700 text-lg tracking-wide">Contact Us</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
