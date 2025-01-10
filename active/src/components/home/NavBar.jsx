import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext); // Get user and log out function

  const handleLogout = () => {
    logout();
    console.log("Has cerrado sesión.");
  };

  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {!user ? ( // If dont user logged
          <>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </>
        ) : (
          // If there's user logged
          <>
            <li>
              <NavLink to="/profile">{user.name}</NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogout}>Log Out</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
