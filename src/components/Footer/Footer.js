import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/pavan-aditya-75113b89/" target="__blank">
          Aditya Konduri
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/the_ackerman___/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/pavan-aditya-75113b89/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;