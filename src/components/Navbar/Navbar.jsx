import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import './Navbar.scss';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar__container">

          {/* Logo */}
          <a href="/" className="navbar__logo">
            MÉRÉA
            <span>RESTAURANT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#reservations">Reservations</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <a href="#reservations" className="navbar__button">
            Book a Table
            <FiArrowUpRight />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="navbar__menu-button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>

        </div>
      </header>


      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          isMenuOpen ? 'mobile-menu--open' : ''
        }`}
      >

        <div className="mobile-menu__header">

          <a href="/" className="navbar__logo">
            MÉRÉA
            <span>RESTAURANT</span>
          </a>

          <button
            className="mobile-menu__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FiX />
          </button>

        </div>


        <nav className="mobile-menu__links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#reservations" onClick={closeMenu}>Reservations</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>


        <a
          href="#reservations"
          className="mobile-menu__button"
          onClick={closeMenu}
        >
          Book a Table
          <FiArrowUpRight />
        </a>

      </div>


      {/* Overlay */}
      <div
        className={`mobile-overlay ${
          isMenuOpen ? 'mobile-overlay--visible' : ''
        }`}
        onClick={closeMenu}
      />

    </>
  );
}

export default Navbar;