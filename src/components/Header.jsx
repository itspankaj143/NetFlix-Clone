import React from "react";
import "./Header.css";
import logo from "../images/NetFlixLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src={logo} alt="logo" />
          <Link to="/" className="btn btn-rounded">
            Sign In
          </Link>
        </div>
        <div className="showcase-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <Link to="/netflix" className="btn btn-xl">
            Watch Free For 30 Days
            {/* <i className="fas fa-chevvron-right btn-icon"></i> */}
            <i class="fa-solid fa-chevron-right btn-icon"></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
