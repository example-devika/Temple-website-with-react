import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="nav-bar">
        <div class="logo">
          <img src="temple-logo.png" alt="temple" class="imglogo" />

          <p>KodangalBalaji Temple</p>
        </div>
        <div class="nav-options">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="Templetimings">
              <li>Templetimings</li>
            </Link>
            <Link to="/History">
              <li>History</li>
            </Link>
            <Link to="/Sevas">
              <li>Sevas</li>
            </Link>
            <Link to="/Photos">
              <li>Photos</li>
            </Link>
            <Link to="/Contactus">
              <li>ContactUs</li>
            </Link>
            <Link to="/Reachus">
              <li>ReachUs</li>
            </Link>
            <Link to="/Founder">
              <li>Founder&Trustee</li>
            </Link>{" "}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
