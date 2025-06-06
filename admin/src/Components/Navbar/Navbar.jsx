import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/admin_panel.png";
import navprofile from "../../assets/nav-profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navprofile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
