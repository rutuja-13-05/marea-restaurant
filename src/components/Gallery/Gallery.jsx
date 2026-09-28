import { FiArrowUpRight } from 'react-icons/fi';
import './Gallery.scss';

import interior from '../../assets/gallery-interior.jpg';
import table from '../../assets/gallery-table.jpg';
import chef from '../../assets/gallery-chef.jpg';
import ambience from '../../assets/gallery-ambience.jpg';
import dish from '../../assets/gallery-dish.jpg';

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: interior,
      title: 'The Dining Room',
      category: 'THE SPACE',
      className: 'gallery__item--large',
    },
    {
      id: 2,
      image: table,
      title: 'At The Table',
      category: 'THE DETAIL',
      className: 'gallery__item--small',
    },
    {
      id: 3,
      image: chef,
      title: 'From Our Kitchen',
      category: 'THE CRAFT',
      className: 'gallery__item--small',
    },
    {
      id: 4,
      image: ambience,
      title: 'After Sunset',
      category: 'THE EXPERIENCE',
      className: 'gallery__item--wide',
    },
    {
      id: 5,
      image: dish,
      title: 'A Moment On The Plate',
      category: 'THE CUISINE',
      className: 'gallery__item--portrait',
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">

        {/* Header */}
        <div className="gallery__header">

          <div className="gallery__eyebrow">
            <span>03</span>
            <i></i>
            <span>The Experience</span>
          </div>

          <div className="gallery__heading">
            <h2 className="gallery__title">
              Moments made
              <em>to be remembered.</em>
            </h2>

            <p className="gallery__intro">
              From the first pour to the final course,
              every detail at MÉRÉA is designed to be savoured.
            </p>
          </div>

        </div>


        {/* Gallery */}
        <div className="gallery__grid">

          {galleryItems.map((item) => (
            <a
              href="#contact"
              className={`gallery__item ${item.className}`}
              key={item.id}
            >

              <div className="gallery__image">
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery__overlay">
                  <span className="gallery__category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <span className="gallery__arrow">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>

            </a>
          ))}

        </div>


        {/* Bottom */}
        <div className="gallery__bottom">

          <span></span>

          <p>
            Come for the food.
            <em>Stay for the feeling.</em>
          </p>

          <span></span>

        </div>

      </div>
    </section>
  );
}

export default Gallery;