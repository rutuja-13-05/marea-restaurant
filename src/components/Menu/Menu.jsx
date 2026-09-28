import { useEffect, useState } from 'react';
import {
  FiArrowUpRight,
  FiX,
} from 'react-icons/fi';

import './Menu.scss';

import smokedPaneer from '../../assets/smokepaneer.jpg';
import mereaChaat from '../../assets/mereachaat.jpg';
import butterChicken from '../../assets/butterchicken.jpg';
import truffleDal from '../../assets/daltadka.jpg';
import cardamomDessert from '../../assets/cardeam.jpg';

function Menu() {

  // ========================================
  // MENU DATA
  // ========================================

  const menuItems = [
    {
      id: 1,
      category: 'STARTER',
      name: 'Smoked Paneer Tikka',
      description:
        'Charred paneer, smoked spices, mint chutney and pickled onions.',
      price: '₹495',
      image: smokedPaneer,
    },

    {
      id: 2,
      category: 'STARTER',
      name: 'MÉRÉA Chaat',
      description:
        'Crisp potato, whipped yoghurt, tamarind and aromatic spice.',
      price: '₹425',
      image: mereaChaat,
    },

    {
      id: 3,
      category: 'MAIN',
      name: 'Saffron Butter Chicken',
      description:
        'Slow-cooked chicken, saffron tomato sauce and toasted spices.',
      price: '₹695',
      image: butterChicken,
    },

    {
      id: 4,
      category: 'MAIN',
      name: 'Truffle Dal',
      description:
        'Black lentils, cultured butter, truffle and a touch of smoked chilli.',
      price: '₹595',
      image: truffleDal,
    },

    {
      id: 5,
      category: 'DESSERT',
      name: 'Cardamom Tres Leches',
      description:
        'Soft cardamom cake, saffron milk, pistachio and rose.',
      price: '₹395',
      image: cardamomDessert,
    },
  ];


  // ========================================
  // STATE
  // ========================================

  const [activeItem, setActiveItem] = useState(menuItems[0]);

  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);


  // ========================================
  // BODY SCROLL LOCK
  // ========================================
  // Locks the background page only while
  // the full menu modal is open.
  //
  // Cleanup makes sure scrolling is restored
  // even if the component changes/unmounts.




  // ========================================
  // ESCAPE KEY
  // ========================================

  useEffect(() => {

    if (!isFullMenuOpen) return;

    const handleKeyDown = (event) => {

      if (event.key === 'Escape') {
        setIsFullMenuOpen(false);
      }

    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [isFullMenuOpen]);


  // ========================================
  // OPEN FULL MENU
  // ========================================

  const openFullMenu = () => {
    setIsFullMenuOpen(true);
  };


  // ========================================
  // CLOSE FULL MENU
  // ========================================

  const closeFullMenu = () => {
    setIsFullMenuOpen(false);
  };


  // ========================================
  // COMPONENT
  // ========================================

  return (
    <>

      {/* ========================================
          MAIN MENU SECTION
      ======================================== */}

      <section className="menu" id="menu">

        <div className="menu__container">


          {/* ========================================
              HEADER
          ======================================== */}

          <div className="menu__header">

            <div className="menu__eyebrow">
              <span>02</span>
              <i></i>
              <span>The Menu</span>
            </div>


            <div className="menu__heading-area">

              <h2 className="menu__title">
                A taste
                <em>worth remembering.</em>
              </h2>


              <p className="menu__intro">
                A thoughtful collection of familiar flavours,
                unexpected combinations and ingredients chosen
                with intention.
              </p>

            </div>

          </div>


          {/* ========================================
              MENU CONTENT
          ======================================== */}

          <div className="menu__content">


            {/* ========================================
                LEFT IMAGE
            ======================================== */}

            <div className="menu__visual">

              <div className="menu__image">

                <img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.name}
                />

              </div>


              <div className="menu__image-caption">

                <span>MÉRÉA</span>

                <span>
                  {activeItem.category}
                </span>

              </div>

            </div>


            {/* ========================================
                RIGHT MENU LIST
            ======================================== */}

            <div className="menu__list">

              {menuItems.map((item, index) => {

                const isActive =
                  activeItem.id === item.id;

                return (

                  <button
                    type="button"
                    className={`menu__item ${
                      isActive
                        ? 'menu__item--active'
                        : ''
                    }`}
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    aria-pressed={isActive}
                  >

                    {/* NUMBER */}

                    <div className="menu__item-number">
                      0{index + 1}
                    </div>


                    {/* DISH INFORMATION */}

                    <div className="menu__item-info">

                      <span className="menu__item-category">
                        {item.category}
                      </span>


                      <h3>
                        {item.name}
                      </h3>


                      <p>
                        {item.description}
                      </p>

                    </div>


                    {/* PRICE */}

                    <div className="menu__item-price">
                      {item.price}
                    </div>


                    {/* ACTIVE ARROW */}

                    <span className="menu__active-arrow">
                      <FiArrowUpRight />
                    </span>

                  </button>

                );
              })}


              {/* ========================================
                  VIEW FULL MENU BUTTON
              ======================================== */}

              <button
                type="button"
                className="menu__button"
                onClick={openFullMenu}
                aria-expanded={isFullMenuOpen}
                aria-controls="merea-full-menu"
              >

                <span>
                  View Full Menu
                </span>

                <FiArrowUpRight />

              </button>

            </div>

          </div>


          {/* ========================================
              BOTTOM STATEMENT
          ======================================== */}

          <div className="menu__bottom">

            <span className="menu__bottom-line"></span>


            <p>
              Our menu changes with the seasons,
              keeping every visit a little different.
            </p>


            <span className="menu__bottom-line"></span>

          </div>

        </div>

      </section>


      {/* ==================================================
          FULL MENU OVERLAY
      ================================================== */}

      {isFullMenuOpen && (

        <div
          className="full-menu"
          id="merea-full-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="full-menu-title"
        >

          {/* ========================================
              OVERLAY BACKGROUND
          ======================================== */}

          <div
            className="full-menu__backdrop"
            onClick={closeFullMenu}
            aria-hidden="true"
          ></div>


          {/* ========================================
              MENU PANEL
          ======================================== */}

          <div className="full-menu__panel">


            {/* ========================================
                HEADER
            ======================================== */}

            <div className="full-menu__header">

              <div>

                <span className="full-menu__eyebrow">
                  MÉRÉA · RESTAURANT
                </span>

                <h2 id="full-menu-title">
                  Our <em>Full Menu</em>
                </h2>

              </div>


              {/* CLOSE */}

              <button
                type="button"
                className="full-menu__close"
                onClick={closeFullMenu}
                aria-label="Close full menu"
              >

                <FiX />

              </button>

            </div>


            {/* ========================================
                MENU ITEMS
            ======================================== */}

            <div className="full-menu__content">

              {menuItems.map((item, index) => (

                <div
                  className="full-menu__item"
                  key={item.id}
                >

                  <div className="full-menu__number">
                    0{index + 1}
                  </div>


                  <div className="full-menu__info">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>


                  <div className="full-menu__price">
                    {item.price}
                  </div>

                </div>

              ))}

            </div>


            {/* ========================================
                FOOTER
            ======================================== */}

            <div className="full-menu__footer">

              <span></span>

              <p>
                Seasonal ingredients · Crafted with intention
              </p>

              <span></span>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Menu;