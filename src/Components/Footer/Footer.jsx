import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRss,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import footer_logo from "../../assets/logo.png";
import "./Footer.scss";

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setShowBackToTop(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-section">
      <footer className="container py-4">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <span>&copy; Copyright 2023 - Stradale by Dabid Marma</span>
        </div>
        <div className="d-flex">
          <div className="icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <FaRss />
            </a>
          </div>
          <button
            className={`back-to-top ${showBackToTop ? "visible" : ""}`}
            onClick={handleBackToTop}
          >
            <IoIosArrowUp />
          </button>
        </div>
      </footer>
    </div>
  );
};
