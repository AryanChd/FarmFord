import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Count from "./pages/Count/Count";

function App() {
  const bg = {
    color: "red",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        <Route path ='/count' element={<Count />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
