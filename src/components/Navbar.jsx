import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <header className="p-6 flex justify-between items-center text-white bg-blue-gray-500">
      <div className="font-bold text-4xl">LOGO</div>
      <nav className="hidden md:flex w-56 justify-around">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/gallery">Gallery</Link></div>
      </nav>
      <HamburgerMenu />
    </header>
  );
};
export default Navbar;
