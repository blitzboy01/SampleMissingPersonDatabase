
import { Link } from "react-router-dom";
import "../styles/navbar.css";

 const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="navbar-container">
        <Link to='/' className="navbar-link">Home</Link>
        <Link to='/dashboard' className="navbar-link">Dashboard</Link>
        <Link to='/about' className="navbar-link">About</Link>
        <Link to='/contact' className="navbar-link">Contact Us</Link>
      </div>
    </nav>
);
}

export default Navbar;