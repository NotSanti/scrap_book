import { Link } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Random</Link>
      <Link to="/all">All</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};
export default Navbar;
