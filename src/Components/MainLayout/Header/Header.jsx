import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Search from "./Assets/search_black.svg";
import { useLocation } from "react-router-dom";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {location.pathname == "/" && (
        <div className="header__up container">
          <Link className="logo" to="/">
            <img
              src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
              alt="Logo"
            />
          </Link>
          <div className="whitebox_icon">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navlink__icon" : "navlink__icon"
              }
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navlink__icon" : "navlink__icon"
              }
            >
              <FaInstagram />
            </NavLink>
            <select>
              <option value="Eng">English</option>
              <option value="Rus">Russian</option>
              <option value="Az">Azerbaijani</option>
            </select>
            
          </div>

          <div className="menu__icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      )}
      <div
        className={`header__down ${
          location.pathname !== "/" ? "light" : "dark"
        } ${menuOpen ? "column" : "row"}`}
      >
        <div className="container">
          {location.pathname !== "/" && (
            <div className="logo__menu__icon">
              <Link className="logo" to="/">
                <img
                  src="https://s3-alpha-sig.figma.com/img/681c/0d38/710f06b7be7c86841477d36b0a51c066?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADMNsZktlZWm-TXx5TGr-Mzf2-ZUMiWg55DxuBWGtUoyCGpAJwLQXO-bzcwGJwnrIOaWCjay7xco6GJSbXTH~YMhafl1WxQKPtR9idzt~D0Z17UPnIrVFlz~PxkdZuXcOVSoMhRONXSzZIJa6XaCGCYgQmfhw5SzCqlUWz3Bbb~CYVrfnI7~B~Am3qEEXtiqCDwR6W~-ozbhc8-bqMhBryqZNuB~GhMf8OxhLi4M3REOnV5iUVOHcQaXyR8oXyXpJtUz34MDfcCA04FcD4nrLtfGQ2wnCse4MwRlx4cEWOp7SazxLzivuIWb7kmeE2iB6UxkHFfce0brJe6KhCQelA__"
                  alt="Logo"
                />
              </Link>
              <div className="menu__icon" onClick={toggleMenu}>
                <FaBars />
              </div>
            </div>
          )}

          <nav className={`nav ${menuOpen ? "open" : "close"}`}>
            <ul className="list__of__navlink">
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "active navlink" : "navlink"
                  }
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "active navlink" : "navlink"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active navlink" : "navlink"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active navlink" : "navlink"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "active navlink" : "navlink"
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
            <form className="search__form">
              <div className="search_input_container">
                <img className="search-icon" src={Search} alt="Search Icon" />
                <input type="search" placeholder="Search" />
              </div>
            </form>
          </nav>

          {menuOpen && (
            <div className="nav_whitebox_icon">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active navlink__icon" : "navlink__icon"
                }
              >
                <FaFacebook />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active navlink__icon" : "navlink__icon"
                }
              >
                <FaInstagram />
              </NavLink>
              <select name="" id="">
                <option value="Eng">Eng</option>
                <option value="Rus">Rus</option>
                <option value="Az">Az</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
