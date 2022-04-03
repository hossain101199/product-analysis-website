import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <NavLink className={"NavLink"} to="/HOME">HOME</NavLink>
      <NavLink className={"NavLink"} to="/REVIEWS">REVIEWS</NavLink>
      <NavLink className={"NavLink"} to="/DASHBOARD">DASHBOARD</NavLink>
      <NavLink className={"NavLink"} to="/BLOGS">BLOGS</NavLink>
      <NavLink className={"NavLink"} to="/ABOUT">ABOUT</NavLink>
    </nav>
  );
};

export default Header;
