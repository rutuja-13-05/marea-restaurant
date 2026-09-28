import {
  FiArrowUpRight,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
} from 'react-icons/fi';

import './Contact.scss';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        {/* =====================================================
            MAIN CONTACT INTRO
        ====================================================== */}
        <div className="contact__main">

          <div className="contact__eyebrow">
            <span>05</span>
            <i></i>
            <span>Find Us</span>
          </div>

          <div className="contact__heading">
            <h2>
              Come dine
              <em>with us.</em>
            </h2>

            <p>
              Whether it is an intimate dinner, a celebration
              or simply a good evening out, we would love to
              welcome you to MÉRÉA.
            </p>
          </div>

        </div>


        {/* =====================================================
            CONTACT DETAILS
        ====================================================== */}
        <div className="contact__details">

          {/* Visit Us */}
          <div className="contact__block">

            <span className="contact__number">
              01
            </span>

            <div className="contact__block-content">

              <h3>
                Visit us
              </h3>

              <div className="contact__detail">

                <FiMapPin />

                <p>
                  14, Harbour View,
                  <br />
                  Bandra West,
                  <br />
                  Mumbai, India
                </p>

              </div>

            </div>

          </div>


          {/* Get In Touch */}
          <div className="contact__block">

            <span className="contact__number">
              02
            </span>

            <div className="contact__block-content">

              <h3>
                Get in touch
              </h3>

              <a href="tel:+912212345678">
                <FiPhone />
                <span>
                  +91 22 1234 5678
                </span>
              </a>

              <a href="mailto:hello@merearestaurant.com">
                <FiMail />
                <span>
                  hello@merearestaurant.com
                </span>
              </a>

            </div>

          </div>


          {/* Opening Hours */}
          <div className="contact__block">

            <span className="contact__number">
              03
            </span>

            <div className="contact__block-content">

              <h3>
                Opening hours
              </h3>

              <p>
                Tuesday — Thursday
                <br />
                6:00 PM — 11:00 PM
              </p>

              <p>
                Friday — Sunday
                <br />
                6:00 PM — 12:00 AM
              </p>

              <p className="contact__closed">
                Monday — Closed
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            LOCATION / MAP
        ====================================================== */}
        <div className="contact__map">

          <div className="contact__map-grid"></div>

          <div className="contact__map-content">

            <div className="contact__map-pin">
              <FiMapPin />
            </div>

            <span>
              MÉRÉA
            </span>

            <p>
              Bandra West, Mumbai
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=14+Harbour+View+Bandra+West+Mumbai"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <FiArrowUpRight />
            </a>

          </div>

        </div>


        {/* =====================================================
            INSTAGRAM
        ====================================================== */}
        <div className="contact__social">

          <div>

            <span>
              Follow along
            </span>

            <h3>
              @merea.restaurant
            </h3>

          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
            <FiArrowUpRight />
          </a>

        </div>

      </div>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="footer">

        <div className="footer__container">

          {/* Brand */}
          <div className="footer__brand">

            <a href="#home">
              MÉRÉA
              <span>
                RESTAURANT
              </span>
            </a>

            <p>
              Contemporary Indian cuisine,
              thoughtfully reimagined.
            </p>

          </div>


          {/* Footer Links */}
          <nav className="footer__links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#menu">
              Menu
            </a>

            <a href="#gallery">
              Gallery
            </a>

            <a href="#reservations">
              Reservations
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>


          {/* Footer CTA */}
          <a
            href="#reservations"
            className="footer__button"
          >
            Book a Table
            <FiArrowUpRight />
          </a>

        </div>


        {/* Footer Bottom */}
        <div className="footer__bottom">

          <span>
            © 2026 MÉRÉA Restaurant
          </span>

          <span>
            Crafted with intention.
          </span>

          <a href="#home">
            Back to top
            <FiArrowUpRight />
          </a>

        </div>

      </footer>

    </section>
  );
}

export default Contact;