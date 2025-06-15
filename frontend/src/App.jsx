import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
