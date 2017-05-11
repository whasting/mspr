import React from 'react';
import { Link, withRouter } from 'react-router';

const Navbar = () => (
  <nav>
    <img
      className="logo"
      src="https://res.cloudinary.com/whasting/image/upload/c_scale,h_75/v1493761702/msrp_logo_white_rwfgv7.png"
      alt=""></img>
    <ul className="nav-items">
      <li className="nav-item">Animals</li>
      <li className="nav-item">Adopt/Foster</li>
      <li className="nav-item">Get Involved</li>
      <li className="nav-item">About</li>
      <button className="donate-button" type="button" name="button">Donate</button>
      <li className="hamburger">
        <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_50/v1494021062/hamburger-white_tfy2cg.png" alt=""></img>
      </li>
    </ul>
    <div className="menu">
      <a className="menu-item one" href="#">Animals</a>
      <a className="menu-item two" href="#">Adopt/Foster</a>
      <a className="menu-item one " href="#">Get Involved</a>
      <a className="menu-item two" href="#">About</a>
    </div>
  </nav>
);

export default Navbar;
