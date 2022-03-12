import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../Assets/Images/Logo.svg";
import menu from "../../Assets/Images/menu.svg";
import cart from "../../Assets/Images/shopping-bag.svg";

const Navbar = () => {
  return (
    <div className={classes.outerContainer}>
      <img src={logo} alt="" className={classes.logo} />
      <div className={classes.menuItems}>
        <img src={cart} alt="cart" />
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
