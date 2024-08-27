import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/gallery" element={<Products />}></Route>
        <Route path="/gallery/:id" element={<ProductPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
