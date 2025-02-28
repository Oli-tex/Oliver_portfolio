import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

/* eslint-disable jsx-a11y/anchor-is-valid */
function MyNavLink() {
  const [menuClicked, setMenuClicked] = useState(false);

  // Load theme from localStorage or default to "light"
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark-mode";
  });

  function handleMenuClicked() {
    setMenuClicked(!menuClicked);
  }

  function handleDarkModeToggling() {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark-mode" : "");
      return newMode;
    });
  }
  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuClicked) {
      document.querySelector("html").style.overflow = "hidden";
      document.querySelector(".nav-links").style.height = "80vh";
    } else {
      document.querySelector("html").style.overflow = "auto";
      document.querySelector(".nav-links").style.height = "0";
    }

    return () => {
      document.querySelector("html").style.overflow = "auto";
      document.querySelector(".nav-links").style.height = "0";
    };
  }, [menuClicked]);

  useEffect(
    function () {
      document.body.classList.toggle("dark-mode", darkMode);
    },
    [darkMode]
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <span>Olive</span>.Dev
        </NavLink>
      </div>

      <div className="menu__links">
        <div onClick={handleDarkModeToggling}>
          {darkMode ? (
            <img alt="icon" src={moon} />
          ) : (
            <img alt="icon" src={sun} />
          )}
        </div>

        {darkMode ? (
          <div
            className={`hamburger hamburger__white ${
              menuClicked ? "active" : ""
            }`}
            onClick={handleMenuClicked}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        ) : (
          <div
            className={`hamburger hamburger__black ${
              menuClicked ? "active" : ""
            }`}
            onClick={handleMenuClicked}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}

        <ul
          className={`nav-links ${menuClicked ? "active" : ""}`}
          id="nav-links"
        >
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavLink;
