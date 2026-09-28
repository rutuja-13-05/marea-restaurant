import { useState } from 'react';
import {
  FiArrowUpRight,
  FiClock,
  FiMapPin,
  FiPhone,
  FiCheck,
  FiCalendar
} from 'react-icons/fi';

import './Reservations.scss';

function Reservations() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  const handleNewReservation = () => {
    setFormData({
      date: '',
      time: '',
      guests: '',
      name: '',
      phone: '',
      email: '',
      message: ''
    });

    setIsSubmitted(false);
  };

  return (
    <section className="reservations" id="reservations">
      <div className="reservations__container">

        {/* =========================
            HEADER
        ========================= */}
        <div className="reservations__header">

          <div className="reservations__eyebrow">
            <span>04</span>
            <i></i>
            <span>Reservations</span>
          </div>

          <div className="reservations__heading">
            <h2>
              Your table
              <em>awaits.</em>
            </h2>

            <p>
              Join us for an evening of thoughtful food,
              warm hospitality and moments worth lingering over.
            </p>
          </div>

        </div>


        {/* =========================
            MAIN CONTENT
        ========================= */}
        <div className="reservations__content">

          {/* =========================
              FORM / CONFIRMATION
          ========================= */}
          <div className="reservations__form-wrapper">

            {!isSubmitted ? (

              <>
                <div className="reservations__form-header">
                  <span>01</span>
                  <h3>Make a reservation</h3>
                </div>

                <form
                  className="reservations__form"
                  onSubmit={handleSubmit}
                >

                  {/* Date + Time */}
                  <div className="reservations__row">

                    <div className="reservations__field">
                      <label htmlFor="date">
                        Date
                      </label>

                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>


                    <div className="reservations__field">
                      <label htmlFor="time">
                        Time
                      </label>

                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select time
                        </option>

                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>

                  </div>


                  {/* Guests */}
                  <div className="reservations__field">

                    <label htmlFor="guests">
                      Number of guests
                    </label>

                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select guests
                      </option>

                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                      <option>7+ Guests</option>
                    </select>

                  </div>


                  {/* Name + Phone */}
                  <div className="reservations__row">

                    <div className="reservations__field">

                      <label htmlFor="name">
                        Your name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="reservations__field">

                      <label htmlFor="phone">
                        Phone number
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  {/* Email */}
                  <div className="reservations__field">

                    <label htmlFor="email">
                      Email address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* Special Request */}
                  <div className="reservations__field">

                    <label htmlFor="message">
                      Special request
                      <span>Optional</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Birthday, anniversary, dietary requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="reservations__button"
                  >
                    <span>Reserve a Table</span>
                    <FiArrowUpRight />
                  </button>

                </form>
              </>

            ) : (

              /* =========================
                 CONFIRMATION STATE
              ========================= */
              <div className="reservation-success">

                <div className="reservation-success__icon">
                  <FiCheck />
                </div>

                <span className="reservation-success__eyebrow">
                  Reservation received
                </span>

                <h3>
                  Thank you,
                  <em>{formData.name}.</em>
                </h3>

                <p className="reservation-success__message">
                  Your reservation request has been received.
                  We look forward to welcoming you at MÉRÉA.
                </p>


                {/* Booking Details */}
                <div className="reservation-success__details">

                  <div className="reservation-success__detail">
                    <FiCalendar />

                    <div>
                      <span>Date</span>
                      <strong>{formData.date}</strong>
                    </div>
                  </div>


                  <div className="reservation-success__detail">
                    <FiClock />

                    <div>
                      <span>Time</span>
                      <strong>{formData.time}</strong>
                    </div>
                  </div>


                  <div className="reservation-success__detail">
                    <FiMapPin />

                    <div>
                      <span>Guests</span>
                      <strong>{formData.guests}</strong>
                    </div>
                  </div>

                </div>


                <div className="reservation-success__actions">

                  <button
                    type="button"
                    onClick={handleNewReservation}
                    className="reservation-success__secondary"
                  >
                    Make another reservation
                  </button>

                  <a
                    href="#home"
                    className="reservation-success__primary"
                  >
                    <span>Back to home</span>
                    <FiArrowUpRight />
                  </a>

                </div>

              </div>

            )}

          </div>


          {/* =========================
              INFORMATION
          ========================= */}
          <aside className="reservations__info">

            <div className="reservations__info-block">

              <span className="reservations__info-number">
                02
              </span>

              <h3>Visit MÉRÉA</h3>

              <div className="reservations__detail">

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


            <div className="reservations__info-block">

              <span className="reservations__info-number">
                03
              </span>

              <h3>Opening hours</h3>

              <div className="reservations__hours">

                <div>
                  <span>Tuesday — Thursday</span>
                  <strong>6:00 PM — 11:00 PM</strong>
                </div>

                <div>
                  <span>Friday — Sunday</span>
                  <strong>6:00 PM — 12:00 AM</strong>
                </div>

                <div>
                  <span>Monday</span>
                  <strong>Closed</strong>
                </div>

              </div>

            </div>


            <div className="reservations__info-block">

              <span className="reservations__info-number">
                04
              </span>

              <h3>Need help?</h3>

              <div className="reservations__contact">

                <a href="tel:+912212345678">
                  <FiPhone />
                  +91 22 1234 5678
                </a>

                <a href="#contact">
                  <FiClock />
                  Contact our team
                </a>

              </div>

            </div>

          </aside>

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================= */}
        <div className="reservations__bottom">

          <span></span>

          <p>
            Good food deserves
            <em>good company.</em>
          </p>

          <span></span>

        </div>

      </div>
    </section>
  );
}

export default Reservations;