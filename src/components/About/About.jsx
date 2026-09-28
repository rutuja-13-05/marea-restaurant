import { FiArrowUpRight } from 'react-icons/fi';
import './About.scss';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">

        {/* Section Intro */}
        <div className="about__intro">
          <div className="about__eyebrow">
            <span className="about__eyebrow-number">01</span>
            <span className="about__eyebrow-line"></span>
            <span>Our Story</span>
          </div>

          <p className="about__intro-text">
            A contemporary expression of India's rich culinary heritage,
            created with respect for tradition and a curiosity for what comes next.
          </p>
        </div>


        {/* Main Content */}
        <div className="about__main">

          {/* Left Content */}
          <div className="about__content">

            <h2 className="about__title">
              Where tradition
              <em>meets a modern table.</em>
            </h2>

            <div className="about__copy">
              <p>
                At MÉRÉA, we celebrate the depth, warmth and character
                of Indian cuisine through a contemporary lens.
              </p>

              <p>
                Familiar flavours meet unexpected combinations, with
                every plate thoughtfully created to bring together
                the soul of tradition and the rhythm of modern dining.
              </p>
            </div>

            <div className="about__philosophy">
              <span className="about__philosophy-line"></span>

              <div>
                <small>OUR PHILOSOPHY</small>

                <p>
                  Rooted in tradition.
                  <br />
                  Designed for today.
                </p>
              </div>
            </div>

            <a href="#contact" className="about__link">
              <span>Discover our story</span>
              <FiArrowUpRight />
            </a>

          </div>


          {/* Right Image */}
          <div className="about__visual">

            <div className="about__image-wrapper">

              <div className="about__image">
                <img
                  src="/src/assets/about.png"
                  alt="Signature dish at MÉRÉA"
                />
              </div>

              <div className="about__image-label">
                <span>MÉRÉA</span>
                <span>EST. 2026</span>
              </div>

            </div>

            <div className="about__vertical-text">
              CONTEMPORARY INDIAN CUISINE
            </div>

          </div>

        </div>


        {/* Stats */}
        <div className="about__stats">

          <div className="about__stat">
            <strong>15<span>+</span></strong>

            <div>
              <small>YEARS OF</small>
              <p>CULINARY CRAFT</p>
            </div>
          </div>


          <div className="about__stat">
            <strong>25<span>+</span></strong>

            <div>
              <small>SIGNATURE</small>
              <p>DISHES</p>
            </div>
          </div>


          <div className="about__stat">
            <strong>100<span>%</span></strong>

            <div>
              <small>MADE WITH</small>
              <p>PASSION</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;