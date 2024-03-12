import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./Header.scss";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <Container fluid="lg">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler"
            onClick={handleToggleClick}
          >
            {isNavOpen ? (
              <ion-icon name="close-outline"></ion-icon>
            ) : (
              <ion-icon name="menu-outline"></ion-icon>
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto my-3 my-lg-0">
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/menu" className="nav-link">
                Menu
              </Nav.Link>
              <Nav.Link href="/reservation" className="nav-link">
                Reservation
              </Nav.Link>
              <Nav.Link href="/blog" className="nav-link">
                Blog
              </Nav.Link>
              <Nav.Link href="/gallery" className="nav-link">
                Gallery
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
            <a href="/reservation">
              <button className="reservation-btn d-none d-lg-block">
                Reservation
              </button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
