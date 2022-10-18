import React, { useState } from "react";
import { FaTimes, FaBars, FaLowVision } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="navbar">
      <div>
        <FaLowVision />
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        <li>Home</li>
        <li>Contact</li>
        <li>Products</li>
        <li>Address</li>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
