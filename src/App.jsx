import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Details from "./components/Details";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-lg min-h-screen p-6 bg-white text-gray-600 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
