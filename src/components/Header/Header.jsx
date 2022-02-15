import React from "react";
import logo from "../../assets/logoHRNet.jpeg";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>HRnet</h1>
    </header>
  );
}

export default Header;
