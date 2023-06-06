
import React, { useState } from "react";
import "./NavbarStyles.css";
import { BurgerSpin as Icon } from "react-icons-animated";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { Home, Menu, Close } from "@mui/icons-material";
import logo from "../assets/mainlogo.png"
import { ReactSVG } from 'react-svg';

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  return (
    <nav className="NavbarItems">
     <div className="logo">
     <img  src={logo}  />
      </div>
      <div className="menu-icons" onClick={() => setIcon(!icon)}>
        {!icon ? <Menu /> : <Close />}
        {/* <button
          onClick={() => setIsClosed(!isClosed)}
          className="icon-button"
        >
          <Icon
            isClosed={isClosed} 
            style={{
              color: "black",
              fontSize: "14px"
            }}
          />
        </button> */}
      </div>
      <ul className={icon ? "nav-menu active" : "nav-menu"}>
        
        {MenuItems.map((item, index) => (
          <div className="navDiv">
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;