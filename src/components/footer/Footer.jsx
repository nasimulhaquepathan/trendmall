import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h2 className="footer_title">Nasim</h2>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#fortfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/nasimahed/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nasimul-haque-pathan/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#" className="footer_social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/follow.nasim.74"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Nasimul Haque Pathan. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
