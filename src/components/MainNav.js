import React from "react";
import Logo from "../logo.svg";

const MainNav = () => {
  return (
    <nav>
      <div className="nav-link-container">
        <img src={Logo} alt="" />
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resource</li>
        </ul>
      </div>
      <div className="nav-btn-control">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default MainNav;
