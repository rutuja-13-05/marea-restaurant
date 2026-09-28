import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import './Hero.scss';

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background image */}
      <div className="hero__background">
        <img
          src="/src/assets/heroo.png"
          alt="MÉRÉA restaurant"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero__overlay"></div>

      {/* Hero content */}
      <div className="hero__container">

        <div className="hero__content">

          <p className="hero__eyebrow">
            Contemporary Indian Cuisine
          </p>

          <h1 className="hero__title">
            A Taste
            <span>Beyond Ordinary</span>
          </h1>

          <p className="hero__description">
            Traditional flavours, thoughtfully reimagined
            for the modern table.
          </p>

          <div className="hero__actions">

            <a href="#menu" className="hero__primary-button">
              Explore Menu
              <FiArrowUpRight />
            </a>

            <a href="#reservations" className="hero__secondary-button">
              Reserve a Table
            </a>

          </div>

        </div>

      </div>

      {/* Bottom information */}
      <div className="hero__bottom">

        <div className="hero__location">
          <span></span>
          Mumbai, India
        </div>

        <a href="#about" className="hero__scroll">
          <span>Scroll to explore</span>
          <FiArrowDown />
        </a>

      </div>

    </section>
  );
}

export default Hero;