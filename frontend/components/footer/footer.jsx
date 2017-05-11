import React from 'react';
import { Link, withRouter } from 'react-router';

const Footer = () => (
  <footer>
      <div className="footer-container">
        <div className="social-links">
          <a href="https://facebook.com/friendsofukiahanimalshelter" className="social-media-link" title="Facebook" target="_blank">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_50/v1494008300/004-facebook-logo-button_yeomwy.png" alt=""></img>
          </a>
          <a href="https://instagram.com/mendoshelterpetsrescue" className="social-media-link" title="Instagram" target="_blank">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_50/v1494008300/003-instagram-logo_qhvlfe.png" alt=""></img>
          </a>
          <a href="https://PayPal.Me/mendopetrescue" className="social-media-link" title="DonatetoMSPR" target="_blank">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_50/v1494008300/002-social-paypal-circular-button_ltpw8y.png" alt=""></img>
          </a>
          <a href="mailto:info@mendoshelterpets.com" className="social-media-link" title="Emailus">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_50/v1494008300/001-mail_zhgho7.png" alt=""></img>
          </a>
        </div>
        <img
          className="footer-logo"
          src="https://res.cloudinary.com/whasting/image/upload/v1494010484/msrp_logo_reverse_footer_mah4m1.png"
          alt="msrp"></img>
        <p className="copyright">Mendo Shelter Pets © 2016 | All Rights Reserved</p>
      </div>
    </footer>
);

export default Footer;
